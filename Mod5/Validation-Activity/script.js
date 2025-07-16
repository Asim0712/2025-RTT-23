const form =  document.querySelector("form");
const errorMessage = document.getElementById(error-message);
console.dir(form);

const username = form[0];
const email = form[1];
const quantity = form[2];
const website = form[3];
const password = form[4];
const age = form[5];
const zipcode = form[6];


password.addEventListener('imput', function(e) {
    if(e.target.validity.tooShort){
        e.target.setCustomValidity("Please enter atleast 8 digits")
    } else if(e.target.validity.)
})
