//Try first

function changeText() {
  var firstButton = document.getElementById("change");

  firstButton.innerHTML = "Let's get started! This text has changed. ";
}

function showAlert() {
  window.alert("You are learning Javascript!");
}

function variableTest() {
  let name = "Bro";
  let age = 28;
  let student = true;

  document.getElementById("p1").innerHTML = "Hello " + name;
  document.getElementById("p2").innerHTML = "You are " + age + " years old.";
  document.getElementById("p3").innerHTML = "Enrolled: " + student;
}

function submitBtn() {
  var textInput = document.getElementById("myText").value;

  document.getElementById("reply").innerHTML = "You have typed: " + textInput;
}

function circumCalc() {
  const PI = 3.14159;
  let circum;

  let radius = document.getElementById("inputRadius").value;
  radius = Number(radius);

  circum = 2 * PI * radius;
  document.getElementById("answer").innerHTML =
    "The circumference is " + circum;
}

document.getElementById("hypoCalc").onclick = function () {
  var a = document.getElementById("A_text").value;
  a = Number(a);

  var b = document.getElementById("B_text").value;
  b = Number(b);

  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("cLab").innerHTML = "Side C: " + c;
};

/// Counter Program
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
};

document.getElementById("nextBtn").onclick = function () {
  window.location.href = "tutorial_part2.html";
};
