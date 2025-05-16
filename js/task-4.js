const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.elements;
  console.log(event.currentTarget.elements);
  const inputEmail = event.currentTarget.elements.email.value.trim();
  const inputPasword = event.currentTarget.elements.password.value.trim();
});
