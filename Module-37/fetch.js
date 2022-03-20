console.log('okay1')
console.log('okay2')
setTimeout(()=>{
    console.log('okay3');
},4000)
console.log('okay4')
console.log('okay5')
let i=0;
const timeId = setInterval(() => {
    console.log(i);
    i++;
    if(i>10){
        clearInterval(timeId);
    }
}, 1000);