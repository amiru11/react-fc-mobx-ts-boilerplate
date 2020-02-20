import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';

import styles from './Home.scss';

const cx = classnames.bind(styles);

function Home(): JSX.Element {
  return (
    <>
      <section className={cx('section-2')}>
        <Link to="/counter">Go to Counter test</Link>
        <Link to="/posts">Go to Posts test</Link>
      </section>
    </>
  );
}

export default Home;
