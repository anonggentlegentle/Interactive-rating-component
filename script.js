"use strict";

const initialPage = document.querySelector(".main__initial");
const submittedPage = document.querySelector(".main__submitted");
const ratingNumberBox = document.querySelector(".main__rating-box");
const ratingNumber = document.querySelectorAll(".main__rating-number");
const submitBtn = document.querySelector(".main__submit");
const selectionMessage = document.querySelector(".main__selection");
const noRatingMessage = document.querySelector(".main__no-rating");

let activeNumber = 0;

console.log(activeNumber);

ratingNumberBox.addEventListener("click", function (e) {
  const rating = e.target;
  activeNumber = Number(rating.dataset.rating);

  ratingNumber.forEach(function (el) {
    el.classList.remove("orange-bg");
  });

  if (rating.classList.contains("main__rating-number")) {
    rating.classList.add("orange-bg");
  }
});

submitBtn.addEventListener("click", function () {
  if (activeNumber !== 0) {
    selectionMessage.textContent = `You selected ${activeNumber} out of 5`;

    initialPage.classList.add("hidden");
    submittedPage.classList.remove("hidden");
  } else {
    noRatingMessage.style.display = "block";
  }
});
