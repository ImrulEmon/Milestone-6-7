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