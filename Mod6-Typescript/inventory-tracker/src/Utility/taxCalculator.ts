import { Product } from '../models/product';



export function calculateTax(product: Product): number {
  const taxAmount = product.getPriceWithTax();
  return parseFloat(taxAmount.toFixed(2));
}