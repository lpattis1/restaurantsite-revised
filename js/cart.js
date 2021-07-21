// Cart array(s) storage
let cartItems = [];
let cartPrices = [];
let cartImgs = [];

// User cart storage
const userCart = {
  img: "",
  name: "",
  price: "",
};

// Cart variables
const cart = document.querySelector(".cart-item");
const cartModal = document.querySelector(".cart-modal-bg");
const cartClose = document.querySelector(".cart-modal-close");
const cartCount = document.querySelector(".count");
let currentCartItems = parseInt(cartCount.textContent);

// Menu item variables
const orderBtns = document.querySelectorAll(".order-btn");

// Summary order variables
const orders = document.querySelector(".orders");
const totalOrder = document.querySelector(".total-number");
let totalOrderPrice = parseFloat(totalOrder.textContent);

// Open cart modal
const openCartModal = function () {
  cart.addEventListener("click", function (e) {
    cartModal.classList.remove("d-none");
    cartModal.animate(
      [
        {
          transform: "translateZ(-1400px)",
          opacity: "0",
        },
        {
          transform: "translateZ(0)",
          opacity: "1",
        },
      ],
      {
        duration: 500,
        fill: "forwards",
      }
    );
  });
};

// Close cart modal
const closeCartModal = function () {
  cartClose.addEventListener("click", function (e) {
    cartModal.classList.add("d-none");
    cartModal.animate(
      [
        {
          opacity: "1",
        },
        {
          opacity: "0",
        },
      ],
      {
        duration: 1000,
        fill: "backwards",
      }
    );
  });
};

// Show visible count of items in cart
const showCartCount = function (items) {};

// Click a menu item and add it to the cart
const addItemsToCart = function () {
  orderBtns.forEach((order) => {
    order.addEventListener("click", function (e) {
      const orderItem = order.parentElement;
      const orderItemName = orderItem.children[1].textContent;
      const orderItemPrice = orderItem.children[1].dataset.price;
      const orderItemImg = orderItem.children[0].src;
      userCart.name = orderItemName;
      userCart.img = orderItemImg;
      userCart.price = parseInt(orderItemPrice);

      cartItems.push(userCart.name);
      cartPrices.push(userCart.price);
      cartImgs.push(userCart.img);
      currentCartItems += cartItems.length;

      if (currentCartItems > 0) {
        cartCount.classList.add("count-active");
        cartCount.textContent = cartItems.length;
      } else {
        cartCount.classList.remove("count-active");
      }

      let html = "";
      html = `
     <div class="col col-lg-4 col-12 mt-4 order-item-col">
     <li class="order-item">
     <img src="${userCart.img}" alt=""> ${userCart.name} 
     <span class ="item-price d-flex align-items-center justify-content-center">$<p>${userCart.price}</p></span>
     <button class="remove-btn">Remove</button>
     </li>
     </div>
      `;
      orders.innerHTML += html;
    });
  });
};

// Show total price of items in cart
const showTotalPrice = function () {};

// Remove items from cart and update price
const removeAndUpdateCartPrice = function () {};

// Cart summary proceed to checkout (slide to payment page) and slide back to summary if necessary
const showCartPaymentPage = function () {};

// Checkout
const checkout = function () {};

openCartModal();
closeCartModal();
addItemsToCart();
