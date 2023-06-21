import { useRecoilState } from "recoil";
import {num1State, num2State} from "./store";

const Section1 = () => {
  console.log('Section1');

  const [num1, setNum1] = useRecoilState(num1State);
  const clickHandle = () => {
    console.log('btn1Click');
    setNum1(num1+1);
  }

  return (
    <div className='btn' onClick={clickHandle}>
      num1: {num1}
    </div>
  )
}

const Section2 = () => {
  console.log('Section2');

  const [num2, setNum2] = useRecoilState(num2State);
  const clickHandle = () => {
    console.log('btn2Click');
    setNum2(num2+1);
  }

  return (
    <div className='btn' onClick={clickHandle}>
      num2: {num2}
    </div>
  )
}

const MobxView = () => {
  return <>
    <Section1 />
    <Section2 />
  </>
}

export default MobxView