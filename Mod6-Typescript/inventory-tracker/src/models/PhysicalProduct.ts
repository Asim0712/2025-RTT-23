
import { Product } from './product';

export class PhysicalProduct extends Product {
private weight: number;
    constructor (sku:string, name:string, price: number,  weight: number){

  super(sku, name, price,)
  this.weight= weight;
    }

    
    
    // Override getPriceWithTax to include 10% tax rate
    getPriceWithTax(): number {
        const taxRate = 0.1; // 10% tax
        return this.price * (1 + taxRate);
    }


    // Getter for formatted weight
    get formattedWeight(): string {
        return `${this.weight} kg`;
    }


    // Optionally override displayDetails to include weight information
    displayDetails(): string {
        return `${super.displayDetails()}, Weight: ${this.formattedWeight}`;
    }

}
