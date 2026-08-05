// =========================
// BRSTOWC - TELOVADBA JS
// =========================



const workoutsContainer = document.querySelector("#workoutsContainer");

const filterButtons = document.querySelectorAll("[data-type]");





const workouts = [


    {
        name: "Trening prsa",
        category: "prsa",
        exercises: [
            "Bench press",
            "Sklece",
            "Metuljček",
            "Dvigovanje uteži na klopi"
        ]
    },


    {
        name: "Trening hrbet",
        category: "hrbet",
        exercises: [
            "Veslanje",
            "Zgibi",
            "Lat pulldown",
            "Mrtvi dvig"
        ]
    },


    {
        name: "Trening noge",
        category: "noge",
        exercises: [
            "Počepi",
            "Izpadni koraki",
            "Leg press",
            "Meča"
        ]
    },


    {
        name: "Trening roke",
        category: "roka",
        exercises: [
            "Biceps pregibi",
            "Triceps potiski",
            "Hammer curls"
        ]
    },


    {
        name: "Trening trebuh",
        category: "trebuh",
        exercises: [
            "Trebušnjaki",
            "Plank",
            "Dvig nog"
        ]
    }


];







// PRIKAZ TRENINGOV

function displayWorkouts(data) {


    workoutsContainer.innerHTML = "";




    data.forEach(workout => {



        const card = document.createElement("div");


        card.className = "workout-card";




        let exercisesHTML = "";



        workout.exercises.forEach(exercise => {


            exercisesHTML += `

                <li>
                    ${exercise}
                </li>

            `;


        });





        card.innerHTML = `

            <h2>
                ${workout.name}
            </h2>


            <ul>

                ${exercisesHTML}

            </ul>

        `;




        workoutsContainer.appendChild(card);



    });



}







// FILTRI

filterButtons.forEach(button => {



    button.addEventListener("click", () => {



        const type = button.dataset.type;



        if (type === "vsi") {


            displayWorkouts(workouts);


            return;

        }





        const filteredWorkouts = workouts.filter(workout =>

            workout.category === type

        );



        displayWorkouts(filteredWorkouts);



    });



});







// ZAČETNI PRIKAZ

displayWorkouts(workouts);
