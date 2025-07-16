"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, title, price, description, category, discountpercentage) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.discountpercentage = discountpercentage;
        this.category = category;
    }
    displayDetails() {
        console.log(`Product: ${this.title}`);
        console.log(`Product: ${this.price}`);
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountpercentage) / 100;
    }
}
exports.Product = Product;
