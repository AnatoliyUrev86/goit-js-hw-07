const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.elements;
  console.log(event.currentTarget.elements);
  const inputEmail = event.currentTarget.elements.email.value.trim();
  console.log(inputEmail);
  const inputPasword = event.currentTarget.elements.password.value.trim();
  console.log(inputPasword);
  const userName = document.querySelector(".js-user-mane");
  userName.addEventListener("input", (event) => {
    console.log(event.target.value);
  });
  const form = document.querySelector(".login-form");
  form.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    console.log(event.currentTarget.elements);
    event.target.reset();
  }
  event.preventDefault();
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  const btn = document.querySelector(".js-click");
  click.addEventListener("change", () => {});
  userName.addEventListener("blur", handBlur);
  function handBlur(event) {
    const name = event.target.value;
    alert(`'All form fields must be filled in' ${name}`);
  }
  console.log(info);
});
