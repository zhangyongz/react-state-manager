import { create } from "zustand";

const useStore = create((set) => ({
  num1: 0,
  num2: 0,
  addNum1: () => set((state) => ({ num1: state.num1 + 1 })),
  addNum2: () => set((state) => ({ num2: state.num2 + 1 })),
}));

export { useStore };
