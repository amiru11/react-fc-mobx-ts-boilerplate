import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useParams } from 'react-router-dom';

import useStore from 'hooks/useStore';
import { bindClassName } from 'lib/utils';

import styles from './PostsDetail.scss';

const cx = bindClassName(styles);

const PostsDetail = observer(() => {
  const { id } = useParams();
  const { postsStore } = useStore();
  const { getPost: post, isLoading, error, loadPostById } = postsStore;

  useEffect(() => {
    loadPostById(Number(id));
  }, [loadPostById, id]);

  if (isLoading) return <>Loading,,,</>;
  if (error) return <>Error!!</>;

  return (
    <div className={cx('detail-container')}>
      <h2 className={cx('title')}>{post.title}</h2>
      <pre />
      <div
        className={cx('content')}
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
});

export default PostsDetail;
