const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientUl = document.querySelector('#ingredients');

const ingredientList = ingredients.map(ingredient => {

  const ingredientLi = document.createElement('li');
  ingredientLi.textContent = ingredient;
  ingredientLi.classList.add('item');
  return ingredientLi;
});

ingredientUl.append(...ingredientList);


