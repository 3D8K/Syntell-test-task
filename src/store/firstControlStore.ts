import { makeAutoObservable } from "mobx";

class FirstControlStore {
  value: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  changeValue = (text: string) => {
    this.value = text;
  };
}

export default new FirstControlStore();
