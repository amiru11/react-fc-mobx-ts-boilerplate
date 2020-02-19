import React from 'react';
import CounterStore from './Couter';

const RootStore = React.createContext({
  counterStore: new CounterStore(),
});

export default RootStore;
