const topics = [
    {
        name: "Analog Signals, Network and Measurement Virtual Laboratory",
        description:
            "Experiments related to analog signals, network analysis, and measurement techniques.",
        college: "IIT Kharagpur",
        href: "Labs/Lab2-Electrical/index.html",
    },
    {
        name: "Basics of Pneumatic Components Lab",
        description:
            "Fundamentals of pneumatic systems and components, including hands-on experiments.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Control Engineering Lab (New)",
        description:
            "Practical experience with control systems, feedback mechanisms, and stability analysis.",
        college: "DAYALBAGH",
    },
    {
        name: "Electrical Machines (COEP) Lab",
        description:
            "Experiments on various electrical machines, including their operation and characteristics.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Electrical Machines Lab",
        description:
            "Hands-on experiments with electrical machines, transformers, and related equipment.",
        college: "IIT ROORKEE",
    },
    {
        name: "Electrical Measurements Lab (New)",
        description:
            "Modern techniques for electrical measurements, instrumentation, and data analysis.",
        college: "IIT ROORKEE",
    },
    {
        name: "Industrial Automation Lab",
        description:
            "Practical training in industrial automation systems, PLCs, and control processes.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Industrial Electric Drives Lab",
        description:
            "Experiments on electric drives, motor control, and power electronics applications.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Microwave Engineering Lab (New)",
        description:
            "Microwave devices, circuits, measurements, and applications.",
        college: "IIT ROORKEE",
    },
    {
        name: "Optical Communication Lab (New)",
        description:
            "Optical fiber communication systems, components, and experiments.",
        college: "IIT ROORKEE",
    },
    {
        name: "PLC Lab",
        description:
            "Programmable Logic Controllers (PLCs) and their applications in automation.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Power Electronics | Virtual Lab (New)",
        description:
            "Virtual experiments on power electronic circuits and devices.",
        college: "IIT DELHI",
    },
    {
        name: "Power Electronics II Virtual Lab (New)",
        description:
            "Advanced virtual experiments in power electronics and drive systems.",
        college: "IIT DELHI",
    },
    {
        name: "Power Electronics Lab (New)",
        description:
            "Experiments on power electronics circuits, converters, and applications.",
        college: "IIT ROORKEE",
    },
    {
        name: "Process Loop Component and Control Valve for Various Applications Lab",
        description:
            "Study of process control components, valves, and their applications.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component for Current and Pneumatic Converters Lab",
        description:
            "Experiments on current and pneumatic converters in process control systems.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component for High Low Selector and Alarm Annunciators Lab",
        description:
            "Understanding high/low selectors and alarm annunciators in process control.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Process Loop Component for Transmitter and Tank Applications Lab",
        description:
            "Transmitters and tank level control in process applications.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Real Time Embedded Systems Lab",
        description:
            "Real-time embedded systems programming, hardware interfacing, and applications.",
        college: "IIT KHARAGPUR",
    },
    {
        name: "Sensors Modeling & Simulation Lab",
        description:
            "Sensor modeling, simulation, and data analysis for various applications.",
        college: "COEP Technological University Pune",
    },
    {
        name: "Single Board Heater System Lab",
        description:
            "Experiments with single-board heater systems and temperature control.",
        college: "IIT BOMBAY",
    },
    {
        name: "Substation Automation Lab",
        description:
            "Substation automation systems, communication protocols, and control techniques.",
        college: "NITK SURATHKAL",
    },
    {
        name: "Virtual High Voltage Lab",
        description:
            "Virtual experiments on high voltage phenomena, equipment, and safety.",
        college: "IIT KHARAGPUR",
    },
    {
        name: "Virtual Laboratory For Simulation and Gaming",
        description:
            "Simulation and game development using virtual laboratory environments.",
        college: "IIT KHARAGPUR",
    },
    {
        name: "Virtual Power Lab",
        description:
            "Virtual experiments on power systems, power flow, and stability analysis.",
        college: "DAYALBAGH",
    },
];

const cseCardsContainer = document.getElementById("cseCards");

topics.forEach((topic) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <a href="${topic.href}" target="_blank">
      <h2>${topic.name}</h2>
      <p>${topic.description}</p>
      <p class="college"><strong>College:</strong> ${topic.college}</p>
      <div class="buttons">
          <button class="btn white-btn">Reference Books</button>
          <button class="btn orange-btn">Syllabus Mapping</button>
      </div>
      </a>
  `;

    cseCardsContainer.appendChild(card);
});
