const student ={
    id:101,
    name:"Ponting",
    money:1500,
    major : "Math",
    isRich: false,
    subject :["english","calculas",'botany'],
    bestFriend : {
        name:"Fakir Mia",
        major : 'English'
    },
    takeExam: function () {
        console.log(this.bestFriend.name,"Taking exam");
    },
    treat : function (expense) {
        return this.money-expense;
    }
}
// watch
for(const proper in student){
    console.log(student[proper]);
}
console.log("---------------------------------");
const keys=Object.keys(student);
for(const proper of keys){
    console.log(proper ,':',student[proper]);
}
console.log("---------------------------------");
for(const [key,value] of Object.entries(student)){
    console.log(key,value);
}

