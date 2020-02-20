import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

import useStore from 'hooks/useStore';
import { bindClassName } from 'lib/utils';

import PostItem from 'components/posts/PostItem';

import styles from './Posts.scss';

const cx = bindClassName(styles);

const Posts = observer(() => {
  const { postsStore } = useStore();
  const { getPosts: posts, isLoading, error, loadPosts } = postsStore;
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);
  if (isLoading) return <>Loading,,,</>;
  if (error) return <>Error!!</>;
  return (
    <div className={cx('posts-container')}>
      {posts?.length &&
        posts.map(post => <PostItem key={post.id} post={post} />)}
    </div>
  );
});

export default Posts;
