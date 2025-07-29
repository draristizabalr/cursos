const getAgePlugin = require('get-age');

const getAge = (birthdate: string): number => {
  if (!birthdate) throw new Error('Birthday is required');

  return getAgePlugin(birthdate);
}

module.exports = {
  getAge
}