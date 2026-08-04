function openRecipeForm(){

    document.getElementById("recipeModal").style.display="flex";

}


function closeRecipeForm(){

    document.getElementById("recipeModal").style.display="none";

}

function openRecipeForm(){

    document.getElementById("recipeModal").style.display="flex";

}


function closeRecipeForm(){

    document.getElementById("recipeModal").style.display="none";

}



function addRecipe(){

    const name = document.getElementById("recipeName").value;
    const category = document.getElementById("recipeCategory").value;
    const ingredients = document.getElementById("recipeIngredients").value;
    const steps = document.getElementById("recipeSteps").value;


    if(!name || !ingredients || !steps){

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


    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];


    recipes.push(recipe);


    localStorage.setItem(
        "recipes",
        JSON.stringify(recipes)
    );


    alert("Recept dodan!");


    closeRecipeForm();


}

function displayRecipes(){

    const recipeGrid = document.getElementById("recipeGrid");

    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];


    recipes.forEach(recipe => {


        const card = document.createElement("article");

        card.className = "recipe-card";


        card.innerHTML = `

            <div class="recipe-info">

                <span class="category">
                    ${recipe.category}
                </span>

                <h2>
                    ${recipe.name}
                </h2>


                <p>
                    ${recipe.ingredients}
                </p>


                <button onclick="viewRecipe(${recipe.id})">
                    Ogled recepta
                </button>

            </div>

        `;


        recipeGrid.appendChild(card);


    });

}



function viewRecipe(id){

    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

    const recipe = recipes.find(r => r.id === id);


    alert(
        recipe.name +
        "\n\nSestavine:\n" +
        recipe.ingredients +
        "\n\nPostopek:\n" +
        recipe.steps
    );

}



displayRecipes();
