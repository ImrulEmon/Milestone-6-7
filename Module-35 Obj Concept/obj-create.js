const student ={roll:1,name:"jhon"}
// -----------
const person = new Object();
// -------------
const human = Object.create(student);
// ----------
class People{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
const peop = new People("Jhon",9);
console.log(peop);
// ---------
function man(name,age) {
    this.name=name;
    this.age=age;
}
const me = new man('imrul Emon',23);
console.log(me.name,me.age);