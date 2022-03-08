function print(element) {
    console.log(element);
}

function add(num1,num2) {
    
    num2 = num2 || 0;
    return num1+num2;
}

print(add(12,1));

function add2() {
    const elements = arguments;
   let r=0;
    for(let e of elements){
       r +=e;
    }
    print(r);
}

add2(1,2,3,4,5);


function fullName(first = 'Empty',second = 'name') {
    return first+" "+second;
}

print(fullName(5));