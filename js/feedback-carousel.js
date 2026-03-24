"use strict";

document.querySelectorAll(".card__nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    document.getElementById(targetId).checked = true;
  });
});
