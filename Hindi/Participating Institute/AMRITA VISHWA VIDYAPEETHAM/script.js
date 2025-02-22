const topics = [
    {
        name: "Bioinformatics Virtual Lab I",
        description: "Experiments in Bioinformatics using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Bioinformatics Virtual Lab II",
        description: "Advanced experiments in Bioinformatics using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Bioinformatics Virtual Lab III",
        description: "Specialized experiments in Bioinformatics using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Systems Biology Virtual Lab",
        description: "Experiments in Systems Biology using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Computer-Aided Drug Design Virtual Lab",
        description: "Experiments in Computer-Aided Drug Design using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Biological Image Processing Lab",
        description: "Experiments in Biological Image Processing.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Neurophysiology Lab",
        description: "Experiments in Neurophysiology.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Neuron Simulation Lab",
        description: "Experiments in Neuron Simulation.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Biochemistry Virtual Lab I",
        description: "Experiments in Biochemistry using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Population Ecology I",
        description: "Experiments in Population Ecology.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Population Ecology II",
        description: "Advanced experiments in Population Ecology.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Immunology Virtual Lab II",
        description: "Experiments in Immunology using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Microbiology Virtual Lab I",
        description: "Experiments in Microbiology using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Microbiology Virtual Lab II",
        description: "Advanced experiments in Microbiology using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
    },
    {
        name: "Molecular biology Virtual Lab I",
        description: "Experiments in Molecular Biology using virtual lab environment.",
        college: "AMRITA VISHWA VIDYAPEETHAM",
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
