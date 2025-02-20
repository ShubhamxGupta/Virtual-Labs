const topics = [
    {
        name: "Virtual Mass Transfer Lab",
        description: "Experiments focusing on mass transfer operations and principles.",
        college: "IIT Guwahati",
    },
    {
        name: "Virtual English and Communication Lab",
        description: "Exercises to enhance English language proficiency and communication skills.",
        college: "IIT Guwahati",
    },
    {
        name: "Digital Electronics Lab-II",
        description: "Advanced experiments in digital electronics and circuit design.",
        college: "IIT Guwahati",
    },
    {
        name: "Digital Anthropology Lab",
        description: "Exploration of anthropological concepts through digital simulations.",
        college: "IIT Guwahati",
    },
    {
        name: "Creative Design, Prototyping & Experiential Lab",
        description: "Hands-on activities in creative design and prototyping.",
        college: "IIT Guwahati",
    },
    {
        name: "Virtual Mass Transfer Lab",
        description: "Experiments focusing on mass transfer operations and principles.",
        college: "IIT Guwahati",
    },
    {
        name: "Digital VLSI Design Virtual Lab",
        description: "Experiments on digital VLSI design and verification.",
        college: "IIT Guwahati",
    },
    {
        name: "Electrical Machines Lab",
        description: "Study of electrical machines and their operational characteristics.",
        college: "IIT Guwahati",
    },
    {
        name: "Signals and Systems Lab",
        description: "Experiments on signal processing and system analysis.",
        college: "IIT Guwahati",
    },
    {
        name: "Virtual Anthropology Lab",
        description: "Exploration of anthropological concepts through virtual simulations.",
        college: "IIT Guwahati",
    },
    {
        name: "Ergonomics Lab",
        description: "Studies on human factors and ergonomic design principles.",
        college: "IIT Guwahati",
    },
    {
        name: "Remote Triggered Digital System Lab",
        description: "Remote experiments on digital systems and logic design.",
        college: "IIT Guwahati",
    },
    {
        name: "Mechanical Vibration Lab",
        description: "Experiments analyzing mechanical vibrations and their effects.",
        college: "IIT Guwahati",
    },
    {
        name: "Immunology and Microbiology Lab",
        description: "Virtual experiments in immunology and microbiology.",
        college: "IIT Guwahati",
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
