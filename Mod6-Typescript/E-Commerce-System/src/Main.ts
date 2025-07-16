import {fetchProduct} from  "./services/apiService"
import {calculateDiscount} from "./utils/discountCalculator"
import {calculateTax} from "./utils/taxCalculator"

async function main() {
    try{
        const products = await fetchProduct()

        for (const product of products){
            product.displayDetails()
            const tax = calculateTax(product.price , product.category)
            const discount = calculateDiscount(product.price, product.discountpercentage)
        

        console.log(`Discount: $${discount.toFixed(2)}`);
        console.log(`Tax: $${tax.toFixed(2)}`);
        
        }
    }catch (error){
        console.log(error);
    }
}
main()