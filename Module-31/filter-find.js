const numbers=[10,11,12,19,13];
const bigN = numbers.filter(n=>n>=12);
const bigN2 = numbers.filter(n=>12<=n);
console.log(bigN);
console.log(bigN2);

const products =[
    {name : "phn",price:100,color:"black"},
    {name : "phn2",price:200,color:"black"},
    {name : "phn3",price:300,color:"red"},
    {name : "phn4",price:400,color:"blue"},
    {name : "phn5",price:600,color:"green"}
];

const expensive = products.filter(product => product.price > 250);
const blacks = products.filter(product => product.color =="black");
expensive.forEach(e=>console.log(e.name));
console.log(blacks);
blacks.forEach(black=>console.log(black.name));
