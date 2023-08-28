const rangeInput = document.querySelector("#font-size-control");

const text = document.querySelector("#text");

rangeInput.addEventListener("input", orangeChange);

function orangeChange(event) {
  const fontSize = event.target.value + "px";
  text.style.fontSize = fontSize;
}
