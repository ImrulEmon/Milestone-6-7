function print(element) {
    console.log(element);
}

const aot ='Eren Yeager';
const mha = "Izuku Midoriya";
const op = `Money D. Luffy`;

const multiline = `
first line.
second line.
3.third line
`;
print(multiline);
// ----------------------
const count = 5;
const old = "i am "+count+" yeras old";
print(old);
const new1 = `i am ${count} years old`;
print(new1);

function fullName(first = 'Empty',second = 'Empty surname') {
    const full = `${first.length} ${second}`;
    return full;
    
}

print(fullName("khan",'jahan'));