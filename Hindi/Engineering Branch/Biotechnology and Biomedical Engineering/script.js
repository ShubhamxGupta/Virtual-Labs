

const topics = [
  {
    name: "Bio-Medical Signal & Image Processing Lab",
    description: "Processing and analysis of biomedical signals and images.",
    college: "IIT ROORKEE"
  },
  {
    name: "Biochemistry Virtual Lab I",
    description: "Interactive virtual experiments and simulations in biochemistry.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Bioinformatics and Computational Biology Virtual Lab (New)",
    description: "Virtual lab experiments on bioinformatics and computational biology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Bioinformatics and Data Science in Biotechnology Lab",
    description: "Bioinformatics and data science applications in biotechnology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Bioinformatics Virtual Lab I",
    description: "Introductory virtual lab exercises in bioinformatics.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Bioinformatics Virtual Lab II",
    description: "Advanced virtual lab experiments in bioinformatics.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Bioinformatics Virtual Lab III",
    description: "Comprehensive virtual lab modules for bioinformatics learning.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Biological Image Processing Lab",
    description: "Processing and analysis of biological images using computational techniques.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Biomedical and Signal Processing Lab",
    description: "Biomedical signal processing and analysis techniques.",
    college: "COEP Technological University Pune"
  },
  {
    name: "Biomedical Instrumentation Lab",
    description: "Experiments with biomedical instrumentation and measurement systems.",
    college: "IIT ROORKEE"
  },
  {
    name: "Bioreactor Modeling and Simulation Lab",
    description: "Modeling and simulation of bioreactor systems and processes.",
    college: "IIT DELHI"
  },
  {
    name: "Biosensor Virtual Lab (New)",
    description: "Virtual experiments and simulations related to biosensors.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Biosignal Processing and Analysis Lab",
    description: "Analysis and processing of biosignals for various applications.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Cell Biology Virtual Lab I",
    description: "Introductory virtual experiments and simulations in cell biology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Cell Biology Virtual Lab II",
    description: "Advanced virtual lab modules and experiments in cell biology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Computer-Aided Drug Design Virtual Lab",
    description: "Virtual lab exercises in computer-aided drug design and discovery.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Immunology Virtual Lab I",
    description: "Basic concepts and virtual experiments in immunology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Immunology Virtual Lab II",
    description: "Advanced virtual lab modules and simulations in immunology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Microbiology Virtual Lab I",
    description: "Fundamental virtual lab experiments and techniques in microbiology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Microbiology Virtual Lab II",
    description: "Advanced virtual lab modules and experiments in microbiology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Molecular biology Virtual Lab I",
    description: "Introductory virtual lab experiments in molecular biology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Molecular Biology Virtual Lab II",
    description: "Advanced virtual lab modules and simulations in molecular biology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Neuron Simulation Lab",
    description: "Simulations and modeling of neurons and neural networks.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Neurophysiology Lab",
    description: "Experiments and techniques in neurophysiology and neural function.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Population Ecology I",
    description: "Basic principles and concepts of population ecology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Population Ecology II",
    description: "Advanced topics and research in population ecology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
  },
  {
    name: "Systems Biology Virtual Lab",
    description: "Virtual lab experiments and simulations in systems biology.",
    college: "AMRITA VISHWA VIDYAPEETHAM"
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
