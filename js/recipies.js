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
