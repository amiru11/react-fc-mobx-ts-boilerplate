import Axios, { AxiosRequestConfig } from 'axios';

export default ({ ...config }: AxiosRequestConfig): Promise<any> =>
  new Promise((resolve, reject) => {
    Axios({ ...config })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
