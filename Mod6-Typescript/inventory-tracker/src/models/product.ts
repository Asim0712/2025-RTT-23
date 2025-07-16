
export class Product {
    constructor(
        protected sku: string,
        protected name: string,
        protected price: number
    ) {}

    displayDetails(): string {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }

    getPriceWithTax(taxRate: number = 0.1): number {
        return this.price * (1 + taxRate);
    }
}