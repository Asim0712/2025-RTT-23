interface  Customer{
    id: string | number;
    name: string;
    email: string;
    loyaltyMember: boolean ;
}

function createCustomer (customer : Customer) {
    const welcomeMsg = `Welcome, ${customer.name}! your official email is ${customer.email}`;


    return welcomeMsg;
};

const newCustomer: Customer = {
  id: 1,
  name: "Asim Daud",
  email: "asim@gmail.com",
  loyaltyMember: true
}


console.log(createCustomer(newCustomer));











