const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.elements;
  console.log(event.currentTarget.elements);
  const inputEmail = event.currentTarget.elements.email.value.trim();
  console.log(inputEmail);
  const inputPasword = event.currentTarget.elements.password.value.trim();
  console.log(inputPasword);
});
