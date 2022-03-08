function print(params) {
    console.log(params);
}

const fish = {
    id: 1,
    name: "Pangash",
    price: 150,
    category: "low",
    habitat: "river",
    color: "silver"
}
const fishName = fish.name;
print(fishName);
const { name, price, category } = fish;
print(category);
//print(category);

const company = {
    name: "Alpha#",
    ceo: { id: 1, name: 'Tanjiro', food: 'Ramen' },
    dept: {
        cse: { employee: 60, task: "Web dev", salary: 3000 },
        eee: { employee: 59, task: "circuit design" },
        civil: { employee: 25, task: "soil test" }
    }
}
print(company.dept.cse.salary);
const { employee, task, salary } = company.dept.cse;
console.log(employee, task, salary);
const { food } = company.ceo;
print(food);