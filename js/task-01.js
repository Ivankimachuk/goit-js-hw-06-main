
const numberCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    const categoryElements = category.lastElementChild.children.length; 

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);

});