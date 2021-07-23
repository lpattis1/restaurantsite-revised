// Payment Input Variables
const paymentInputs = document.querySelectorAll(".details-input");
const completeBtn = document.querySelector(".checkout-btn");
const warningText = document.querySelector(".warning-text");
const warningText2 = document.querySelector(".contact__form .warning-text");
const paymentForm = document.querySelector(".details-form");

const orderCompletePage = document.querySelector(".order-complete-page");

// Contact Input Variables

const contactInputs = document.querySelectorAll(".contact-input");
const contactBtn = document.querySelector(".contact-submit");

// Reg Ex Storage Object
const regExPatterns = {
  fullname: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^\d{10}$/,
  card: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/,
  cvc: /^[0-9]{3}$/,
  zipcode: /^[0-9]{5}$/,
};

// Validation check function - payment form & contact form
function validateFormInputs(field, regex) {
  if (regex.test(field.value)) {
    field.classList.add("valid");
    field.classList.remove("invalid");

    warningText.classList.remove("show-warning");
    warningText2.classList.remove("show-warning");
  } else {
    field.classList.remove("valid");
    field.classList.add("invalid");
  }
}

// Empty form check - payment form
for (let i = 0; i < paymentInputs.length; i++) {
  completeBtn.addEventListener("click", function (e) {
    if (paymentInputs[i].value === "") {
      warningText.classList.add("show-warning");
    } else {
      warningText.classList.remove("show-warning");
    }
  });
}

// Empty form check - contact form

for (let i = 0; i < contactInputs.length; i++) {
  contactBtn.addEventListener("click", function (e) {
    if (contactInputs[i].value === "") {
      warningText2.classList.add("show-warning");
    } else {
      warningText2.classList.remove("show-warning");
    }
  });
}

// Payment input check while user is typing into the form
paymentInputs.forEach((input) => {
  input.addEventListener("keyup", function (e) {
    validateFormInputs(e.target, regExPatterns[e.target.attributes.name.value]);
  });
});

// Contact input check while user is typing into the form
contactInputs.forEach((input) => {
  input.addEventListener("keyup", function (e) {
    validateFormInputs(e.target, regExPatterns[e.target.attributes.name.value]);
  });
});

// Submitted message - contact form
function submitMessage() {
  contactBtn.addEventListener("click", function (e) {
    const contact = document.querySelector(".contact__form");
    const thankYou = document.querySelector(".thank-you-section");
    const userName = document.querySelector(".contact-name");
    const userInsert = document.querySelector(".user-name");
    userInsert.textContent += ` ${userName.value}`;

    for (let i = 0; i < contactInputs.length; i++) {
      if (contactInputs[i].value === "") {
        thankYou.classList.remove("thank-you-show");
      } else if (contactInputs[i].classList.contains("invalid")) {
        thankYou.classList.remove("thank-you-show");
      } else {
        thankYou.classList.add("thank-you-show");
        contact.style.display = "none";
      }
    }
  });
}

// Complete order - payment form
function completeOrder() {
  completeBtn.addEventListener("click", function (e) {
    for (let i = 0; i < paymentInputs.length; i++) {
      if (
        paymentInputs[i].value === "" ||
        paymentInputs[i].classList.contains("invalid")
      ) {
        orderCompletePage.classList.remove("order-complete-page-show");
        paymentPage.classList.remove("payment-page-slideout");
        modal.classList.remove("complete-bg");
        return;
      } else {
        paymentPage.classList.add("payment-page-slideout");
        orderCompletePage.classList.add("order-complete-page-show");
        modal.classList.add("complete-bg");
        cartCount.textContent = 0;
      }
    }
  });
}

submitMessage();
completeOrder();
