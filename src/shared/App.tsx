import React from 'react';
import { Switch, Route } from 'react-router-dom';
import classnames from 'classnames/bind';

import Home from 'pages/home/Home';
import Counter from 'pages/counter/Counter';

import styles from './App.scss';

const cx = classnames.bind(styles);

function App(): JSX.Element {
  return (
    <div className={cx('app-container')}>
      <main className={cx('main-container')}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/counter" component={Counter} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
