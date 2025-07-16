"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const product_1 = require("./product");
class DigitalProduct extends product_1.Product {
    constructor(sku, name, price, filesize) {
        super(sku, name, price);
        this.filesize = filesize;
    }
    getPriceWithTax() {
        return this.price; // Digital products have no tax
    }
    get formattedfilesize() {
        return `${this.filesize} mb`;
    }
    displayDetails() {
        // Implement your details display logic here
        return `${this.name} (${this.sku}) - ${this.formattedfilesize}`;
    }
}
exports.DigitalProduct = DigitalProduct;
