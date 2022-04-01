const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".control");
const controls = document.querySelector(".controls");
const allSections = document.querySelector(".main-container");
const overlay = document.querySelector(".overlay");
const overlayContainer = document.querySelector(".overlay-container");
const contactBtn = document.querySelector(".pop-contact");
const contactSec = document.querySelector(".contactResume");
const toggleMode = document.querySelector("#toggle-mode");

function pageTransition() {
  // for the controls button
  for (let i = 0; i < sectBtns.length - 1; i++) {
    sectBtns[i].addEventListener("click", function (e) {
      let currentBtn = document.querySelector(".active-btn");
      // currentBtn.className = currentBtn.className.replace("active-btn", "");
      currentBtn.classList.remove("active-btn");
      this.className += " active-btn";

      // handles the section display
      const id = e.target.dataset.id;
      sections.forEach((sections) => {
        sections.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    });
  }
  // just incase an error occur
  // allSections.addEventListener("click", function (e) {
  //   // console.log(e.target);
  //   const id = e.target.dataset.id;
  //   sections.forEach((sections) => {
  //     sections.classList.remove("active");
  //   });
  //   const element = document.getElementById(id);
  //   element.classList.add("active");
  // });
}
pageTransition();

// add onclick event to contact button
contactSec.addEventListener("click", (e) => {
  if (
    e.target.className === "pop-contact" ||
    e.target.className === "overlay-container" ||
    e.target.className == "overlay-item" ||
    e.target.className == "oc-left" ||
    e.target.className == "oc-right" ||
    e.target.className == "social-link"
  ) {
    overlay.style.display = "flex";
    // overlay.style.jusifyContent = "center";
    // overlay.style.alignItem = "center";
  } else {
    overlay.style.display = "none";
  }
});

// toggle dark mode
toggleMode.innerHTML = `<i class="fa-solid fa-sun-bright">&#9728</i>`;
let flag = 1;
function toggleFunc() {
  if (flag === 1) {
    toggleMode.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    document.documentElement.setAttribute("data-theme", "dark");
    flag = 2;
  } else {
    toggleMode.innerHTML = `<i class="fa-solid fa-sun-bright">&#9728</i>`;
    document.documentElement.setAttribute("data-theme", "light");
    flag = 1;
  }
}
