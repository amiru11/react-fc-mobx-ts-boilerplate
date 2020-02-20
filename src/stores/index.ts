import React from 'react';
import CounterStore from './Couter';
import PostsStore from './Posts';

const RootStore = React.createContext({
  counterStore: new CounterStore(),
  postsStore: new PostsStore(),
});

export default RootStore;
