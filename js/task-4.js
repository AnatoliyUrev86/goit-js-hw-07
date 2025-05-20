const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputEmail = event.currentTarget.elements.email.value.trim();
  const inputPasword = event.currentTarget.elements.password.value.trim();
  if (!inputEmail || !inputPasword) {
    alert("All form fields must be filled in");
    return;
  }
  const data = {
    inputEmail,
    inputPasword,
  };
  console.log(data);
  formEl.reset();
});
