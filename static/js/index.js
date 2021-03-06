let switchBtn = document.querySelector(".switch-btn");
let container = document.querySelector(".container");
let sun = document.querySelector(".icon-tabler-sun");
let moon = document.querySelector(".icon-tabler-moon");
let glass = document.querySelector(".card__glass");
let heading = document.querySelector(".heading");
let text = document.querySelector(".text");
let label = document.querySelector(".card__label");
let label2 = document.querySelector(".card__label--psd");
let svg = document.querySelector(".icon-tabler-mail");
let svg2 = document.querySelector(".icon-tabler-key");
let input = document.querySelector("#username");
let input2 = document.querySelector("#password");
let rememberMe = document.querySelector(".card__label--checkbox");
let textSub = document.querySelector(".text--sub");
let checkbox = document.querySelector("#remember");

const switchAll = () => {
  switchBtn.classList.toggle("right");
  document.body.classList.toggle("dark-body");
  container.classList.toggle("dark-container");
  sun.classList.toggle("dark-sun");
  moon.classList.toggle("dark-moon");
  glass.classList.toggle("dark-glass");
  heading.classList.toggle("dark-heading");
  text.classList.toggle("dark-text");
  label.classList.toggle("dark-label");
  label2.classList.toggle("dark-label");
  svg.classList.toggle("dark-input-svg");
  svg2.classList.toggle("dark-input-svg");
  input.classList.toggle("dark-input");
  input2.classList.toggle("dark-input");
  rememberMe.classList.toggle("dark-remember");
  textSub.classList.toggle("dark-sub");
  checkbox.classList.toggle("remember__checkbox--dark");
};

switchBtn.addEventListener("click", switchAll);
