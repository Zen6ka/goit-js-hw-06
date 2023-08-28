const inputField = document.querySelector("#validation-input");

inputField.addEventListener("blur", onFocusChange);

function onFocusChange(event) {
  const symbolLength = inputField.dataset.length;

  if ((inputContentLength = Number(symbolLength))) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  } else {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
  }
}
