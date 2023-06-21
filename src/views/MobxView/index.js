import { observer } from "mobx-react-lite"
import store from "./store";

const Section1 = observer(() => {
  console.log('Section1');

  // const { num, dispatch } = useContext(scrollContext);

  const clickHandle = () => {
    console.log('btn1Click');
    store.addNum1();
  }

  return (
    <div className='btn' onClick={clickHandle}>
      num1: {store.num1}
    </div>
  )
})

const Section2 = observer(() => {
  console.log('Section2');

  const clickHandle = () => {
    console.log('btn2Click');
    store.addNum2();
  }

  return (
    <div className='btn' onClick={clickHandle}>
      num2: {store.num2}
    </div>
  )
})

const MobxView = () => {
  return <>
    <Section1 />
    <Section2 />
  </>
}

export default MobxView