const topics = [
    {
        name: "Single Board Heater System Lab",
        description: "Experiments focusing on the dynamics and control of a single board heater system.",
        college: "IIT Bombay",
    },
    {
        name: "Digital Applications Lab",
        description: "Study of digital systems and their applications through virtual experiments.",
        college: "IIT Bombay",
    },
    {
        name: "Digital Logic Design Lab (Logic Gates & Mux-Demux)",
        description: "Exploration of digital logic design, including logic gates and multiplexers/demultiplexers.",
        college: "IIT Bombay",
    },
    {
        name: "Digital Electronic Circuits Lab",
        description: "Study and simulation of digital electronic circuits and systems.",
        college: "IIT Bombay",
    },
    {
        name: "Computer Organization and Architecture Lab",
        description: "Experiments focusing on the organization and architecture of computer systems.",
        college: "IIT Bombay",
    },
    {
        name: "Real Time Embedded Systems Lab",
        description: "Study of real-time embedded systems and their applications.",
        college: "IIT Bombay",
    },
    {
        name: "Basic Electronics Lab",
        description: "Fundamental experiments in electronics, covering basic components and circuits.",
        college: "IIT Bombay",
    },
    {
        name: "Kinematics and Dynamics of Mechanisms Lab",
        description: "Analysis of motion and forces in mechanical systems through virtual experiments.",
        college: "IIT Bombay",
    },
    {
        name: "Soft Computing Tools in Engineering Lab",
        description: "Application of soft computing techniques in solving engineering problems.",
        college: "IIT Bombay",
    },
    {
        name: "Chemical Process Dynamics Laboratory",
        description: "Study of dynamic behavior and control of chemical processes.",
        college: "IIT Bombay",
    },
    {
        name: "Digital Signal Processing Virtual Laboratory",
        description: "Experiments on processing digital signals and their applications.",
        college: "IIT Bombay",
    },
    {
        name: "Microelectronics and VLSI Engineering Laboratory",
        description: "Study of microelectronic devices and VLSI design principles.",
        college: "IIT Bombay",
    },
    {
        name: "Software Engineering Lab",
        description: "Experiments covering software development methodologies and practices.",
        college: "IIT Bombay",
    },
    {
        name: "Analog Electronics Circuits Virtual Lab",
        description: "Study and simulation of analog electronic circuits.",
        college: "IIT Bombay",
    },
    {
        name: "Digital Applications Lab",
        description: "Experiments focusing on digital applications and system design.",
        college: "IIT Bombay",
    },
    {
        name: "Sensors Modeling & Simulation Lab",
        description: "Modeling and simulation of various sensors and their applications.",
        college: "IIT Bombay",
    },
    {
        name: "Metal Forming Virtual Simulation Lab",
        description: "Simulation-based experiments in metal forming processes.",
        college: "IIT Bombay",
    },
    {
        name: "Speech Signal Processing Lab",
        description: "Experiments on processing and analysis of speech signals.",
        college: "IIT Bombay",
    },
    {
        name: "Virtual Power Lab",
        description: "Study of power systems and their components through virtual experiments.",
        college: "IIT Bombay",
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
