// =========================
// BRSTOWC - MAIN JS
// =========================


// Avtomatsko leto v footerju

const footerYear = document.querySelector("#footerYear");

if (footerYear) {

    footerYear.textContent = new Date().getFullYear();

}



// Označi trenutno stran v meniju

const currentPage = window.location.pathname.split("/").pop();


const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {


    const linkPage = link.getAttribute("href");


    if (linkPage === currentPage) {

        link.classList.add("active");

    }


});





// Preprost prikaz sporočila

function showMessage(message) {


    const messageBox = document.createElement("div");


    messageBox.className = "message";


    messageBox.textContent = message;


    document.body.appendChild(messageBox);



    setTimeout(() => {

        messageBox.remove();

    }, 3000);


}
