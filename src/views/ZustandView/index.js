import { useRecoilState } from "recoil";
import { useStore } from "./store";

const Section1 = () => {
  console.log("Section1");

  const num1 = useStore(state => state.num1);
  const addNum1 = useStore(state => state.addNum1);
  const clickHandle = () => {
    console.log("btn1Click");
    addNum1();
  };

  return (
    <div className="btn" onClick={clickHandle}>
      num1: {num1}
    </div>
  );
};

const Section2 = () => {
  console.log("Section2");

  const num2 = useStore(state => state.num2);
  const addNum2 = useStore(state => state.addNum2);
  const clickHandle = () => {
    console.log("btn2Click");
    addNum2();
  };

  return (
    <div className="btn" onClick={clickHandle}>
      num2: {num2}
    </div>
  );
};

const MobxView = () => {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  );
};

export default MobxView;
