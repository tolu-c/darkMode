let switchBtn = document.querySelector(".switch-btn");
// let switchBox = document.querySelector(".switch-box");
let container = document.querySelector(".container");
let sun = document.querySelector(".icon-tabler-sun");
let moon = document.querySelector(".icon-tabler-moon");
let glass = document.querySelector(".card__glass");
let heading = document.querySelector(".heading");
let text = document.querySelector(".text");
let label = document.querySelector(".card__label");
let svg = document.querySelector(".icon-tabler-mail");
let svg2 = document.querySelector(".icon-tabler-key");
let input = document.querySelector("#username");
let input2 = document.querySelector("#password");
console.log(input);
console.log(input2);

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
  svg.classList.toggle("dark-input-svg");
  svg2.classList.toggle("dark-input-svg");
  input.classList.toggle("dark-input");
  input2.classList.toggle("dark-input");
};

switchBtn.addEventListener("click", switchAll);
