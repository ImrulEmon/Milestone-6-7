function doSomething() {
    console.log('settttttttttt');
}


console.log(1);
console.log(2);
setTimeout(doSomething,5000);
console.log(4);
setTimeout(function () {
    console.log("n5");
},6000);

setTimeout(()=>{
    console.log("n6");
},4000);