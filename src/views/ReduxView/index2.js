import React, { useEffect, useReducer } from 'react';
import store from "./store";
import { increment1, incrementAsync } from "./store";

const Section1 = () => {
  console.log('Section1');

  const count1 = store.getState().count1

  const clickHandle = () => {
    store.dispatch(increment1(1))
  }

  const [, update] = useReducer((counter) => counter + 1, 0)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      update()
    })
    return unsubscribe
  }, [])

  return (
    <div className='btn' onClick={clickHandle}>
      count1: {count1}
    </div>
  )
}

const Section2 = () => {
  console.log('Section2');
  const count2 = store.getState().count2

  const clickHandle = () => {
    store.dispatch(incrementAsync(1, 1000));
  }

  const [, update] = useReducer((counter) => counter + 1, 0)
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      update()
    })
    return unsubscribe
  }, [])

  return (
    <div className='btn' onClick={clickHandle}>
      count2: {count2}
    </div>
  )
}

const ReduxView = () => {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
}

export default ReduxView;
