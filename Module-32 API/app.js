//JSON

const user = {id:10,name:"Imrul Emon",job:'actor'};
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop={
    name:'Galib store',
    owner:{
        name:"Mirza Galib",
        profession:"poet"
    },
    address:'Chikar goli',
    products:['laptop','flower','mobile'],
    employee: 23,
    isExpensive : false
}

const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
console.log(shop);
console.log(JSON.parse(stringified).name)