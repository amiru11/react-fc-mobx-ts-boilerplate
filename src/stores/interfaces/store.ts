export interface ICounterStore {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

export interface IRootStore {
  counterStore?: ICounterStore;
}
