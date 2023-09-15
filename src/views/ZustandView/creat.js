import { useEffect, useLayoutEffect } from "react";
import { useReducer, useRef } from "react";
import createStore from "./createStore";

function create(createState) {
  // 根据createStore 结合createState 创建一个store
  const api = createStore(createState);

  /**
   * @description 创建 hooks
   * @param {Function} selector  可选的，返回store的内容，默认api.getState
   * @param {Function} enqulityFn  可选，默认用Object.is 判断
   * @returns
   */
  const useStore = (selector = api.getState, enqulityFn = Object.is) => {
    // 生成一个forceUpdate函数
    const [, forceUpdate] = useReducer((c) => c + 1, 0);

    const state = api.getState();
    const stateRef = useRef(state);
    const currentStateRef = useRef(selector(state));

    // 添加state变化订阅事件
    useLayoutEffect(() => {
      const listener = () => {
        // 获取当前最新的state状态值
        const nextState = api.getState();
        // 拿到当前用户所需的store切片
        const nextStateSlice = selector(nextState);
        // 比较当前用户current切片 与 最新store切片是否是一样的，如果不一样，就更新到最新的切片
        if (!enqulityFn(nextStateSlice, currentStateRef.current)) {
          stateRef.current = nextState;
          currentStateRef.current = nextStateSlice;
          forceUpdate();
        }
      };
      const unSubscribe = api.subscribe(listener);
      // 当组件销毁，我们需要取消订阅
      return unSubscribe;
    }, []);

    // 返回用户所需切片
    return currentStateRef.current;
  };

  return useStore;
}

export default create;

// https://github.com/pmndrs/zustand/blob/main/src/react.ts
// https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreWithSelector.js
// https://github.com/facebook/react/blob/main/packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js
// https://react.dev/reference/react/useSyncExternalStore
// https://docs.pmnd.rs/zustand/getting-started/comparison