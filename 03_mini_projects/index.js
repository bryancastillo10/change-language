/* Color Flipper */
const bg_change = document.getElementsByClassName("container")[0];

function setColor(name) {
  bg_change.style.backgroundColor = name;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const randColor = `rgb(${red},${green},${blue})`;
  bg_change.style.backgroundColor = randColor;
}

/* Palindrome Checker */
const words = document.getElementById("words");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = words.value;
  const reverse = reverseString(value);
  if (value == "") {
    alert("User has no input. Please try again.");
  } else if (value == reverse) {
    alert("CORRECT! The input is a palindrome.");
  } else {
    alert("NO! The input is not a palindrome.");
  }

  words.value = "";
}

/* Random Quote Generator */
const quotes = [
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh (Alice in Wonderland)",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston Churchill",
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }

  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}

/* StopWatch */
let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
  secondsElapsed++;
  setTime();
}

function startClock() {
  if (interval) stopClock();
  interval = setInterval(timer, 1000);
}

function stopClock() {
  clearInterval(interval);
}

function resetClock() {
  stopClock();
  secondsElapsed = 0;
  setTime();
}
