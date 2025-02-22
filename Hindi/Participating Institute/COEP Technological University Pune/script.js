const topics = [
    {
        name: "Sensors Modeling & Simulation Lab",
        description: "Experiments in Sensors Modeling & Simulation Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Industrial Automation Lab",
        description: "Experiments in Industrial Automation Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Electrical Machines (COEP) Lab",
        description: "Experiments in Electrical Machines (COEP) Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "PLC Lab",
        description: "Experiments in PLC Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Vibration and Acoustics Lab",
        description: "Experiments in Vibration and Acoustics Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Micromachining Lab",
        description: "Experiments in Micromachining Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "FAB Lab",
        description: "Experiments in FAB Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Biomedical and Signal Processing Lab",
        description: "Experiments in Biomedical and Signal Processing Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Hybrid Electronics Lab",
        description: "Experiments in Hybrid Electronics Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component for Current and Pneumatic Converters Lab",
        description: "Experiments in Process Loop Component for Current and Pneumatic Converters Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component for High Low Selector and Alarm Annunciators Lab",
        description: "Experiments in Process Loop Component for High Low Selector and Alarm Annunciators Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component for Transmitter and Tank Applications Lab",
        description: "Experiments in Process Loop Component for Transmitter and Tank Applications Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component and Control Valve for Various Applications Lab",
        description: "Experiments in Process Loop Component and Control Valve for Various Applications Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Basics of Pneumatic Components Lab",
        description: "Experiments in Basics of Pneumatic Components Lab.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Engineering Geology Lab (New)",
        description: "Experiments in Engineering Geology Lab (New).",
        college: "COEP Technological University Pune",
    },
    {
        name: "Instrumentation and Control Lab (New)",
        description: "Experiments in Instrumentation and Control Lab (New).",
        college: "COEP Technological University Pune",
    },
    {
        name: "Sensors and Instrumentation Lab (New)",
        description: "Experiments in Sensors and Instrumentation Lab (New).",
        college: "COEP Technological University Pune",
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
