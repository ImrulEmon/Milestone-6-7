function print(element) {
    console.log(element);
}

const aot ='Eren Yeager';
const mha = "Izuku Midoriya";
const op = `Money D. Luffy`;

const multiline = `
first line.
second line.
3.third line
`;
print(multiline);
// ----------------------
const count = 5;
const old = "i am "+count+" yeras old";
print(old);
const new1 = `i am ${count} years old`;
print(new1);

function fullName(first = 'Empty',second = 'Empty surname') {
  return `${first.length} ${second}`;
}

print(fullName("khan",'jahan'));
// document.getElementById("my-btn").onclick = function functionName(){
//     //statements
// }



const addArrow=(numx,numy) => numx+numy;
const sumxy = addArrow(6,9);
print(sumxy);

