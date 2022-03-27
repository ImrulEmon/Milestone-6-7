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


// function add (first:number,second:number):number{
//     const result = first+second;
//     return result;
// }

// console.log(add(2,3));


function add (first:number | string, second:number | string):number | string{
    const result: string | number = first + second;
    return result;
}

console.log(add('hody','jones'));