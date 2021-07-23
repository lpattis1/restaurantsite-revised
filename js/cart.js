// Cart array(s) storage
let cartItems = [];
let cartPrices = [];
let cartImgs = [];

// User cart storage
let userCart = {
  img: "",
  name: "",
  price: "",
};

// Cart variables
const cart = document.querySelector(".cart-item");
const cartModal = document.querySelector(".cart-modal-bg");
const modal = document.querySelector(".cart-modal");
const cartClose = document.querySelector(".cart-modal-close");
const cartCount = document.querySelector(".count");
const cartTitle = document.querySelector(".cart-sum ");
const cartSummaryPage = document.querySelector(".summary");
const checkoutBtn = document.querySelector(".to-details-btn");
const noItemsInCartAlert = document.querySelector(".amount-alert");
let currentCartItems = parseInt(cartCount.textContent);

// Menu item variables
const orderBtns = document.querySelectorAll(".order-btn");

// Summary order variables
const orders = document.querySelector(".orders");
const totalOrder = document.querySelector(".total-number");
let totalOrderPrice = parseFloat(totalOrder.textContent);

// Payment page variables
const paymentPage = document.querySelector(".enter-details-page");

// Open cart modal
function openCartModal() {
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
}

// Close cart modal
function closeCartModal() {
  // Close with the X icon:
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
}

// Show total price of items in cart
function showTotalPrice() {
  totalOrderPrice = cartPrices.reduce((a, b) => {
    return a + b;
  });
  totalOrder.textContent = totalOrderPrice;
}

// Show current items in cart, add items to cart, remove them, and checkout
function checkout() {
  orderBtns.forEach((order) => {
    order.addEventListener("click", function (e) {
      // Order variables
      const orderItem = order.parentElement;
      const orderItemName = orderItem.children[1].textContent;
      const orderItemPrice = orderItem.children[1].dataset.price;
      const orderItemImg = orderItem.children[0].src;
      userCart.name = orderItemName;
      userCart.img = orderItemImg;
      userCart.price = parseInt(orderItemPrice);

      //   Add Items to cart
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
        <li class="order-item">
        <img src="${userCart.img}" alt=""> ${userCart.name} 
        <span class ="item-price">$<p>${userCart.price}</p></span>
        <button class="remove-btn">Remove</button>
        </li>
        `;
      orders.innerHTML += html;

      //   Show total price function call
      showTotalPrice();

      //   Remove items from cart and update total
      const removeOrderItem = document.querySelectorAll(".remove-btn");
      removeOrderItem.forEach((remove) => {
        remove.addEventListener("click", function (e) {
          remove.parentElement.remove(remove.parentElement);
          cartCount.textContent = orders.children.length;
          const removed = parseInt(
            remove.parentElement.children[1].children[0].textContent
          );
          cartItems.pop();
          totalOrderPrice = totalOrderPrice - removed;
          totalOrder.textContent = totalOrderPrice;
          if (totalOrderPrice === 0) {
            cartPrices = [];
          }
        });
      });
    });
  });
}

// Slide to payment page unless there are no items in the user's cart
function showCartPaymentPage() {
  checkoutBtn.addEventListener("click", function (e) {
    if (totalOrderPrice <= 0) {
      noItemsInCartAlert.classList.remove("d-none");
    } else {
      noItemsInCartAlert.classList.add("d-none");
      cartSummaryPage.classList.add("summary-page-slideout");
      paymentPage.classList.add("payment-page-show");
    }

    cartClose.addEventListener("click", function (e) {
      noItemsInCartAlert.classList.add("d-none");
    });
  });
}

openCartModal();
closeCartModal();
checkout();
showCartPaymentPage();
