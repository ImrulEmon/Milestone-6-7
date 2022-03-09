class Support{
    name;
    address;
    designation ='support';
    constructor(paramN,paramAddress){
        this.name=paramN;
        this.address=paramAddress;
    }
    startSession(){
        console.log(this.name," starts session")
    }
}

const john = new Support("jhon dom","dhaka");
const tom = new Support("Tommy Wyne","Gotham");
//john.name="Jhon Doe";
console.log(john,"\n");
console.log(john.startSession());
console.log(tom.startSession());
console.log(tom.name,"\n",tom.address);