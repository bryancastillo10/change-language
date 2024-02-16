const bg_change = document.getElementsByClassName("container1")[0];

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
