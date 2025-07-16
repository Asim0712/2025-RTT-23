"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poroduct = void 0;
class Poroduct {
    constructor(id, title, price, description, discountpercentage) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.discountpercentage = discountpercentage;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Product: ${this.price}`);
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountpercentage) / 100;
    }
}
exports.Poroduct = Poroduct;
