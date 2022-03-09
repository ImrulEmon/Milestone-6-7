class Team{
    name;
    address;
    
    constructor(paramN,paramAddress){
        this.name=paramN;
        this.address=paramAddress;
    }

}
class Support extends Team{
    
    designation ='support';
    workHour;
    constructor(paramN,paramAddress,time){
        super(paramN,paramAddress);
        this.workHour=time;
    }
    
    startSession(){
        console.log(this.name," starts session")
    }
}
class BugFix extends Team{
   
    designation ='Fix';
   
    startDebug(){
        console.log(this.name," starts Debug");
    }
}
class Release extends Team{
   
    designation ='release';
    
    startRelease(){
        console.log(this.name," starts Releas");
    }
}

const john = new Support("jhon dom","dhaka",11);
const tom = new Support("Tommy Wyne","Gotham");
//john.name="Jhon Doe";
console.log(john,"\n");
john.startSession();
tom.startSession();
console.log(tom.name,"\n",tom.address);

const bob = new Release("Bobby","NY");
console.log(bob);
const hank=new BugFix("hank","syl");
hank.startDebug();
console.log(hank.__proto__);