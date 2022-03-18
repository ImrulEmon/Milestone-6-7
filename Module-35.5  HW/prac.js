// 1
class People{
    
    constructor(id,name,age,bff,arr,isRich){
        this.id=id;
        this.name=name;
        this.age=age;
        this.bff=bff;
        this.arr=arr;
        this.isRich=isRich;
    }
    idNo(){
        return this.id;
    }
}

const me =new People(101,"Imrul Emon",23,{name:"tom",sub:"ban",mon:9999},[10,11,12,13],false);

console.log(me.idNo());
console.log(me.arr);
console.log(me.bff);
console.log(me.isRich);
console.log('--------------------------');
for(const prop in me.bff){
    console.log(me.bff[prop]);
}
console.log('--------------------------');
const emon = `${me.bff.sub} | ${me.arr[1]} | ${me.idNo()}`;
console.log(emon);
console.log('--------------------------');
const zP =()=>89;
console.log(zP());
console.log('--------------------------');
const oP =n=> n/7;
console.log(oP(21));
console.log('--------------------------');
const tP =(n1,n2)=> (n1+n2)/2;
console.log(tP(10,2));
console.log('--------------------------');
const mP =(n1,n2)=> {
    const n1r=n1+7;
    const n2r=n2+7;
    return n1r+n2r;
}
console.log(mP(10,2));
console.log('--------------------------');
const number=[7,14,21,28,35,42];
const r=number.map(n=>n/7);
r.forEach(element => {
    console.log(element);
});
console.log('--------------------------');
const fil = number.filter(n=>n>21);
console.log(fil);
console.log('--------------------------');
const fin = number.find(n=>n>21);
console.log(fin);
console.log('--------------------------');

const rich ={
    name : "Rich Man",
    balance:999.99,
    age:80
}

const {age,balance}=rich;
console.log(balance,age);