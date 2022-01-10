// type declaration
let me: string = 'Simran';
let num: number = 10;
let bol: boolean = false;

// type declaration using interface
interface User {
  name: string;
  roll: number;
  active: boolean;
}

const newUser: User = {
  name: 'Irfan',
  roll: 20,
  active: false,
};

interface Students extends User {
  marks: () => void;
}

let newStudent: Students = {
  name: 'Raaj',
  roll: 13,
  active: true,
  marks: function () {
    console.log('User name', this.name);
  },
};

// newStudent.marks();
// console.log(newStudent.marks());

/* inline type declaration */
let data: { name: string } = { name: 'Saloni' };
console.log(data.name);

/*
-> Generic types 
-> typescript uses generic types in function
*/
function convetToString<T>(arg: string): string {
  return String(arg);
}
console.log('String type', typeof convetToString('true'));

