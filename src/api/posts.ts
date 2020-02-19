import request from 'lib/request';
import { AxiosResponse } from 'axios';

export const getPosts = (): Promise<AxiosResponse> =>
  request({
    url: `https://jsonplaceholder.typicode.com/posts/`,
    method: 'GET',
  });

export const getPostById = (id: number): Promise<AxiosResponse> =>
  request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'GET',
  });

export const createPosts = ({ data }: any): Promise<AxiosResponse> =>
  request({
    url: `https://jsonplaceholder.typicode.com/posts/`,
    method: 'POST',
    data,
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });

export const editPosts = (id: number): Promise<AxiosResponse> =>
  request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'PUT',
  });

export const deletePosts = (id: number): Promise<AxiosResponse> =>
  request({
    url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    method: 'DELETE',
  });
