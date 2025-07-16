"use strict";
function createCustomer(customer) {
    const welcomeMsg = `Welcome, ${customer.name}! your official email is ${customer.email}`;
    return welcomeMsg;
}
;
const newCustomer = {
    id: 1,
    name: "Asim Daud",
    email: "asim@gmail.com",
    loyaltyMember: true
};
console.log(createCustomer(newCustomer));
