const friends = ["jhon","abrar","bob","catlyn","dogendar","emma"];

const friendLength = friends.map(friend=>friend.length);
console.log(friendLength);

const company = {
    name: "Alpha#",
    ceo: { id: 1, name: 'Tanjiro', food: 'Ramen' },
    dept: {
        cse: { employee: 60, task: "Web dev", salary: 3000 },
        eee: { employee: 59, task: "circuit design" },
        civil: { employee: 25, task: "soil test" }
    }
}

const products =[
    {name : "phn",price:100},
    {name : "phn2",price:200},
    {name : "phn3",price:300},
    {name : "phn4",price:400},
    {name : "phn5",price:600}
];
  
const productPrice = products.map(product=>product.price);
console.log(productPrice);

const productName = products.map(product=>console.log(product.name));