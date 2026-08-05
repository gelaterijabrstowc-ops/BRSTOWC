// =========================
// BRSTOWC - RECEPTI JS
// =========================


import { db } from "../firebase/firebase-config.js";


import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





const recipesContainer = document.querySelector("#recipesContainer");

const searchInput = document.querySelector("#searchInput");

const categoryButtons = document.querySelectorAll("[data-category]");



let allRecipes = [];





// NALOŽI RECEPTE IZ FIRESTORE

async function loadRecipes() {


    try {


        const querySnapshot = await getDocs(
            collection(db, "recipes")
        );



        allRecipes = [];



        querySnapshot.forEach((doc) => {


            allRecipes.push({

                id: doc.id,

                ...doc.data()

            });


        });




        displayRecipes(allRecipes);



    } catch (error) {


        console.error(
            "Napaka pri nalaganju receptov:",
            error
        );


    }


}





// PRIKAZ RECEPTOV

function displayRecipes(recipes) {


    recipesContainer.innerHTML = "";




    if (recipes.length === 0) {


        recipesContainer.innerHTML =
            "<p>Ni najdenih receptov.</p>";

        return;

    }




    recipes.forEach((recipe) => {



        const card = document.createElement("div");


        card.className = "recipe-card";




        card.innerHTML = `

            <img 
                src="${recipe.imageURL}" 
                alt="${recipe.title}"
            >


            <h2>
                ${recipe.title}
            </h2>


            <p>
                Avtor: ${recipe.author}
            </p>


            <p>
                ${recipe.category}
            </p>


            <a href="recept.html?id=${recipe.id}">
                Ogled recepta
            </a>

        `;




        recipesContainer.appendChild(card);



    });


}





// FILTRIRANJE PO KATEGORIJI

categoryButtons.forEach(button => {



    button.addEventListener("click", () => {



        const category = button.dataset.category;



        if (category === "vse") {


            displayRecipes(allRecipes);


            return;

        }




        const filtered = allRecipes.filter(recipe =>

            recipe.category === category

        );



        displayRecipes(filtered);



    });



});







// ISKANJE

searchInput.addEventListener("input", () => {



    const search = searchInput.value.toLowerCase();




    const filtered = allRecipes.filter(recipe =>


        recipe.title.toLowerCase().includes(search)


    );



    displayRecipes(filtered);



});







loadRecipes();
