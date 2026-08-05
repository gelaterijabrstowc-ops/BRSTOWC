// =========================
// BRSTOWC - DODAJ RECEPT JS
// =========================


import { db } from "../firebase/firebase-config.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// CLOUDINARY PODATKI

const cloudName = "TVOJ_CLOUD_NAME";
const uploadPreset = "TVOJ_UPLOAD_PRESET";





// OBRAZEC

const recipeForm = document.querySelector("#recipeForm");



recipeForm.addEventListener("submit", async (e) => {


    e.preventDefault();



    const author = document.querySelector("#author").value;

    const title = document.querySelector("#title").value;

    const category = document.querySelector("#category").value;

    const imageFile = document.querySelector("#image").files[0];

    const ingredients = document.querySelector("#ingredients").value;

    const preparation = document.querySelector("#preparation").value;




    // PREVERJANJE SLIKE

    if (!imageFile) {

        alert("Izberi sliko!");

        return;

    }



    if (imageFile.type !== "image/png") {

        alert("Dovoljene so samo PNG slike!");

        return;

    }




    try {


        // 1. NALOŽI SLIKO V CLOUDINARY


        const formData = new FormData();


        formData.append("file", imageFile);

        formData.append("upload_preset", uploadPreset);



        const cloudinaryResponse = await fetch(

            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,

            {
                method: "POST",
                body: formData
            }

        );



        const cloudinaryData = await cloudinaryResponse.json();


        const imageURL = cloudinaryData.secure_url;




        // 2. SHRANI RECEPT V FIRESTORE


        await addDoc(collection(db, "recipes"), {


            title: title,

            author: author,

            category: category,

            imageURL: imageURL,

            ingredients: ingredients,

            preparation: preparation,

            createdAt: serverTimestamp()


        });




        alert("Recept uspešno dodan!");



        window.location.href = "recepti.html";



    } catch (error) {


        console.error("Napaka:", error);


        alert("Prišlo je do napake pri dodajanju recepta.");


    }


});
