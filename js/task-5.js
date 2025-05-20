const colorPickerContainerEl = document.querySelector(".color-picker");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

btnEl.addEventListener("click", changeClick);

function changeClick() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
