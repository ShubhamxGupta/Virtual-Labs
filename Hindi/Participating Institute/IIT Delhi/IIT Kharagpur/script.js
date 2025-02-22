const topics = [
    {
        name: "Mine Automation & Virtual Reality",
        description: "Simulation-based experiments in mine automation and virtual reality applications.",
        college: "IIT Kharagpur",
    },
    {
        name: "Virtual Laboratory For Simulation and Gaming",
        description: "Experiments focusing on simulation techniques and gaming technologies.",
        college: "IIT Kharagpur",
    },
    {
        name: "Mechanisms and Robotics Lab",
        description: "Study of mechanical systems and robotic mechanisms through virtual experiments.",
        college: "IIT Kharagpur",
    },
    {
        name: "Virtual High Voltage Lab",
        description: "Experiments related to high voltage engineering and insulation testing.",
        college: "IIT Kharagpur",
    },
    {
        name: "Model Based Fault Detection Lab",
        description: "Techniques and experiments for detecting faults in engineering systems using modeling approaches.",
        college: "IIT Kharagpur",
    },
    {
        name: "Analog Signals, Network and Measurement Lab",
        description: "Experiments on analog signal processing, network analysis, and measurement techniques.",
        college: "IIT Kharagpur",
    },
    {
        name: "Digital Electronic Circuits Lab",
        description: "Study and simulation of digital electronic circuits and systems.",
        college: "IIT Kharagpur",
    },
    {
        name: "Computer Organisation and Architecture Lab",
        description: "Experiments focusing on the organization and architecture of computer systems.",
        college: "IIT Kharagpur",
    },
    {
        name: "Real Time Embedded Systems Lab",
        description: "Study of real-time embedded systems and their applications.",
        college: "IIT Kharagpur",
    },
    {
        name: "Basic Electronics Lab",
        description: "Fundamental experiments in electronics, covering basic components and circuits.",
        college: "IIT Kharagpur",
    },
    {
        name: "Kinematics and Dynamics of Mechanisms Lab",
        description: "Analysis of motion and forces in mechanical systems through virtual experiments.",
        college: "IIT Kharagpur",
    },
    {
        name: "Soft Computing Tools in Engineering Lab",
        description: "Application of soft computing techniques in solving engineering problems.",
        college: "IIT Kharagpur",
    },
    {
        name: "Chemical Process Dynamics Laboratory",
        description: "Study of dynamic behavior and control of chemical processes.",
        college: "IIT Kharagpur",
    },
    {
        name: "Digital Signal Processing Virtual Laboratory",
        description: "Experiments on processing digital signals and their applications.",
        college: "IIT Kharagpur",
    },
    {
        name: "Microelectronics and VLSI Engineering Laboratory",
        description: "Study of microelectronic devices and VLSI design principles.",
        college: "IIT Kharagpur",
    },
    {
        name: "Software Engineering Lab",
        description: "Experiments covering software development methodologies and practices.",
        college: "IIT Kharagpur",
    },
    {
        name: "Analog Electronics Circuits Virtual Lab",
        description: "Study and simulation of analog electronic circuits.",
        college: "IIT Kharagpur",
    },
    {
        name: "Digital Applications Lab",
        description: "Experiments focusing on digital applications and system design.",
        college: "IIT Kharagpur",
    },
    {
        name: "Sensors Modeling & Simulation Lab",
        description: "Modeling and simulation of various sensors and their applications.",
        college: "IIT Kharagpur",
    },
    {
        name: "Metal Forming Virtual Simulation Lab",
        description: "Simulation-based experiments in metal forming processes.",
        college: "IIT Kharagpur",
    },
    {
        name: "Speech Signal Processing Lab",
        description: "Experiments on processing and analysis of speech signals.",
        college: "IIT Kharagpur",
    },
    {
        name: "Virtual Power Lab",
        description: "Study of power systems and their components through virtual experiments.",
        college: "IIT Kharagpur",
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
