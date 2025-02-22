const topics = [
    {
        name: "Bioreactor Modeling and Simulation Lab",
        description: "Simulation-based experiments in bioreactor modeling and analysis.",
        college: "IIT Roorkee",
    },
    {
        name: "Bio-Medical Signal & Image Processing Lab",
        description: "Experiments focused on processing and analysis of biomedical signals and images.",
        college: "IIT Roorkee",
    },
    {
        name: "Biomedical Instrumentation Lab",
        description: "Virtual experiments on biomedical instruments and their applications.",
        college: "IIT Roorkee",
    },
    {
        name: "Analog Electronics Lab",
        description: "Study of analog electronic circuits and their applications.",
        college: "IIT Roorkee",
    },
    {
        name: "Analog and Digital Electronics Lab - I",
        description: "Experiments covering both analog and digital electronic components.",
        college: "IIT Roorkee",
    },
    {
        name: "Analog and Digital Electronics Lab - II",
        description: "Advanced experiments in analog and digital electronics.",
        college: "IIT Roorkee",
    },
    {
        name: "Digital Electronics Lab-I",
        description: "Fundamental experiments in digital electronics.",
        college: "IIT Roorkee",
    },
    {
        name: "Electrical Machines Lab",
        description: "Virtual experiments on various electrical machines and their operations.",
        college: "IIT Roorkee",
    },
    {
        name: "Electrical Measurements Lab",
        description: "Study of electrical measurement techniques and instruments.",
        college: "IIT Roorkee",
    },
    {
        name: "Microwave Engineering Lab",
        description: "Experiments related to microwave engineering and applications.",
        college: "IIT Roorkee",
    },
    {
        name: "Optical Communication Lab",
        description: "Study of optical communication systems and components.",
        college: "IIT Roorkee",
    },
    {
        name: "Power Electronics Lab",
        description: "Experiments focusing on power electronic devices and converters.",
        college: "IIT Roorkee",
    },
    {
        name: "Surveying Lab",
        description: "Virtual experiments in land surveying and measurement techniques.",
        college: "IIT Roorkee",
    },
    {
        name: "Structural Analysis II Virtual Lab",
        description: "Advanced experiments in structural analysis.",
        college: "IIT Roorkee",
    },
    {
        name: "Transportation Engineering Lab",
        description: "Study of transportation systems and engineering principles.",
        college: "IIT Roorkee",
    },
    {
        name: "Waves and Vibration Transmission in Periodic Structures Lab",
        description: "Experiments on wave propagation and vibration in periodic structures.",
        college: "IIT Roorkee",
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
