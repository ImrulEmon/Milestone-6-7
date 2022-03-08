function print(element) {
    console.log(element);
}
function printf(elements) {
    for(const element of elements){
        console.log(element);
    }
    
}

const number = [1,2,3];
console.log(number);
console.log(...number);
print(Math.max(...number));
printf(number);
// ------------
const n2=[];
n2.push(...number);
print("------------------------------------");
n2.unshift("x");
printf(n2);
// ------------
const n3=number;

print("------------------------------------");
number.unshift(0);
printf(n3);