const refs = {
  loginForm: document.querySelector(".login-form"),
};

refs.loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  if (
    refs.loginForm.elements.email.value === "" ||
    refs.loginForm.elements.password.value === ""
  ) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: refs.loginForm.elements.email.value.trim(),
    password: refs.loginForm.elements.password.value.trim(),
  };

  console.log(formData);

  refs.loginForm.reset();
}
