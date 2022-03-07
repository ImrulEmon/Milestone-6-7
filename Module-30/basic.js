function print(element) {
    console.log(element);
}

const number=[1,2,3,4,5,6,7,8,9,10,11,12];
for(n of number){
    print(n);
}
print(number.length);
number.push(16);
print(number);
number.unshift(0);
print(number);
print(number.pop());
print(number);
print(number.shift());
print(number);
print(number.indexOf(100));
print(number.indexOf(9));

// object

const me ={
    name : "Imrul Emon",
    age : 21,
    job : "student",
    hair : "Black",
    height : 5.4
}

print(me);
print(me.name);
print(me.hair);