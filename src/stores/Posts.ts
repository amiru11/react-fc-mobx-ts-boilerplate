import { observable, action, computed, runInAction } from 'mobx';
import * as API from 'api/posts';
import { IPost } from 'stores/interfaces/post';

export default class CounterStore {
  @observable public posts: IPost[] = null;
  @observable public post: IPost = {
    id: null,
    userId: null,
    title: '',
    body: '',
  };
  @observable public isLoading: boolean = false;
  @observable public error: string = null;

  @action
  loadPosts = async (): Promise<void> => {
    this.isLoading = true;
    try {
      const { data } = await API.getPosts();
      runInAction('Load Posts succesed', () => {
        this.posts = data;
        this.isLoading = false;
      });
    } catch (err) {
      runInAction('Load Posts fail', () => {
        // @TODO errorHandler 만들어서 처리하기
        this.error = err;
        this.isLoading = false;
      });
    }
  };

  @action
  loadPostById = async (id: number): Promise<void> => {
    this.isLoading = true;
    try {
      const { data } = await API.getPostById(id);
      runInAction('Load PostById succesed', () => {
        this.post = data;
        this.isLoading = false;
      });
    } catch (err) {
      runInAction('Load PostById fail', () => {
        // @TODO errorHandler 만들어서 처리하기
        alert(err.message);
        this.isLoading = false;
      });
    }
  };

  @action
  createPost = async (): Promise<void> => {
    this.isLoading = true;
    try {
      const data = { ...this.post, userId: 1 };
      const { data: result } = await API.createPosts({ data });
      runInAction('Create Posts successed', () => {
        console.log('result', result);
      });
    } catch (err) {
      console.log('err', err);
      runInAction('Create Posts fail', () => {
        // @TODO errorHandler 만들어서 처리하기
        alert(err.message);
        this.isLoading = false;
      });
    }
  };

  /**
   * Event control
   */

  @action
  handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target;
    this.post[name] = value;
  };

  @action
  handleChangeForTextArea = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { name, value } = target;
    this.post[name] = value;
  };

  /**
   * get Observable variable
   */
  @computed
  get getPosts() {
    return this.posts;
  }
  @computed
  get getPost() {
    return this.post;
  }
}
