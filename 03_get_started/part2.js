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

/// Callback:
sum(displayPage, 1, 2);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH4").textContent = result;
}

/// Random Password Generator
function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return "(Password length must be at least 1)";
  }
  if (allowedChars.length === 0) {
    return "(At least one set of characters needs to be selected)";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

// console.log(`Generated password: ${password}`);
document.getElementById("myButton").onclick = function () {
  document.getElementById("generated").textContent = password;
};

document.getElementById("prevBtn").onclick = function () {
  window.location.href = "index.html";
};
