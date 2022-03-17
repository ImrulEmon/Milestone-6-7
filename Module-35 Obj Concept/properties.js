const bottle={color:'yellow',hold:'water',price:100,isClean: true};
const keys=Object.keys(bottle);
console.log(keys);
console.log("----------------------------------")
const values =Object.values(bottle);
console.log(values);
console.log("----------------------------------")
const pairs =Object.entries(bottle);
console.log(pairs);
console.log("----------------------------------")
delete bottle.price;
console.log(bottle);