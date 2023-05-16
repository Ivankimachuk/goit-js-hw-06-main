const numberCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numberCategories.length}`);

numberCategories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const categoryElements = category.querySelectorAll('li').length; 

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);

});
