const [p,q]=[10,11,12,12,3];
console.log(p,q);
const { air, water, fire,earth } = { sky: "blue", earth: "solid", water: "liquid", air: "gas", fire: 'hot' };

console.log(earth);

const fish = {
    id: 1,
    name: "puti",
    price: 100,
    category: "low",
    habitat: "pond",
    color: "silver"
}

console.log(fish?.x?.id);