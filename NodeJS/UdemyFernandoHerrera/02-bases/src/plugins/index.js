const { getAge } = require('./get-age.plugin');
const { HttpClientPluggin, HttpClientPlugginAxios } = require('./http-client.pluggin');

const buildLogger = require('./winstone.plugin');

module.exports = {
  getAge,
  http: HttpClientPlugginAxios,
  buildLogger
}