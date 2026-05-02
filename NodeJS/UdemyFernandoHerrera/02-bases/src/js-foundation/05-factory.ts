import { getAge } from '../plugins/get-age.plugin.js';
import { randomUUID } from 'crypto';

export const buildPerson = ({name, birthday}) => {
  return {
    id: randomUUID(),
    name,
    birthday,
    age: getAge(birthday),
  }
};

const obj = { name: 'John', birthday: '1985-10-21'};
const john = buildPerson(obj);


export const buildMakePerson = ({ getAge, getID }) => {
  return ({ name, birthday }) => {
    return {
      id: getID(),
      name,
      birthday,
      age: getAge(birthday),
    }
  }
}