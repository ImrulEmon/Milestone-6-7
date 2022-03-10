// -------1------------

const print = (element) => console.log(element);

const x = 1;
let y = 2;
y = 9;

print(x);
print(y);

// -----2-----------
const name = "Jack";
const kid = {
    name: "Jack",
    age: 5,
    job: "student",
    cls: 1
}
const intro = `${name} is ${kid.age} years old.
He is a ${kid.job}.
He is in class ${kid.cls}.`;
print(intro);

// ------3-------------
// ----3.1----
const oneP = n => console.log(n * 5);
oneP(5);

// ----3.2----
const twoP = (x, y) => (x + 2) * (y + 2);
print(twoP(2, 2));
// ----3.3----
const threeP = (a, b, c) => a * b * c;
print(threeP(2, 3, 10));
// ----3.4----
const twoPT = (x, y) => {
    const rx = x + 2;
    const ry = y + 2;
    const r = rx * ry;
    return r;
};
print(twoPT(3, 3));

// ----5---------

const num = [1, 2, 3, 0, 4, 5, 6, 9];
const num2 = num.map(n => n * 5);
console.log(num2);

// ----6---------

const odd = num.filter(n => (n % 2) == 1);
console.log(odd);

//------7-----------

const products = [
    { name: "phone", price: 100 },
    {name:"laptop",price:5000},
    {name:"laptop2",price:5000},
];

const product = products.find(n=>n.price==5000);
console.log(product);
// -----7.5---------
const fish = {
    id: 1,
    name: "Pangash",
    price: 150,
    category: "low",
    habitat: "river",
    color: "silver"
}

const {id,price,color}=fish;
console.log(id,color);
const[one,two,three]=num;
print(three);
// ----11---------

const sec={
    rank:9999999999999999,
    dept:{
        eee:{student:59,tag:"EEE",batch:13},
        cse:{student:60,tag:"CSE",batch:14},
        ce:{student:58,tag:"CE",batch:12}
    },
    head:{id:01,name:"DEME"},
    year:[1,2,3,4,5,6,7,8,9,10]
};

console.log(sec.year);

console.log(sec.dept.cse.n?.tag);