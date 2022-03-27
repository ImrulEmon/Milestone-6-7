"use strict";
const salary = 7500;
const friendSalaries = [100, 200, 300, 500];
const friends = ['sakib', 'rakib', 'nakib'];
friendSalaries[0] = 10500;
friendSalaries.push(13000);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
console.log(max);
