const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");
const validationMessage = document.getElementById("validation-message");

let totalPrice = 0;

// Show validation message with fallback visibility
function showValidationMessage(msg) {
  validationMessage.textContent = msg;
  validationMessage.style.display = "block";
  validationMessage.classList.remove("hidden");

  setTimeout(() => {
    validationMessage.style.display = "none";
    validationMessage.classList.add("hidden");
  },5000);
}

// Recalculate total based on all cart items
function recalculateTotal() {
  let newTotal = 0;
  document.querySelectorAll("#cart li").forEach((item) => {
    const price = parseFloat(item.dataset.price);
    const quantityInput = item.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value) || 0;
    newTotal += price * quantity;
  });
  totalPrice = newTotal;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Remove a product from cart
function removeItem(event) {
  const item = event.target.closest("li");
  item.remove();
  recalculateTotal();
}

// Add a new product to the cart
addProductButton.addEventListener("click", () => {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (!name || isNaN(price) || price <= 0) {
    showValidationMessage(
      "Please enter a valid product name and a positive price."
    );
    productNameInput.focus();
    return;
  }

  const li = document.createElement("li");
  li.className = "flex flex-wrap justify-between items-center mb-2 gap-2";
  li.dataset.price = price;

  const span = document.createElement("span");
  span.className = "flex-1";
  span.textContent = `${name} - $${price.toFixed(2)}`;

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.value = 1;
  quantityInput.min = 1;
  quantityInput.className =
    "w-16 border border-gray-300 rounded px-2 py-1 text-center";
  quantityInput.addEventListener("input", recalculateTotal);

  const removeButton = document.createElement("button");
  removeButton.className =
    "bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600";
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", removeItem);

  li.appendChild(span);
  li.appendChild(quantityInput);
  li.appendChild(removeButton);
  cart.appendChild(li);

  recalculateTotal();

  // Clear inputs
  productNameInput.value = "";
  productPriceInput.value = "";
});