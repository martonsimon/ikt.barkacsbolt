function generateDiscountHTML(item) {
  return `
  <a class="onsale-card d-block noformat fade-opacity" href="/product.html?item=${
    item.id
  }">
                  <div class="wrapper">
                    <div class="img">
                      <img src="${item.photo_url}" />
                    </div>
                    <h3>${item.name}</h3>
                    <p>
                      <span class="original-price">${toHUF(item.price)}</span>,
                      <span class="new-price">${toHUF(
                        Math.round(
                          item.price -
                            (item.price * item.discount_percent) / 100
                        )
                      )}</span>
                    </p>
                  </div>
                  </a>
  `;
}

function loadDiscounts() {
  const discounted = getDiscountedItems();
  console.log(discounted);
  const discountedContainer = document.getElementById("discount-container");
  var dicountHTML = "";

  discounted.forEach((item) => {
    dicountHTML += generateDiscountHTML(item);
  });

  discountedContainer.innerHTML = dicountHTML;
}

loadDiscounts();
