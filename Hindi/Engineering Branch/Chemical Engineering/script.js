

const topics = [
  {
    name: "Chemical Engineering Lab",
    description: "Experiments and analysis in various chemical engineering principles.",
    college: "IIT BOMBAY"
  },
  {
    name: "Chemical Process Dynamics Laboratory",
    description: "Study of the dynamic behavior of chemical processes and their control.",
    college: "IIT KHARAGPUR"
  },
  {
    name: "Process Control, Reaction Engineering and Unit Operations Lab",
    description: "Practical applications of process control, reaction engineering, and unit operations.",
    college: "NITK SURATHKAL"
  },
  {
    name: "Virtual Mass Transfer Lab",
    description: "Virtual experiments and simulations for understanding mass transfer concepts.",
    college: "IIT GUWAHATI"
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
