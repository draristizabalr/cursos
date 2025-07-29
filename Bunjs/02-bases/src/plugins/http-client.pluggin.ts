const { get, AxiosResponse } = require('axios');

const HttpClientPluggin = {
  get: async <T>(url: string): Promise<T> => {
    const response = await fetch(url);
    return await response.json() as T;
  },
  post: async <T>(url: string, body: T) => {}
};

const HttpClientPlugginAxios = {
  get: <T>(url:string) => {
    return get(url)
      .then((response: typeof AxiosResponse) => response.data as T)
  },
  post: <T, K>(url: string, body: T) => {}
};

module.exports = {
  HttpClientPluggin,
  HttpClientPlugginAxios
}