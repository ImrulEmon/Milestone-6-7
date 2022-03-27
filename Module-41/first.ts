// const myNumber = 5;
// let money = 2000;
// money = 700;
// let myName='jake'
// myName='Eren';
// console.log('hello from TS',myNumber);

const myNumber:number = 5;
let money = 2000;
money = 700;
let myName:string='jake'
myName='Eren';
let boo:boolean=false;
boo=true;
console.log('hello from TS',myNumber,myName,money,boo);


function add (first:number,second:number){
    const result = first+second;
    return result;
}