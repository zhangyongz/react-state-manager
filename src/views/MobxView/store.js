import { makeAutoObservable } from "mobx"

class Store {
  num1 = 0
  num2 = 0

  constructor() {
      makeAutoObservable(this)
  }

  addNum1() {
    this.num1 += 1
  }
  addNum2() {
    this.num2 += 1
  }
}

const store = new Store()
export default store