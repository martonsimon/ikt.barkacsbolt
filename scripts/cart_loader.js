//Executes if pages/cart.html is opened
//Use it to display the items

function createCartItemHTML(cartItem) {
  return `
  <div class="col-12">
  <div class="d-flex cart-item rounded">
    <img
      src="${cartItem.photo_url}"
      alt=""
      class="rounded me-2 object-fit-cover"
      width="50px"
      height="50px"
    />
    <div class="d-flex justify-content-between w-100">
      <div class="d-flex flex-column gap-1">
        <span class="fw-bold fs-6">${cartItem.name}</span>
        <span class="d-flex align-items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-dash-circle"
            viewBox="0 0 16 16"
            role="button"
            onclick="decrease(${cartItem.id})"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
            />
          </svg>
          <span class="fw-bold lh-1">${cartItem.amount}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
              role="button"
              onclick="increase(${cartItem.id})"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
          </span>
        </div>
        <div class="d-flex flex-column">
          <span class="align-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
                role="button"
                onclick="remove(${cartItem.id})"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              /></svg
              ></span>
              <span class="fw-bold">${toHUF(
                cartItem.amount * cartItem.unit_price
              )}</span>
      </div>
    </div>
  </div>
  </div>
  `;
}

function decrease(id) {
  if (getItemFromCart(id).amount == 1) remove(id);
  else {
    addItemToCart(getItemById(id), -1);
    loadCartItems();
  }
}

function increase(id) {
  addItemToCart(getItemById(id), 1);
  loadCartItems();
}

function remove(id) {
  removeItem(id);
  loadCartItems();
}

function loadCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  var totalPrice = 0;
  var cartItems = getCart();
  if (cartItems.length == 0) {
    document.getElementById("cart-notify").innerHTML =
      '<h1 class="text-center">A kosár üres</h1>';
    return;
  }
  var HTML = "";
  cartItems.forEach(function (cartItem) {
    totalPrice += cartItem.amount * cartItem.unit_price;
    HTML += createCartItemHTML(cartItem);
  });
  cartItemsContainer.innerHTML = HTML;

  var tax = totalPrice * 0.27;
  document.getElementById("price-cart").innerText =
    "Kosár: " + toHUF(totalPrice);
  document.getElementById("price-tax").innerText = "Áfa (27%): " + toHUF(tax);
  document.getElementById("price-sum").innerText =
    "Összesen: " + toHUF(totalPrice + tax);
}

loadCartItems();
