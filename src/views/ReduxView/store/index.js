import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const INCREMENT1 = 'increment1';
const INCREMENT2 = 'increment2';

export const increment1 = data => ({ type: INCREMENT1, data });
export const increment2 = data => ({ type: INCREMENT2, data });

export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment1(data));
    }, time);
  };
};

const initState = {
  count1: 1,
  count2: 2
};

export const selectCount1 = (state) => state.count1
export const selectCount2 = (state) => state.count2

function reducer(preState = initState, action) {
  const { type, data } = action;
  console.log('type: ' + type);
  switch (type) {
    case INCREMENT1:
      return {
        ...preState,
        count1: preState.count1 + data
      };
    case INCREMENT2:
      return {
        ...preState,
        count2: preState.count2 + data
      };
    default:
      return preState;
  }
}

export default createStore(reducer, applyMiddleware(thunk));
