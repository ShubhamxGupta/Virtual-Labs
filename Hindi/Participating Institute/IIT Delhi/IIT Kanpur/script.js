const topics = [
    {
        name: "Material Response to Microstructural, Mechanical, Thermal and Biological Stimuli Lab",
        description: "Study of material behavior under various stimuli.",
        college: "IIT Kanpur",
    },
    {
        name: "Virtual Astrophysics Lab",
        description: "Simulations and experiments in astrophysics.",
        college: "IIT Kanpur",
    },
    {
        name: "Ultrafast Laser Spectroscopy Lab",
        description: "Experiments involving ultrafast laser techniques.",
        college: "IIT Kanpur",
    },
    {
        name: "Electron Microscopy for Beginners",
        description: "Introduction to electron microscopy techniques.",
        college: "IIT Kanpur",
    },
    {
        name: "Python Programming Lab",
        description: "Exercises covering Python programming fundamentals.",
        college: "IIT Kanpur",
    },
    {
        name: "Basics of Physics",
        description: "Fundamental physics experiments and simulations.",
        college: "IIT Kanpur",
    },
    {
        name: "Mechanical Metallurgy Lab (New)",
        description: "Studies on the mechanical behavior of metals.",
        college: "IIT Kanpur",
    },
    {
        name: "Mechanics Virtual Lab (Pilot)",
        description: "Virtual experiments in mechanics.",
        college: "IIT Kanpur",
    },
    {
        name: "Digital Anthropology Lab",
        description: "Exploration of anthropological concepts through digital simulations.",
        college: "IIT Kanpur",
    },
    {
        name: "Mechanics of Machine Lab I",
        description: "Experiments on the mechanics of machines.",
        college: "IIT Kanpur",
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
