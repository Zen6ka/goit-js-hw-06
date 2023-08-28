// Знайти ul#categories
const categoriesList = document.querySelector("#categories");

// Знайти всі елементи li.item в списку ul#categories
const categoryItems = categoriesList.querySelectorAll("li.item");

// Вивести в консоль кількість категорій
console.log(`Total categories: ${categoryItems.length}`);

// Перебрати кожен елемент li.item
categoryItems.forEach((item) => {
  // Знайти заголовок h2
  const categoryTitle = item.querySelector("h2").textContent;

  // Знайти всі елементи li вкладені в поточний елемент li.item
  const subItems = item.querySelectorAll("li");

  // Вивести інформацію про категорію та кількість елементів в ній
  console.log(`${categoryTitle} category has ${subItems.length} items.`);
});
