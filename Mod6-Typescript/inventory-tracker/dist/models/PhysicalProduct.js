"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
const product_1 = require("./product");
class PhysicalProduct extends product_1.Product {
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    // Override getPriceWithTax to include 10% tax rate
    getPriceWithTax() {
        const taxRate = 0.1; // 10% tax
        return this.price * (1 + taxRate);
    }
    // Getter for formatted weight
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    // Optionally override displayDetails to include weight information
    displayDetails() {
        return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
    }
}
exports.PhysicalProduct = PhysicalProduct;
