import React from 'react';
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { increment1, increment2, selectCount1, selectCount2, incrementAsync } from "./store";

const Section1 = () => {
  console.log('Section1');

  const count1 = useSelector(selectCount1)
  const dispatch = useDispatch()

  const clickHandle = () => {
    // dispatch(increment1(1));
    dispatch(incrementAsync(1, 1000))
  }

  return (
    <div className='btn' onClick={clickHandle}>
      count1: {count1}
    </div>
  )
}

const Section2 = () => {
  console.log('Section2');
  const count2 = useSelector(selectCount2)

  const dispatch = useDispatch()

  const clickHandle = () => {
    dispatch(increment1(1));
  }

  return (
    <div className='btn' onClick={clickHandle}>
      count2: {count2}
    </div>
  )
}

const ReduxView = () => {

  return (
    <Provider store={store}>
      <Section1 />
      <Section2 />
    </Provider>
  );
}

export default ReduxView;
