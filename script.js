"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclosemodal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openmodal = function () {
  console.log("Button Clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openmodal);
}
btnclosemodal.addEventListener("click", closemodal);
overlay.addEventListener("click", closemodal);

document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closemodal();
  }
});
