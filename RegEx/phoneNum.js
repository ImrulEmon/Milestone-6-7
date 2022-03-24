const text = '01923565849'
const regEx = /(\+88)?-?01[1-9]\d{8}/g;
const testing = regEx.test(text);
if(testing===true){
    // const matches = text.match(regEx);
    console.log(text,'is BD number');
}
else{
    // const matches = text.match(regEx);
    console.log(text,'is not BD number')
}

//Email-check or phone number check website