const EM = require('events').EventEmitter;
const em = new EM();

let pendingDerivation  = null;

const autorun = (fn) => {
  pendingDerivation = fn;
  fn();
  pendingDerivation = null;
};

const observable = (o) => {
  Object.defineProperty(o, '_data', {
    enumerable: false,
    value: Object.assign({}, o),
  });
  
  // 封装 get/set
  Object.keys(o).forEach(key => {
    Object.defineProperty(o, key, {
      get: function() {
        if (pendingDerivation) em.on('event', pendingDerivation);
        return this._data[key];
      },
      set: function(v) {
        // 一个简单的处理，值不变时不触发
        if (this._data[key] !== v) {
          this._data[key] = v;
          em.emit('event');
        }
      }
    });
  });

  return o;
}