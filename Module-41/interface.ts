interface Player {
    name: string,
    club: string,
    salary: number,
    captain?:boolean,
    previousClubs?: string[];
};

const jamal :Player={
    name: "Jb",
    club:'Bangladesh',
    salary: 999999,
    captain: true
};

const hannan :Player={
    name:'M hannan',
    club:'kola bagan',
    salary: 34000
};

interface Employee{
    name: string,
    designation:string,
    salary:number,
    age:number
};

interface Developer extends Employee{
    language:string[],
    codeEditor: string,
    typingSpeed: number
};

const robert: Developer = {
    name:'Robert Iceberg',
    designation:'CEO',
    salary:999,
    age:24,
    language:['c++','php','css'],
    codeEditor:'VS code',
    typingSpeed:45
}