const numbers =[1,2,3,4,5];
const [x,y]= numbers;
const [a,b]= [1,2,3,4,5];
console.log(x,y,a,b);

const boxify = (n1,n2)=> [n1,n2];

console.log(boxify(3,4));

const student={
    id:101,
    name:'jon',
    age:9,
    sub:["eng",'ban','math']
};
const{age,name}=student;
const [s1,s2,s3]=student?.sub;
console.log(s1,s2,s3,age,name);

