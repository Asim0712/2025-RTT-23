import { Product } from './product';

export class DigitalProduct extends Product {
    private filesize: number;

    constructor(sku: string, name: string, price: number, filesize: number) {
        super(sku, name, price);
        this.filesize = filesize;
    }

    getPriceWithTax(): number {
        return this.price; // Digital products have no tax
    }

    get formattedfilesize(): string {
        return `${this.filesize} mb`;
    }

    displayDetails(): string {
        // Implement your details display logic here
        return `${this.name} (${this.sku}) - ${this.formattedfilesize}`;
    }
}