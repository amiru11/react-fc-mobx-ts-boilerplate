import React from 'react';
import { Link } from 'react-router-dom';

import { bindClassName } from 'lib/utils';

import styles from './PostItem.scss';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostItem {
  post: IPost;
}

const cx = bindClassName(styles);

function PostItemComponent(post: IPostItem): JSX.Element {
  return (
    <div className={cx('item-wrap')}>
      <Link to={`/posts/${post.id}`}>
        <h3 className={cx('item-title')}>{`${post.id}. ${post.title}`}</h3>
      </Link>
    </div>
  );
}
