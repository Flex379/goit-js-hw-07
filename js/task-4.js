const refs = {
  loginForm: document.querySelector(".login-form"),
};

refs.loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(event) {
  event.preventDefault();

  const email = refs.loginForm.elements.email.value.trim();
  const password = refs.loginForm.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  refs.loginForm.reset();
}
