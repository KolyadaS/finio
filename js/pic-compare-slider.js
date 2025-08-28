"use strict";

const root = document.documentElement;
const picSlider = document.getElementById("pic-slider");
const sliderButton = document.getElementById("pic-slider__button");
const sliderButtonWrapper = document.getElementById(
  "pic-slider__button-wrapper"
);
const topPic = document.getElementById("top-pic");

let pos = 50;
let isDragging = false;
let offsetX = 0;

sliderButton.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - sliderButton.getBoundingClientRect().left;
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const sliderButtonWrapperRect = sliderButtonWrapper.getBoundingClientRect();
  const sliderButtonRect = sliderButton.getBoundingClientRect();

  let newLeft = e.clientX - sliderButtonWrapperRect.left - offsetX;
  if (newLeft < (-1 * sliderButtonRect.width) / 2) {
    newLeft = (-1 * sliderButtonRect.width) / 2;
  }
  if (newLeft > sliderButtonWrapperRect.width - sliderButtonRect.width / 2) {
    newLeft = sliderButtonWrapperRect.width - sliderButtonRect.width / 2;
  }

  sliderButton.style.left = newLeft + "px";
  sliderButton.style.transform = "none";
  topPic.style.width = newLeft + sliderButtonRect.width / 2 + "px";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
