
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}

class PaymentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PaymentError";
  }
}

interface Order{
productId: number;
quantity: number;
 price: number; 

}


function processOrder (order: Order) {
    if (order.quantity < 1){
         throw new Error("Quantity cannot be less then 1!");
    } else if (order.price <=0){
        throw new Error("Price cannot be in negative numbers");
    }

}


let myOrder: Order = {
productId: 1234,
quantity: 1,
price: 10
}

try{
console.log(processOrder(myOrder));
} 
catch (error)
{
    console.log(error);
}
