const topics = [
    {
        name: "Artificial Intelligence I Lab",
        description:
            "Hands-on experiments in AI, covering basic algorithms and models.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Artificial Intelligence II Lab",
        description:
            "Advanced AI experiments, including deep learning and reinforcement learning.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Artificial Neural Networks",
        description:
            "Study of artificial neurons, backpropagation, and neural network architectures.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Computational Linguistics Lab",
        description:
            "Exploring NLP techniques, language modeling, and syntactic parsing.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Computer Organization and Architecture Lab",
        description:
            "Experiments on processor design, memory hierarchy, and instruction execution.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Computer Organization Lab",
        description:
            "Practical exercises on digital logic, microprocessors, and hardware components.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Computer Programming Lab",
        description:
            "Programming exercises to build problem-solving and algorithmic skills.",
        college: "VIT Chennai",
    },
    {
        name: "Cryptography Lab",
        description:
            "Implementation of encryption, decryption, and secure communication protocols.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Data Structures - I Lab",
        description:
            "Implementation of fundamental data structures like arrays, stacks, and queues.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Data Structures - II Lab",
        description:
            "Advanced data structures such as trees, graphs, and hash tables.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Data Structures Lab",
        description:
            "Comprehensive exercises covering basic and advanced data structures.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Image Processing Lab",
        description:
            "Experiments on image filtering, edge detection, and pattern recognition.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Natural Language Processing Lab",
        description:
            "Hands-on NLP techniques including tokenization, sentiment analysis, and text generation.",
        college: "IIIT Hyderabad",
    },
    {
        name: "Python Programming Lab",
        description:
            "Exercises covering Python programming, data handling, and scripting.",
        college: "IIIT Hyderabad",
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
