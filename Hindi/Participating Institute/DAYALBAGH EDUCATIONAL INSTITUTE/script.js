const topics = [
    {
        name: "वर्चुअल पावर लैब",
        description: "वर्चुअल पावर लैब में प्रयोग।",
        college: "दयालबाग शैक्षिक संस्थान",
    },
    {
        name: "मेटल फॉर्मिंग वर्चुअल सिमुलेशन लैब",
        description: "मेटल फॉर्मिंग वर्चुअल सिमुलेशन लैब में प्रयोग।",
        college: "दयालबाग शैक्षिक संस्थान",
    },
    {
        name: "3डी प्रिंटिंग वर्चुअल सिमुलेशन लैब",
        description: "3डी प्रिंटिंग वर्चुअल सिमुलेशन लैब में प्रयोग।",
        college: "दयालबाग शैक्षिक संस्थान",
    },
    {
        name: "नियंत्रण इंजीनियरिंग लैब (नया)",
        description: "नियंत्रण इंजीनियरिंग लैब (नया) में प्रयोग।",
        college: "दयालबाग शैक्षिक संस्थान",
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
            <p class="college"><strong>कॉलेज:</strong> ${topic.college}</p>
        </div>
        <div class="buttons">
            <button class="btn white-btn">संदर्भ पुस्तकें</button>
            <button class="btn orange-btn">पाठ्यक्रम मैपिंग</button>
        </div>
    `;

    cseCardsContainer.appendChild(card);
});
