import { IPost } from 'stores/interfaces/post';

export interface ICounterStore {
  counter: number;
  increase: () => void;
  decrease: () => void;
}

export interface IPostStore {
  post: IPost;
  posts: IPost[];
  isLoading: boolean;
  error: string;
  loadPosts: () => Promise<void>;
  loadPostById: (id: number) => Promise<void>;
  createPost: () => Promise<void>;
  handleChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeForTextArea: ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => void;
  getPost: IPost;
  getPosts: IPost[];
}

export interface IRootStore {
  counterStore?: ICounterStore;
  postStore?: IPostStore;
}
