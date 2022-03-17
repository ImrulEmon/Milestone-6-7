const first ={a:1};
const second = {a:1};
const third = first;

if(first===second){
    console.log('same');
}
else{
    console.log('different');
}
console.log('-------------First & 3rd-------------')
if(first==third){
    console.log('same');
}
else{
    console.log('different');
}

function compareObjects(obj1,obj2) {
    if(Object.keys(obj1).length!==Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop]!==obj2[prop]){
            return false
        }
        return true;
    }
}
const isEqual = compareObjects(first,second);
console.log(isEqual);