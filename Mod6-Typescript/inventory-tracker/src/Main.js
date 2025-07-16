"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DigitalProduct_1 = require("./models/DigitalProduct");
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const taxCalculator_1 = require("./Utility/taxCalculator");
const inventory = [
    new PhysicalProduct_1.PhysicalProduct('PHY-001', 'Wireless Mouse', 25.99, 0.2),
    new DigitalProduct_1.DigitalProduct('DIG-001', 'E-book: TypeScript Guide', 20., 12.50),
    new PhysicalProduct_1.PhysicalProduct('PHY-002', 'Mechanical Keyboard', 89.99, 1.2),
    new DigitalProduct_1.DigitalProduct('DIG-002', 'Online Course: React Fundamentals', 12, 49.99)
];
for (const product of inventory) {
    console.log('_____________________________');
    console.log(product.displayDetails());
    console.log('Tax: $' + (0, taxCalculator_1.calculateTax)(product));
    console.log('Total: $' + product.getPriceWithTax());
}
