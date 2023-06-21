import { atom } from "recoil";

export const num1State = atom({
  key: "num1", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const num2State = atom({
  key: "num2", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
