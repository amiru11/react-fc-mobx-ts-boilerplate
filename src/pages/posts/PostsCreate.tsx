import React from 'react';
import { useObserver } from 'mobx-react';
import { useHistory } from 'react-router-dom';

import useStore from 'hooks/useStore';
import { bindClassName } from 'lib/utils';

import Input from 'components/common/Input';
import TextArea from 'components/common/TextArea';

import styles from './PostsCreate.scss';

const cx = bindClassName(styles);

const PostsCreate = () => {
  const { postsStore } = useStore();
  const { push } = useHistory();
  const {
    post,
    handleChange,
    handleChangeForTextArea,
    createPost,
  } = postsStore;

  const create = async (): Promise<void> => {
    try {
      await createPost();
      push('/posts');
    } catch (err) {
      console.error('err', err);
      alert('Fail to create Post.');
    }
  };

  return useObserver(() => (
    <div className={cx('create-container')}>
      <label htmlFor="title">Title</label>
      <Input
        type="text"
        id="title"
        name="title"
        value={post?.title ?? ''}
        onChange={handleChange}
      />
      <pre />
      <TextArea
        id="body"
        name="body"
        value={post?.body ?? ''}
        onChange={handleChangeForTextArea}
      />
      <pre />
      <button onClick={create}>Create</button>
    </div>
  ));
};

export default PostsCreate;
