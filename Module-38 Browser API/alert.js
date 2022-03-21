const alrt=()=>{
    alert('This is Alert');
}
const conf=()=>{
   const response= confirm('this is confirm');
   console.log(response);
   if (response===true) {
       alert(response);
   }
   else{
       alert(response);
   }
}
const ask =()=>{
    const res=prompt('what is your name : ');
    console.log(res);
}