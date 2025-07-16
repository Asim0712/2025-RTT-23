//initialize the data
let cart = [];
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartlist = document.getElementById("cart");

//To check if Item box is empty
addItemButton.addEventListener ("click", function() {
    let item = itemInput.value;

    if (item === ""){
        alert("Please Enter an item");
    }
    cart.push(item); //Add item to ard Array
    // renderCart();
    itemInput.value = "";
})




