// Variable to store cart items
let cart_items = [];

// Function to add an item to the cart
function addItemToCart(id, amount) {
  // Check if the item already exists in the cart
  const existingItem = cart_items.find(item => item.id === id);

  if (existingItem) {
    // Item exists, increase the amount
    existingItem.amount += amount;
  } else {
    // Item doesn't exist, add it to the cart
    cart_items.push({ id, amount });
  }

  // Save the cart
  saveCart();
}

// Function to save the cart items to user storage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart_items));
}

// Function to load the cart items from user storage
function loadCart() {
  const cartData = localStorage.getItem('cart');
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
  return cart_items.find(item => item.id === id);
}

loadCart();