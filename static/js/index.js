console.log("how are you");
let motherContainer = document.querySelector(".mother-container");
let toggleBtn = document.querySelector(".toggle-btn");
let link = document.getElementsByTagName("link");
let body = document.getElementsByTagName("body");
let scriptChanged = false;
let logo = document.querySelector(".logo");
// link[0].href = "./static/css/main.css";
// console.log(link[0].href);
// console.log(motherContainer)

const styleScript = () => {
  link[0].href = "/static/css/main.css";
  scriptChanged = true;
};

const mainScript = () => {
  link[0].href = "/static/css/style.css";
  scriptChanged = false;
};

const toggleScript = () => {
  toggleBtn.classList.toggle("right");
  logo.classList.toggle("logo-dark");
};

const slideButton = () => {
  //   body.style.backgroundColor.toggle('black')
};

motherContainer.addEventListener("click", toggleScript);
