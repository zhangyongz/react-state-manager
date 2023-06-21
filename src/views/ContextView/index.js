import React, { useContext, useState, useMemo, useReducer } from 'react'
import { scrollContext } from './context';

const Section1 = () => {
  console.log('Section1');

  const { num, dispatch } = useContext(scrollContext);

  const clickHandle = () => {
    console.log('btn1Click');
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

const Section2 = () => {
  console.log('Section2');
  const { num2 } = useContext(scrollContext);

  const clickHandle = () => {
    console.log('btn2Click');
  }

  return (
    <div className='btn' onClick={clickHandle}>
      num2: {num2}
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
  const [num1, setNum1] = useState(0)
  
  const clickHandle = () => {
    setNum1(num1 + 1)
  }

  return (
    <div className="App">
      <MyProvider>
        <Section1 />
        <Section2 />
        <div className='btn' onClick={clickHandle}>
          btn3
        </div>
      </MyProvider>
    </div>
  );
}

export default ContextView;
