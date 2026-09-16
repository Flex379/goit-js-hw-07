const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputEvent);

function onInputEvent(event) {
  const name = event.target.value.trim();

  refs.span.textContent = name === "" ? "Anonymous" : name;
}
