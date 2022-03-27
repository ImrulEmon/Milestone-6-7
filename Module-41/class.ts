class Car {
    model: string;
    price: number;
    private _mileage: number;
    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
        this._mileage=10000;
    }
    getACtualMileage():number{
        const realMileage = this._mileage + 5000;
        return realMileage;
    }
    getTotalPrice(tax:number):number {
        const taxAmount = this.price*tax/100;
        const total = this.price |+ taxAmount;
        return total;
    }
}

const toyota = new Car('Toyota',500000);

console.log(toyota.getTotalPrice(20));