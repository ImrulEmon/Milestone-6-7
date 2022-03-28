//JSON

const student = {
    name:'Imrul',
    age:999,
    sub:['eng','ban','math']
}

const studentJSON = JSON.stringify(student);
const studentParse = JSON.parse(studentJSON);

console.log(student);
console.log(studentJSON);
console.log(studentParse);

//------
// fetch('url')
// .then(res=>res.json())
// .then(data=>console.log(data));

const keys = Object.keys(student);
const values = Object.values(student);
const pair = Object.entries(student);
console.log(keys);
console.log(values);
console.log(pair);
