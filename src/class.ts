interface PersonInterface {
  name: string;
  age: number;
  sayMyName: () => void;
}

class Person implements PersonInterface {
  name: string;
  age: number;

  sayMyName() {}
}

import { Saloni } from './module';
console.log('Hi', Saloni.name);
