import { buildPerson, buildMakePerson } from "../../src/js-foundation/05-factory";

describe('js-foundation/05-factory', () => {
  
  const person = { name: 'John', birthday: '1985-10-21' }
  const getID = () => '1234';
  const getAge = () => 35;

  test('buildPerson should return a function', () => {
    
    const buildedPerson = buildPerson(person);
    expect(typeof buildedPerson).toBe('object');

    
  });

  test('buildMakePerson should return a function', () => {
    const buildedPerson = buildMakePerson({ getAge, getID });
    expect(typeof buildedPerson).toBe('function');
  });

  test('buildMakePerson should return a person', () => {
    const buildedPerson = buildMakePerson({ getAge, getID });
    expect(typeof buildedPerson).toBe('function');
  });
});