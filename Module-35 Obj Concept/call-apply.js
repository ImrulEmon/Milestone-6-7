const student ={
    id:101,
    name:"Ponting",
    money:1500,
    major : "Math",
  
    treat : function (expense) {
        this.money = this.money-expense;
        console.log(this);
        return this.money;
        
    }
}

const john={
    id:10,
    age:15,
    money:5000
}

 student.treat.call(john,1000);
 student.treat.apply(john,[1000]);//array jabey
// johnTreat(200);