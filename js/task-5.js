const colorPickerContainerEl = document.querySelector(".widget");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("change", getRandomHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
