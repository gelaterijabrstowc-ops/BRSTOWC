// =========================
// BRSTOWC - KOMENTARJI JS
// =========================


import { db } from "../firebase/firebase-config.js";

import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    serverTimestamp,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ID RECEPTA IZ URL-JA

const urlParams = new URLSearchParams(window.location.search);

const recipeID = urlParams.get("id");





// ELEMENTI HTML

const commentsList = document.querySelector("#commentsList");

const commentAuthor = document.querySelector("#commentAuthor");

const commentText = document.querySelector("#commentText");

const addCommentButton = document.querySelector("#addComment");






// PRIKAZ KOMENTARJEV

async function loadComments() {


    commentsList.innerHTML = "Nalagam mnenja...";



    const commentsQuery = query(

        collection(db, "comments"),

        where("recipeID", "==", recipeID),

        orderBy("date", "desc")

    );



    const snapshot = await getDocs(commentsQuery);



    commentsList.innerHTML = "";



    if (snapshot.empty) {


        commentsList.innerHTML = 
            "<p>Še ni mnenj. Bodi prvi!</p>";

        return;

    }




    snapshot.forEach((doc) => {


        const comment = doc.data();



        const commentBox = document.createElement("div");


        commentBox.className = "comment";



        commentBox.innerHTML = `

            <h4>${comment.author}</h4>

            <p>${comment.text}</p>

        `;



        commentsList.appendChild(commentBox);


    });


}





// DODAJANJE KOMENTARJA

addCommentButton.addEventListener("click", async () => {



    const author = commentAuthor.value.trim();

    const text = commentText.value.trim();




    if (!author || !text) {


        alert("Izpolni vse podatke!");

        return;

    }





    await addDoc(collection(db, "comments"), {


        recipeID: recipeID,

        author: author,

        text: text,

        date: serverTimestamp()


    });





    commentAuthor.value = "";

    commentText.value = "";



    loadComments();



});





// ZAŽENI NALAGANJE

loadComments();
