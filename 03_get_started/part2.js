/// Random Number Generator
const diceRoll = document.getElementById("dice_roll");
const rollLabel = document.getElementById("roll_label");
const min = 1;
const max = 6;

let randomNum;

diceRoll.onclick = function () {
  randomNum = Math.floor(Math.random() * max) + min;
  rollLabel.textContent = "Let's role a dice: " + randomNum;
};

/// Checkbox and Radio Buttons

const checkBox = document.getElementById("myCheck");

const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const payBtn = document.getElementById("payBtn");

const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (checkBox.checked) {
    subResult.textContent = "You are subscribed";
  } else {
    subResult.textContent = "You are not subscribed!";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "You want to pay by Visa.";
  } else if (masterBtn.checked) {
    paymentResult.textContent = "You want to pay by MasterCard.";
  } else if (payBtn.checked) {
    paymentResult.textContent = "You want to pay by PayPal.";
  } else {
    paymentResult.textContent =
      "No payment selected. Please select a payment type.";
  }
};
