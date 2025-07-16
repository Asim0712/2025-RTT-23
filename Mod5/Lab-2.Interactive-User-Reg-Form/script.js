const form = document.getElementById("registrationForm")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmpassword = document.getElementById("confirmPassword")

const usernameError =  document.getElementById("usernameError")
const emailError =  document.getElementById("emailError")
const passwordError =  document.getElementById("passwordError")
const confirmpasswordError =  document.getElementById("confirmpasswordError")


window.addEventListener('DOMContentLoaded' ,() => {
    const saved = localStorage.getItem('savedUsername');
    if (saved){
        username.value=saved;
        console.log('Username loaded from local storage:' , saved);
    }
});
//validation on Username

username.addEventListener('input', () => {
    if (username.validity.valueMissing || username.value.length < 3){
usernameError.textContent = "Username must have 3 letters"
    }
    else{
        usernameError.textContent="";
    }
});

email.addEventListener('input', () =>{
    if(!email.validity.valid)
    {
        emailError.textContent = "Enter email as abc@gmail.com"
    }
    else{
        emailError.textContent="";
    }
});

password.addEventListener('input', () => {
  if (!password.validity.valid) {
    passwordError.textContent =
      'At least 8 chars, with uppercase, lowercase, and a number.';
  } else {
    passwordError.textContent = '';
  }
});

confirmpassword.addEventListener('input', () => {
  if (confirmpassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
  } else {
    confirmpasswordError.textContent = '';
  }
});

// Form submission:
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let firstInvalid = null;

  if (username.value.trim().length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters.';
    firstInvalid = firstInvalid || username;
    console.log('Validation failed: Username too short');
  }

  if (!email.validity.valid) {
    emailError.textContent = 'Enter a valid email.';
    firstInvalid = firstInvalid || email;
    console.log('Validation failed: Invalid email');
  }

  if (!password.validity.valid) {
    passwordError.textContent =
      'At least 8 chars, with uppercase, lowercase, and a number.';
    firstInvalid = firstInvalid || password;
    console.log('Validation failed: Weak password');
  }

  if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = 'Passwords do not match.';
    firstInvalid = firstInvalid || confirmPassword;
    console.log('Validation failed: Passwords do not match');
  }
  
  if (firstInvalid) {
    firstInvalid.focus();
  } else {
    console.log('All fields valid. Submitting form...');
    alert('Registration successful!');
    localStorage.setItem('savedUsername', username.value);
    console.log('Username saved to localStorage:', username.value);
    form.reset();
  }
});// Focus first invalid field