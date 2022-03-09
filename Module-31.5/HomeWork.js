// -------1------------

const print=(element)=>console.log(element);

const x=1;
let y= 2;
y=9;

print(x);
print(y);

// -----2-----------
const name = "Jack";
const kid={
    name:"Jack",
    age:5,
    job:"student",
    cls:1
}
const intro = `${name} is ${kid.age} years old.
He is a ${kid.job}.
He is in class ${kid.cls}.`;
print(intro);

// ------3-------------
// ----3.1----
const oneP = n => console.log(n*5);
oneP(5);

// ----3.2----
const twoP = (x,y) => (x+2)*(y+2);
print(twoP(2,2));
// ----3.3----
const threeP = (a,b,c)=> a*b*c;
print(threeP(2,3,10));
// ----3.4----
const twoPT = (x,y) => {
    const rx = x+2;
    const ry = y+2;
    const r =rx * ry;
    return r;
};
print(twoPT(3,3));