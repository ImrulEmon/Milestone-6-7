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
console.log(student.takeExam())
const remain = student.treat(500);
console.log(remain);
const keys=Object.keys(student);
console.log(keys);
const values =Object.values(student);
console.log(values);