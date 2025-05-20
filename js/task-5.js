const colorPickerContainerEl = document.querySelector(".color-picker");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", getRandomHexColor);
document.body.style.backgroundColor = "#fafafa;";
function getRandomHexColor(event) {
  console.log(event);
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
