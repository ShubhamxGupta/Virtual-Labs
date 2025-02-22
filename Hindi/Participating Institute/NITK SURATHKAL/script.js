const topics = [
    {
        name: "Fluid Mechanics Lab",
        description: "Experiments in Fluid Mechanics Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Transportation Engineering Lab",
        description: "Experiments in Transportation Engineering Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Environmental Engineering Lab I",
        description: "Experiments in Environmental Engineering Lab I.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Environmental Engineering Lab II",
        description: "Experiments in Environmental Engineering Lab II.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Fluid Machinery Lab",
        description: "Experiments in Fluid Machinery Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Marine Structure Lab",
        description: "Experiments in Marine Structure Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Mining Geology Lab",
        description: "Experiments in Mining Geology Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Industrial Electric Drives Lab",
        description: "Experiments in Industrial Electric Drives Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Mechanics of Machine Lab I",
        description: "Experiments in Mechanics of Machine Lab I.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Machine Dynamics & Mechanical Vibration Lab",
        description: "Experiments in Machine Dynamics & Mechanical Vibration Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Process Control, Reaction Engineering and Unit Operations Lab",
        description: "Experiments in Process Control, Reaction Engineering and Unit Operations Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Strength of Materials Lab",
        description: "Experiments in Strength of Materials Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Dynamics of Machine Lab",
        description: "Experiments in Dynamics of Machine Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Substation Automation Lab",
        description: "Experiments in Substation Automation Lab.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Mechanics of Machines Lab 2",
        description: "Experiments in Mechanics of Machines Lab 2.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Geotechnical Engineering Lab (New)",
        description: "Experiments in Geotechnical Engineering Lab (New).",
        college: "NITK SURATHKAL",
    },
    {
        name: "Engineering Graphics Lab (New)",
        description: "Experiments in Engineering Graphics Lab (New).",
        college: "NITK SURATHKAL",
    },
];

const cseCardsContainer = document.getElementById("cseCards");

topics.forEach((topic) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${topic.name}</h2>
        <p>${topic.description}</p>
        <p class="college"><strong>College:</strong> ${topic.college}</p>
        <div class="buttons">
            <button class="btn white-btn">Reference Books</button>
            <button class="btn orange-btn">Syllabus Mapping</button>
        </div>
    `;

    cseCardsContainer.appendChild(card);
});
