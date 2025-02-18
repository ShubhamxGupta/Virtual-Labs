const topics = [
    { 
        name: "Transportation Engineering Lab", 
        description: "Hands-on experiments in AI, covering basic algorithms and models.",
        college: "NITK Surathkal"
    },
    { 
        name: "Concrete Structures Lab", 
        description: "Advanced AI experiments, including deep learning and reinforcement learning.",
        college: "IIT Delhi"
    },
    { 
        name: "Engineering Geology Lab", 
        description: "Study of artificial neurons, backpropagation, and neural network architectures.",
        college: "COEP Technological University Pune"
    },
    { 
        name: "Environmental Engineering Lab - I", 
        description: "Exploring NLP techniques, language modeling, and syntactic parsing.",
        college: "NITK Surathkal"
    },
    { 
        name: "Environmental Engineering Lab - II", 
        description: "Experiments on processor design, memory hierarchy, and instruction execution.",
        college: "NITK Surathkal"
    },
    { 
        name: "Fluid Machinery Lab", 
        description: "Practical exercises on digital logic, microprocessors, and hardware components.",
        college: "NITK Surathkal"
    },
    { 
        name: "Fluid Mechanics Lab", 
        description: "Programming exercises to build problem-solving and algorithmic skills.",
        college: "NITK Surathkal"
    },
    { 
        name: "Geotechnical Engineering Lab", 
        description: "Implementation of encryption, decryption, and secure communication protocols.",
        college: "NITK Surathkal"
    },
    { 
        name: "Hydraulics and Fluid Mechanics Lab", 
        description: "Implementation of fundamental data structures like arrays, stacks, and queues.",
        college: "IIT Hyderabad"
    },
    { 
        name: "Maine Structure Lab", 
        description: "Advanced data structures such as trees, graphs, and hash tables.",
        college: "NITK Surathkal"
    },
    { 
        name: "Mining Geology Lab", 
        description: "Comprehensive exercises covering basic and advanced data structures.",
        college: "NITK Surathkal"
    },
    { 
        name: "Smart Structures and Dynamics Lab", 
        description: "Experiments on image filtering, edge detection, and pattern recognition.",
        college: "IIT Delhi"
    },
    { 
        name: "Soil Mechanics Lab", 
        description: "Hands-on NLP techniques including tokenization, sentiment analysis, and text generation.",
        college: "IIT Hyderabad"
    },
    { 
        name: "Strength of Materials Lab", 
        description: "Exercises covering Python programming, data handling, and scripting.",
        college: "NITK Surathkal"
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
