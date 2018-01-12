"use strict";

var linkLogin = document.querySelector("header .user-block .login");
var popupOverlay = document.querySelector(".modal-overlay");
var popupLogin = document.querySelector(".modal-login");
var closeLogin = popupLogin.querySelector(".modal-close");
var formLogin = popupLogin.querySelector("form");
var inputLogin = formLogin.querySelector(".login");
var inputPass = formLogin.querySelector(".pass");
var storageLogin = localStorage.getItem("login");

linkLogin.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverlay.classList.add("js__modal-show");
  popupLogin.classList.add("js__modal-show");
  if (storageLogin) {
    inputLogin.value = storageLogin;
    inputPass.focus();
  } else {
    inputLogin.focus();
  }
});

formLogin.addEventListener("submit", function (event) {
  if (!inputLogin.value || !inputPass.value) {
    event.preventDefault();
    console.log("Нужно ввести данные");
    if (popupLogin.classList.contains("js__modal-error")) {
      popupLogin.classList.remove("js__modal-error");
    }
    popupLogin.classList.add("js__modal-error");
  } else {
    localStorage.setItem("login", inputLogin.value);
  }
});

closeLogin.addEventListener("click", function (event) {
  event.preventDefault();
  popupOverlay.classList.remove("js__modal-show");
  popupLogin.classList.remove("js__modal-show");
  popupLogin.classList.remove("js__modal-error");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    localStorage.removeItem("login"); // TEST
    if (popupLogin.classList.contains("js__modal-show")) {
      popupOverlay.classList.remove("js__modal-show");
      popupLogin.classList.remove("js__modal-show");
      popupLogin.classList.remove("js__modal-error");
    }
  }
});
