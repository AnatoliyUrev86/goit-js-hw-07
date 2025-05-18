const colorPickerContainerEl = document.querySelector(".color-picker");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
