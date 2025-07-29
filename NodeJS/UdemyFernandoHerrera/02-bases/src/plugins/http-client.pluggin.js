const axios = require('axios');

const HttpClientPluggin = {
  get: async (url) => {
    const response = await fetch(url);
    return await response.json();
  },
  post: async(url, body) => {}
};

const HttpClientPlugginAxios = {
  get: (url) => {
    return axios.get(url)
      .then((response) => response.data)
  },
  post: (url, body) => {}
};

module.exports = {
  HttpClientPluggin,
  HttpClientPlugginAxios
}