"use strict";
let nameInputValue = "";
let calorieInputValue = "";

const nameInput = document.getElementById("nameInput");
const calorieInput = document.getElementById("calorieInput");
const total = document.getElementById("total");
const tableau = document.getElementById("tableau");

nameInput.addEventListener("change", (e) => {
  nameInputValue = e.target.value;
});
calorieInput.addEventListener("change", (e) => {
  calorieInputValue = Number(e.target.value);
});

let totalCalorieStorage = parseInt(localStorage.getItem("kcal"));
let totalKcal = 0;
total.innerHTML = totalCalorieStorage;

console.log(totalCalorieStorage);

formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  calorieInputValue += totalCalorieStorage;
  totalKcal += calorieInputValue;
  tableau.innerHTML += `
  <li class="article-card">
  <h1>${nameInputValue}</h1>
  <h1>${calorieInputValue} kcal</h1>
  </li>
  `;

  nameInputValue = "";
  nameInput.value = "";
  calorieInputValue = "";
  ``;
  calorieInput.value = "";
  total.innerHTML = `${totalKcal}`;

  localStorage.setItem("tableau", JSON.stringify(tableau.innerHTML));
  localStorage.setItem("kcal", JSON.stringify(totalKcal));
});

let obj = JSON.parse(localStorage.getItem("tableau"));
tableau.innerHTML = obj;

const sup = document.querySelector(".fas");

sup.addEventListener("click", () => {
  localStorage.removeItem("tableau");
  localStorage.removeItem("kcal");

  window.location.reload();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}
