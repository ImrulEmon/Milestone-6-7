const tOut=()=>{
    console.log(1);
console.log(2);
setTimeout(()=>{
    console.log('three');
},3000);
console.log(3);
}

// -----------

const prom=()=>{
    const numS=prompt('Enter your number : ');
    const num = Number(numS);
    alert(num+200);

}
const loc=()=>{
    const link = location.href;
    console.log(link);
}