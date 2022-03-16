function stopWatch(){
    let counter = 0;
    return function () {
        counter ++;
        return counter;
    }
}
const clock1=stopWatch();
console.log(clock1());


function greet() {
    console.log("Hello Good Morning");
}

function welcome(name) {
    console.log(name);
    name();
}

welcome(greet);