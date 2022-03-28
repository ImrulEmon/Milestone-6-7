const money =800;
const food = money > 100 ? 'biriyani' : 'cha';
console.log(food);

let a=4;
console.log(a);
a+='';
console.log(a);
a=+a;
console.log(a);

const isActive = false;
const show=()=>console.log('show user');
const hide=()=>console.log('hide user');

isActive ? show() : hide();