const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".control");
const controls = document.querySelector(".controls");
const allSections = document.querySelector(".main-container");

function pageTransition() {
  // for the controls button
  for (let i = 0; i < sectBtns.length; i++) {
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
