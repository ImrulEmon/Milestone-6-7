/**
 * arrow function
 * spread operator
 */

const num =()=> 55;
const num2 =(x)=> x+55;

const fruit = ['aam','jaam','lichu'];
console.log(fruit);
const fruit2=['jambura',...fruit];
fruit2.unshift('tormuj');
console.log(fruit2);