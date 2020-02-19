import React from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames/bind';

import useStore from 'hooks/useStore';

import styles from './Counter.scss';

const cx = classnames.bind(styles);

const Counter = observer(() => {
  const { counterStore } = useStore();
  const { counter, increase, decrease } = counterStore;
  return (
    <div className={cx('counter-container')}>
      <h2>{counter}</h2>
      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
});

export default Counter;
