// Variable to store cart items
let cart_items = [];

// Function to add an item to the cart
function addItemToCart(itemToAdd, amount) {
  // Check if the item already exists in the cart
  const existingItem = cart_items.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    // Item exists, increase the amount
    let amountNumber = Number(existingItem.amount);
    amountNumber += Number(amount);
    existingItem.amount = amountNumber;
  } else {
    // Item doesn't exist, add it to the cart
    cart_items.push({ amount, ...itemToAdd });
  }

  // Save the cart
  saveCart();
}

// Function to save the cart items to user storage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart_items));
  updateCartCount();
}

// Function to load the cart items from user storage
function loadCart() {
  const cartData = localStorage.getItem("cart");
  cart_items = cartData ? JSON.parse(cartData) : [];
}

// Function to clear the cart
function clearCart() {
  cart_items = [];
  saveCart();
}

// Function to get the cart items
function getCart() {
  return cart_items;
}

// Function to get an item from the cart by ID
function getItemFromCart(id) {
  return cart_items.find((item) => item.id === id);
}

function removeItem(id) {
  // Remove the item from the cart
  cart_items = cart_items.filter((item) => item.id !== id);

  // Save the cart
  saveCart();
}

loadCart();
