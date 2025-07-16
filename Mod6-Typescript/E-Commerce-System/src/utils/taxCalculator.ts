export function calculateTax (price:number, category: string): number{
const tax = category === "groceries" ? 0.03 : 0.0475
return price * tax;
}
