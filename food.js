let alimentList = [
  {
    name: "blanc de poulet fleury michon 160g",
    calorie: 163,
    id: 1,
  },
  {
    name: "filet de poulet 300g",
    calorie: 642,
    id: 2,
  },
  {
    name: "thon 140g",
    calorie: 169,
    id: 3,
  },
  {
    name: "4 oeuf",
    calorie: 300,
    id: 4,
  },
  {
    name: "lait 25cl",
    calorie: 115,
    id: 5,
  },
  {
    name: "emmental rapé 150g",
    calorie: 553,
    id: 6,
  },
  {
    name: "mozzarella galbani 125g",
    calorie: 297,
    id: 7,
  },
  {
    name: "madame loïk 150g",
    calorie: 400,
    id: 8,
  },
  {
    name: "feta 200g",
    calorie: 546,
    id: 9,
  },
  {
    name: "creme fraiche 2càs",
    calorie: 146,
    id: 10,
  },
  {
    name: "creme liquide 20cl",
    calorie: 586,
    id: 11,
  },
  {
    name: "beurre 25g",
    calorie: 187,
    id: 12,
  },
  {
    name: "epinard en branche 500g",
    calorie: 205,
    id: 13,
  },
  {
    name: "poireau 300g",
    calorie: 183,
    id: 14,
  },
  {
    name: "brocoli",
    calorie: 185,
    id: 15,
  },
  {
    name: "tomate 100g",
    calorie: 20,
    id: 16,
  },
  {
    name: "huile d'olive 20cl",
    calorie: 180,
    id: 17,
  },
  {
    name: "graine de chia 12g",
    calorie: 54,
    id: 18,
  },
];

alimentsCardContainer.innerHTML = alimentList
  .map(
    (aliment) =>
      `
<li id="${aliment.id}" class="aliment-card">
    <h1><span id="gr">100gr</span> ${aliment.name}</h1>
    <h2>${aliment.calorie} Kcal</h2>
    <p class="plus">+</p>
    <p class="moins">-</p>
</li>
`
  )
  .join("");

const liAlimentCard = document.querySelectorAll(".aliment-card");

liAlimentCard.forEach((liAliment) => {
  liAliment.addEventListener("click", () => {
    liAliment.classList.toggle("selected");

    let totalCalorieSelected = 0;

    for (const liAliment of liAlimentCard) {
      if (liAliment.classList.contains("selected") === true) {
        for (const aliment of alimentList) {
          if (aliment.id === Number(liAliment.id)) {
            totalCalorieSelected += aliment.calorie;
          }
        }
      }
    }
    totalKcal.innerHTML = `${totalCalorieSelected}`;
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}
