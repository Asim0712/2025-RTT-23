function createMultiplier(mult){
return function(number){
    return mult*number;
}
}

const double = createMultiplier(2);
console.log(double(5));


function discount(per){
return function(number){
    return number-(per*number);
}
}

const tenPercentDiscount = discount(0.10);
console.log(tenPercentDiscount(100));


function fetchUser(username, callback) {
  setTimeout(() => {
    const user = {
      username: username,
      id: Math.floor(Math.random() * 1000) // Random ID generation
    };
    callback(user);
  }, 1000); // 1-second delay
}
    fetchUser("Asim", (user) => console.log("Fetched User:", user));
