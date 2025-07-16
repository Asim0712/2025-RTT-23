export class Product{
    id:number;
    title: string;
    price: number;
    description: string;
    discountpercentage: number;
    category: string;
    constructor(id:number, title: string, price: number,   description: string, category: string, discountpercentage: number ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.discountpercentage = discountpercentage;
        this.category=category;
    }

    displayDetails() : void{
        console.log(`Product: ${this.title}`);
        console.log(`Product: ${this.price}`);
    }
    getPriceWithDiscount() : number {
return this.price - (this.price * this.discountpercentage)/100;
    }
}


