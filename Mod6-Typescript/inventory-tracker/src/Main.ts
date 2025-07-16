import { DigitalProduct } from "./models/DigitalProduct";
import { PhysicalProduct } from "./models/PhysicalProduct";
import { Product } from "./models/product";
import { calculateTax } from './Utility/taxCalculator';


const inventory = [
    new PhysicalProduct('PHY-001', 'Wireless Mouse', 25.99, 0.2),
    new DigitalProduct('DIG-001', 'E-book: TypeScript Guide', 20. , 12.50),
    new PhysicalProduct('PHY-002', 'Mechanical Keyboard', 89.99, 1.2),
    new DigitalProduct('DIG-002', 'Online Course: React Fundamentals',12, 49.99)
];

for (const product of inventory) {
  console.log('_____________________________');
  console.log(product.displayDetails());
  console.log('Tax: $' + calculateTax(product));
  console.log('Total: $' + product.getPriceWithTax());
}

