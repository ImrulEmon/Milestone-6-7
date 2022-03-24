const text = '#2A2A2A';
const regEx = /#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/g;


const matches = text.match(regEx);
const index = text.search(regEx);
const replaced = text.replace(regEx,'#FFFFFF');
const testing = regEx.test(text);

console.log(matches,index,replaced,testing);