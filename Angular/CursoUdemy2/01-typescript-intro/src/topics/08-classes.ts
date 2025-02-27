export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public address: string = 'No Address'
  ) {}
}

export class Hero {

  
  constructor(
    public alterEgo: string,
    public age: number,
    public person: Person
  ) { }
}

const tony = new Person('Tony', 'Stark', 'New York')
const ironman = new Hero('Iron', 45, tony);

console.log(ironman);
