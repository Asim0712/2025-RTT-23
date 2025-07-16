import { Product } from "../models/product"

export async function fetchProduct(): Promise<Product[]> {
    try {
        const response = await fetch('https://dummyjson.com/product')
        const data = await response.json()
        console.log(data);

        return data.products.map((product: any) => new product(
            product.id,
            product.title,
            product.price,
            product.category,
            product.description,
            product.discountpercentage
        ))

    } catch (error) {
        console.log(error);
        return[];
    }
}

// fetchProduct()