const topics = [
    {
        name: "Bioreactor Modeling and Simulation Lab",
        description:
            "Hands-on experiments in AI, covering basic algorithms and models.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Smart Structures and Dynamics Lab",
        description:
            "Advanced AI experiments, including deep learning and reinforcement learning.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Concrete Structures Lab",
        description:
            "Study of artificial neurons, backpropagation, and neural network architectures.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Waves and Vibration Transmission in Periodic Structures Lab",
        description:
            "Exploring NLP techniques, language modeling, and syntactic parsing.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Structural Analysis II Virtual Lab (New)",
        description:
            "Experiments on processor design, memory hierarchy, and instruction execution.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Queuing Theory and Modelling Lab (New)",
        description:
            "Practical exercises on digital logic, microprocessors, and hardware components.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Probability and Statistics Lab (New)",
        description:
            "Programming exercises to build problem-solving and algorithmic skills.",
        college: "VIT Chennai",
    },
    {
        name: "Power Electronics I Virtual Lab (New)",
        description:
            "Implementation of encryption, decryption, and secure communication protocols.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Power Electronics II Virtual Lab (New)",
        description:
            "Implementation of fundamental data structures like arrays, stacks, and queues.",
        college: "IIIT Hyderabad",
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
