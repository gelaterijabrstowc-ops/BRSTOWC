function openRecipeForm() {
    document.getElementById("recipeModal").style.display = "flex";
}

function closeRecipeForm() {
    document.getElementById("recipeModal").style.display = "none";
}

function addRecipe() {

    const name = document.getElementById("recipeName").value.trim();
    const category = document.getElementById("recipeCategory").value;
    const ingredients = document.getElementById("recipeIngredients").value.trim();
    const steps = document.getElementById("recipeSteps").value.trim();

    if (!name || !ingredients || !steps) {
        alert("Izpolni vsa polja.");
        return;
    }

    const recipe = {
        id: Date.now(),
        name,
        category,
        ingredients,
        steps
    };

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.push(recipe);

    localStorage.setItem("recipes", JSON.stringify(recipes));

    document.getElementById("recipeName").value = "";
    document.getElementById("recipeCategory").value = "Fit";
    document.getElementById("recipeIngredients").value = "";
    document.getElementById("recipeSteps").value = "";

    closeRecipeForm();

    displayRecipes();
}

function displayRecipes() {

    const recipeGrid = document.getElementById("recipeGrid");

    recipeGrid.innerHTML = "";

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    recipes.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "recipe-card";

        card.innerHTML = `
            <div class="recipe-info">

                <span class="category">${recipe.category}</span>

                <h2>${recipe.name}</h2>

                <p>${recipe.ingredients}</p>

                <button onclick="viewRecipe(${recipe.id})">
                    Ogled recepta
                </button>

            </div>
        `;

        recipeGrid.appendChild(card);

    });

}

function viewRecipe(id) {

    const recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const recipe = recipes.find(r => r.id === id);

    if (!recipe) return;

    alert(
        `${recipe.name}

Sestavine:

${recipe.ingredients}

Postopek:

${recipe.steps}`
    );

}

window.openRecipeForm = openRecipeForm;
window.closeRecipeForm = closeRecipeForm;
window.addRecipe = addRecipe;
window.viewRecipe = viewRecipe;

displayRecipes();
