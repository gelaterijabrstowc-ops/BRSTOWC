const recipeModal = document.getElementById("recipeModal");


// ODPRE FORMULAR

function openRecipeForm(){

    recipeModal.style.display = "flex";

}


// ZAPRE FORMULAR

function closeRecipeForm(){

    recipeModal.style.display = "none";

}



// SHRANJENI RECEPTI

let recipes = JSON.parse(localStorage.getItem("recipes")) || [];



// OBJAVA RECEPTA

function addRecipe(){


    const name = document.getElementById("recipeName").value;
    const category = document.getElementById("recipeCategory").value;
    const ingredients = document.getElementById("recipeIngredients").value;
    const steps = document.getElementById("recipeSteps").value;
    const imageInput = document.getElementById("recipeImage");


    if(name === "" || ingredients === "" || steps === ""){

        alert("Izpolni vsa polja!");
        return;

    }


    let image = "";


    if(imageInput.files.length > 0){

        image = URL.createObjectURL(imageInput.files[0]);

    }



    const recipe = {

        id: Date.now(),
        name,
        category,
        ingredients,
        steps,
        image

    };


    recipes.push(recipe);


    localStorage.setItem(
        "recipes",
        JSON.stringify(recipes)
    );


    displayRecipes();


    closeRecipeForm();


}



// PRIKAZ RECEPTOV

function displayRecipes(){


    const grid = document.getElementById("recipeGrid");

    grid.innerHTML = "";


    recipes.forEach(recipe => {


        grid.innerHTML += `

        <article class="recipe-card">


            ${
                recipe.image
                ?
                `<img src="${recipe.image}">`
                :
                ""
            }


            <div class="recipe-content">


                <span class="recipe-category">
                    ${recipe.category}
                </span>


                <h3>
                    ${recipe.name}
                </h3>


                <p>
                    ${recipe.ingredients}
                </p>


            </div>


        </article>

        `;


    });


}



// ZAGON

displayRecipes();
