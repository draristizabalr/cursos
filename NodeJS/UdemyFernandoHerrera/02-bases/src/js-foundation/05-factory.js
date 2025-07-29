const { getAge } = require('../plugins/get-age.plugin');
const { randomUUID } = require('crypto');

const buildPerson = ({name, birthday}) => {
  return {
    id: randomUUID(),
    name,
    birthday,
    age: getAge(birthday),
  }
};

const obj = { name: 'John', birthday: '1985-10-21'};
const john = buildPerson(obj);

console.log(john);