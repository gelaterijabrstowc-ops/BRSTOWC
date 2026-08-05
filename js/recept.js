// =========================
// BRSTOWC - RECEPT JS
// =========================


import { db } from "../firebase/firebase-config.js";


import {
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ID RECEPTA IZ URL-JA

const urlParams = new URLSearchParams(window.location.search);

const recipeID = urlParams.get("id");





// HTML ELEMENTI

const recipeImage = document.querySelector("#recipeImage");

const recipeTitle = document.querySelector("#recipeTitle");

const recipeAuthor = document.querySelector("#recipeAuthor");

const recipeCategory = document.querySelector("#recipeCategory");

const recipeIngredients = document.querySelector("#recipeIngredients");

const recipePreparation = document.querySelector("#recipePreparation");






// NALOŽI RECEPT

async function loadRecipe() {


    if (!recipeID) {

        recipeTitle.textContent = "Recept ni najden.";

        return;

    }




    try {


        const recipeRef = doc(db, "recipes", recipeID);



        const recipeSnap = await getDoc(recipeRef);





        if (!recipeSnap.exists()) {


            recipeTitle.textContent = "Recept ne obstaja.";

            return;

        }





        const recipe = recipeSnap.data();





        // VNOS PODATKOV V HTML


        recipeImage.src = recipe.imageURL;

        recipeImage.alt = recipe.title;



        recipeTitle.textContent = recipe.title;


        recipeAuthor.textContent = recipe.author;


        recipeCategory.textContent = recipe.category;


        recipeIngredients.textContent = recipe.ingredients;


        recipePreparation.textContent = recipe.preparation;




    } catch (error) {


        console.error("Napaka pri nalaganju recepta:", error);


        recipeTitle.textContent = "Napaka pri nalaganju recepta.";

    }


}




loadRecipe();
