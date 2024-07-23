const API_KEY = "44abf94098954ec58856b1ed8130c1f0";
async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=apiKey=${API_KEY}`);
    const data = await response.json();

    return data.recipes;

}

async function init() {
    const recipes = await getRecipes();
    console.log(recipes);
}

init();