const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("span#name-output");

console.log(inputEl);

inputEl.addEventListener("input", (event) => {
  const inputValue = inputEl.value.trim();
  spanEl.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
