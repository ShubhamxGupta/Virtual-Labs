

const topics = [
  {
    name: "Circular Dichroism Spectroscopy Lab",
    description: "Experiments and analysis using Circular Dichroism (CD) spectroscopy.",
    college: "IIIT HYDERABAD"
  },
  {
    name: "Colloid and Surface Chemistry Lab",
    description: "Study of colloids, surface chemistry, and related phenomena.",
    college: "IIIT HYDERABAD"
  },
  {
    name: "Inorganic Chemistry Virtual Lab",
    description: "Virtual experiments and simulations in inorganic chemistry.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Molecular Absorption Spectroscopy Lab",
    description: "Experiments on molecular absorption spectroscopy techniques.",
    college: "IIIT HYDERABAD"
  },
  {
    name: "Molecular Fluorescence Spectroscopy Lab",
    description: "Study of molecular fluorescence spectroscopy and applications.",
    college: "IIIT HYDERABAD"
  },
  {
    name: "Physical Chemistry (Amrita) Lab",
    description: "Experiments in physical chemistry relevant to the Amrita curriculum.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Physical Chemistry (IIITH) Lab",
    description: "Experiments in physical chemistry specific to the IIIT Hyderabad curriculum.",
    college: "IIIT HYDERABAD"
  },
  {
    name: "Quantum Chemistry Lab",
    description: "Practical applications of quantum chemistry principles and calculations.",
    college: "IIIT HYDERABAD"
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
