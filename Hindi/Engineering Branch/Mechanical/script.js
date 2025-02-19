

const topics = [
  {
    name: "3D Printing Virtual Simulation Lab",
    description: "Virtual simulations and hands-on experience with 3D printing technologies.",
    college: "DAYALBAGH"
  },
  {
    name: "Dynamics of Machine Lab",
    description: "Study of machine dynamics, vibrations, and mechanisms through experiments.",
    college: "NITK SURATHKAL"
  },
  {
    name: "Electron Microscopy for Beginners",
    description: "Introduction to electron microscopy techniques and applications.",
    college: "IIT KANPUR"
  },
  {
    name: "Engineering Graphics Lab (New)",
    description: "Fundamentals of engineering drawing, projections, and graphical communication.",
    college: "NITK SURATHKAL"
  },
  {
    name: "FAB Lab",
    description: "Hands-on experience with digital fabrication tools and technologies.",
    college: "COEP Technological University Pune"
  },
  {
    name: "Instrumentation and Control Lab (New)",
    description: "Principles of instrumentation, measurement, and control systems.",
    college: "COEP Technological University Pune"
  },
  {
    name: "Kinematics and Dynamics of Mechanisms Lab",
    description: "Analysis of mechanisms, linkages, and their motion.",
    college: "IIT KHARAGPUR"
  },
  {
    name: "Machine Dynamics & Mechanical Vibration Lab",
    description: "Study of machine dynamics and vibration analysis.",
    college: "NITK SURATHKAL"
  },
  {
    name: "Material Response to Microstructural, Mechanical, Thermal and Biological Stimuli Lab",
    description: "Investigation of material behavior under various stimuli.",
    college: "IIT KANPUR"
  },
  {
    name: "Mechanics of Machine Lab I",
    description: "Basic principles of mechanics applied to machines and mechanisms.",
    college: "NITK SURATHKAL"
  },
  {
    name: "Mechanics of Machines Lab 2",
    description: "Advanced experiments in mechanics of machines and vibration analysis.",
    college: "NITK SURATHKAL"
  },
  {
    name: "Mechanisms and Robotics Lab",
    description: "Study of mechanisms, robotics, and their applications.",
    college: "IIT KHARAGPUR"
  },
  {
    name: "Metal Forming Virtual Simulation Lab",
    description: "Virtual simulations of metal forming processes and techniques.",
    college: "DAYALBAGH"
  },
  {
    name: "Micromachining Lab",
    description: "Micromachining techniques, processes, and applications.",
    college: "COEP Technological University Pune"
  },
  {
    name: "Mine Automation & Virtual Reality",
    description: "Applications of automation and virtual reality in mining engineering.",
    college: "IIT KHARAGPUR"
  },
  {
    name: "Model Based Fault Detection Lab",
    description: "Fault detection and diagnosis using model-based techniques.",
    college: "IIT KHARAGPUR"
  },
  {
    name: "Sensors and Instrumentation Lab (New)",
    description: "Experiments with various sensors and instrumentation systems.",
    college: "COEP Technological University Pune"
  },
  {
    name: "Vibration and Acoustics Lab",
    description: "Study of vibrations, acoustics, and their measurement.",
    college: "COEP Technological University Pune"
  }
];


const cseCardsContainer = document.getElementById("cseCards");

topics.forEach(topic => {
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
