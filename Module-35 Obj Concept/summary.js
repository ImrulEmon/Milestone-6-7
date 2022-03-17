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
// ---------------------------------
for(const proper in student){
    console.log(student[proper]);
}
console.log("---------------------------------");
const keys=Object.keys(student);
for(const proper of keys){
    console.log(proper ,':',student[proper]);
}
console.log("---------------------------------");
for(const [key,value] of Object.entries(student)){
    console.log(key,value);
}
// ----------------------------

const a={a:1}
const b={a:1}
const c=a;

//--------------------
const johnTreat = student.treat.bind(john);
student.treat.call(john,1000);
student.treat.apply(john,[1000]);