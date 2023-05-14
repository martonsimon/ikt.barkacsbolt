var cartCount = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : 0;
var cartCountElements = document.getElementsByClassName("cart-count");
window.onload = function () {
  updateCartCount();
};

function updateCartCount() {
  cartCount = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart")).length
    : 0;
  for (var i = 0; i < cartCountElements.length; i++) {
    cartCountElements[i].innerHTML = cartCount.toString();
  }
}
