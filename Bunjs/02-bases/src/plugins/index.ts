const { getAge } = require('./get-age.plugin');
const { HttpClientPluggin, HttpClientPlugginAxios } = require('./http-client.pluggin');

module.exports = {
  getAge,
  HttpClientPluggin,
  http: HttpClientPlugginAxios
}