// type declaration
let me = 'Simran';
let num = 10;
let bol = false;
const newUser = {
    name: 'Irfan',
    roll: 20,
    active: false,
};
let newStudent = {
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
let data = { name: 'Saloni' };
console.log(data.name);
/*
-> Generic types
-> typescript uses generic types in function
*/
function convetToString(arg) {
    return String(arg);
}
console.log('String type', typeof convetToString('true'));
