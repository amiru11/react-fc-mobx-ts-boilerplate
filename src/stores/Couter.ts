import { observable, action } from 'mobx';

export default class CounterStore {
  @observable
  public counter: number = 0;

  @action
  increase = (): void => {
    this.counter++;
    console.log('counter', this.counter);
  };

  @action
  decrease = (): void => {
    this.counter--;
    console.log('counter', this.counter);
  };
}
