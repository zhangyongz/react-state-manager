import React, { useContext, useMemo, useReducer } from 'react'
import { scrollContext } from './context';

const Section1 = () => {
  console.log('Section1');

  const { num, dispatch } = useContext(scrollContext);

  const clickHandle = () => {
    dispatch({
      type: 'add'
    })
  }

  return (
    <div className='btn' onClick={clickHandle}>
      num: {num}
    </div>
  )
}

// delete num
// refer num2
const Section2 = () => {
  console.log('Section2');
  const { num } = useContext(scrollContext);

  return (
    <div className='btn'>
      num2: {num}
    </div>
  )
}

const numReducer = (num, action) => {
  switch (action.type) {
    case 'add':
      return num + 1
  
    default:
      break;
  }
}

const MyProvider = ({ children }) => {
  const [num, dispatch] = useReducer(numReducer, 0)
  const num2 = 0
  const context = useMemo(() => {
    return { num, dispatch, num2 }
  }, [num])

  return <scrollContext.Provider value={context}>
    {children}
</scrollContext.Provider>
};

const ContextView = () => {
  return (
    <div className="App">
      <MyProvider>
        <Section1 />
        <Section2 />
      </MyProvider>
    </div>
  );
}

export default ContextView;
