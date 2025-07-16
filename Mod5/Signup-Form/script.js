const form = document.querySelector(".form-group-signup")
const errorMessage = document.querySelector(".error-message-signup");
console.dir(form)

const username = form[0];
const email = form[1];
const password = form[2];
const confirmpassword = form[3];


//validation checks on Username
username.addEventListener('input',function(e){
    if (e.target.validity.valueMissing) {
    e.target.setCustomValidity("Please enter the Username.");
    } else if(e.target.validity.typeMismatch){
        e.target.setCustomValidity ("Please enter the Username with numbers ,e.g, Abc072" )
    }
    else {
    username.setCustomValidity(""); //clear custom eror if valid
    }
    errorMessage.textContent = e.target.validationMessage;
  console.log(e.target.validity);

})

//validation checks on email
email.addEventListener('input',function(e){
    if (e.target.validity.valueMissing) {
    e.target.setCustomValidity("Please enter an email address.");
    } else if(e.target.validity.typeMismatch){
        e.target.setCustomValidity ("Please enter the email as , abe@gmail.com")
    }
    else {
    email.setCustomValidity(""); //clear custom eror if valid
    }
    errorMessage.textContent = e.target.validationMessage;
  console.log(e.target.validity);
})


 // update the error message span with the custom error message

 form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(`Form data: ${email.value}`);
});
  
 