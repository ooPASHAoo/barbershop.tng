"use strict";

var mapOpen = document.querySelector(".contact .map");
var mapOverlay = document.querySelector(".modal-overlay");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function (event) {
  event.preventDefault();
  mapOverlay.classList.add("js__modal-show");
  mapPopup.classList.add("js__modal-show");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  mapOverlay.classList.remove("js__modal-show");
  mapPopup.classList.remove("js__modal-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("js__modal-show")) {
      mapOverlay.classList.remove("js__modal-show");
      mapPopup.classList.remove("js__modal-show");
    }
  }
});
