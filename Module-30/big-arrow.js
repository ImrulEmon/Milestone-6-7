function print(element) {
    console.log(element);
}

const add = (a,b) => a+b;
print(add(5,6));
const multipy = (n1,n2,n3) => n1*n2*n3;
print(multipy(1,2,3));

const getName = () => "Imrul Emon-Without Parameter";
print(getName());

// Multiline

const doMath=(x,y)=>{
    const add = x+10;
    const mul = y*10;
    return add+mul;
}
print(doMath(0,1));