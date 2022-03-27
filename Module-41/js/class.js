"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._mileage = 10000;
    }
    getACtualMileage() {
        const realMileage = this._mileage + 5000;
        return realMileage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price | +taxAmount;
        return total;
    }
}
const toyota = new Car('Toyota', 500000);
console.log(toyota.getTotalPrice(20));
console.log(toyota.getACtualMileage(567));
