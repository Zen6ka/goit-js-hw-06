const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulElement = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  // Створити новий <li> елемент
  const liElement = document.createElement("li");

  // Додати текстовий вміст (назви інгредієнта) в <li> елемент
  liElement.textContent = ingredient;

  // Додати клас "item" до <li> елементу
  liElement.classList.add("item");

  // Додати <li> елемент до списку ul#ingredients
  ulElement.appendChild(liElement);
});

ulElement.append(...ulElement.children);
