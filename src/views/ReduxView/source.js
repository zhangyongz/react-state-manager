import { createContext, useMemo, useReducer, useContext, useRef, useLayoutEffect } from 'react';

const ReactReduxContext = createContext(null);

// 传递给 provider 的是 store 实例本身
const Provider = ({ store, children }) => {
  const contextValue = useMemo(() => {
      return {
          store
      }
  }, [store]);
  return (
      <ReactReduxContext.Provider value={contextValue}>
          {children}
      </ReactReduxContext.Provider>
  )
}

function useSelector(selector) {
  const [, forceRender] = useReducer((counter) => counter + 1, 0);
  const { store } = useContext(ReactReduxContext);

  const selectedValueRef = useRef(selector(store.getState()));

  useLayoutEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const storeState = store.getState();
      const latestSelectedValue = selector(storeState);

      if (latestSelectedValue !== selectedValueRef.current) {
        selectedValueRef.current = latestSelectedValue;
        forceRender();
      }
    });

    return unsubscribe;
  }, [store]);

  return selectedValueRef.current;
}