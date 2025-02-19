
const topics = [
    { 
        name: "Advanced Mechanics Virtual Lab", 
        description: "Conduct experiments and learn advanced dynamics concepts in mechanical systems virtually.",
        college: "Amrita Vishwa Vidyapeeth"
    },
    { 
        name: "Basics of Physics", 
        description: " Interactive simulations and experiments to help students grasp fundamental physics concepts effectively.",
        college: "IIT Kanpur"
    },
    { 
        name: "Digital Anthropology Lab", 
        description: "Intersection of technology and human behavior through digital tools, data analysis, and virtual simulations.",
        college: "IIT Guwahati"
    },
    { 
        name: "Electricity and Magnetism Virtual Lab", 
        description: "Interactive simulations and experiments to enhance understanding of electromagnetic principles.",
        college: "Amrita Vishwa Vidyapeetham"
    },
    { 
        name: "Heat and Thermodynamics Lab", 
        description: "Interactive simulations and experiments to explore thermal physics and energy transfer concepts.",
        college: "Amrita Vishwa Vidyapeetham"
    },
    { 
        name: "Lasser Optics Virtual Lab", 
        description: "Interactive simulations and experiments to study laser principles, optics, and photon behavior.",
        college: "Amrita Vishwa Vidyapeetham"
    },
    { 
        name: "Mechanical Metallurgy Lab(New)", 
        description: "",
        college: "IIT Kanpur"
    },
    { 
        name: "Mechanics Virtual Lab(Pilot)", 
        description: "Cutting-edge facility dedicated to advancing research and education in the field of mechanical behavior of materials.",
        college: "Amrita Vishwa Vidyapeetham"
    },
    { 
        name: "Optics Virtual Lab", 
        description: "Simulated environment for students to explore and experiment with optical phenomena and concepts remotely.",
        college: "Amrita Vishwa Vidyapeetham"
    },
    { 
        name: "Probability and Statistics Lab(New)", 
        description: "Provides students with resources and tools to explore and apply statistical concepts and methods through computational and practical exercises.",
        college: "IIT Delhi"
    },
    { 
        name: "Queuing Theory and Modelling Lab(New)", 
        description: "Provides a platform for students to study and simulate queuing systems, analyzing their performance and optimizing their design.",
        college: "IIT Delhi"
    },
    { 
        name: "Virtual Astrophysics Lab", 
        description: " Interactive online platform for simulating and exploring astrophysical phenomena.",
        college: "IIT Kanpur"
    },
    { 
        name: "Virtual English and Communication Lab", 
        description: "Online platform designed to enhance language and communication skills through interactive learning modules.",
        college: "IIT Guwahati"
    },
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
