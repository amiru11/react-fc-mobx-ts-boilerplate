import React from 'react';
import classnames from 'classnames/bind';

import styles from './App.scss';

const cx = classnames.bind(styles);

function App(): JSX.Element {
  return <div className={cx('App')}></div>;
}

export default App;
