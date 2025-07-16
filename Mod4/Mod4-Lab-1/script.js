function formatFullName(firstName, lastName) {
// Check if either firstName or lastName is missing
    if(!firstName || !lastName){
        return "Invalid Name";
    }
//Capitalize the first letter of each name and lowercase the rest
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedlasttName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  return `${formattedlasttName}, ${formattedFirstName}`;
}
//Result 
  console.log(formatFullName('Asim ','Daud'));

// Mathematical Operations with Multiple Parameters

function calculateTotalCost(price, quantity, taxRate) {
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number') {
        return "Invalid input";
    }
        const totalCost = (price * quantity) * (1 + taxRate);
        return totalCost;
}
 console.log(calculateTotalCost( 10,6,8));

 //Functions with Conditional Logic

 function checkEligibility (age , isEmployed) {
if(age >= 18 && isEmployed === true)
{
return "He is eligible";
}
else if(age >= 18 && isEmployed === false)
{
return "Conditionally eligible";
}
else if (age <= 18 ){
return "Not eligible too young";
}
}
console.log(checkEligibility(20 , false ));
console.log(checkEligibility(16 ));
console.log(checkEligibility(20 , true ));
