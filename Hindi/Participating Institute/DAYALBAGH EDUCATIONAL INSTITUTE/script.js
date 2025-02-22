const topics = [
    {
        name: "Virtual Power Lab",
        description: "Experiments in Virtual Power Lab.",
        college: "DAYALBAGH EDUCATIONAL INSTITUTE",
    },
    {
        name: "Metal Forming Virtual Simulation Lab",
        description: "Experiments in Metal Forming Virtual Simulation Lab.",
        college: "DAYALBAGH EDUCATIONAL INSTITUTE",
    },
    {
        name: "3D Printing Virtual Simulation Lab",
        description: "Experiments in 3D Printing Virtual Simulation Lab.",
        college: "DAYALBAGH EDUCATIONAL INSTITUTE",
    },
    {
        name: "Control Engineering Lab (New)",
        description: "Experiments in Control Engineering Lab (New).",
        college: "DAYALBAGH EDUCATIONAL INSTITUTE",
    },
];

const cseCardsContainer = document.getElementById("cseCards");

topics.forEach((topic) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-text">
            <h2>${topic.name}</h2>
            <p>${topic.description}</p>
            <p class="college"><strong>College:</strong> ${topic.college}</p>
        </div>
        <div class="buttons">
            <button class="btn white-btn">Reference Books</button>
            <button class="btn orange-btn">Syllabus Mapping</button>
        </div>
    `;

    cseCardsContainer.appendChild(card);
});
