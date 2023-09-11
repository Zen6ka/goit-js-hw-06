const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsItems = document.createElement("li");

const markUp = ingredients.map((ingredient) => {
  const ingredientsItems = document.createElement("li");
  ingredientsItems.classList.add("item");
  ingredientsItems.textContent = `${ingredient}`;
  return ingredientsItems;
});

ingredientsList.append(...markUp);
console.log(ingredientsList);
