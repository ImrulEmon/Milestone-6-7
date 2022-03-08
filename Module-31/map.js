const number = [1,2,3,4,5];
const out=[];
const doubleIt = n => n*2;
for(n of number){
    const result = doubleIt(n);
    out.push(result);
}
console.log(out);

const output = number.map(doubleIt);
const out2 = number.map(n=>Math.pow(n,2));
console.log(number);
console.log(output);
console.log(out2);