const topics = [
    {
        name: "सूक्ष्म-संरचनात्मक, यांत्रिक, तापीय और जैविक उत्तेजनाओं के प्रति सामग्री प्रतिक्रिया प्रयोगशाला",
        description: "विभिन्न उत्तेजनाओं के तहत सामग्री के व्यवहार का अध्ययन।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "वर्चुअल एस्ट्रोफिजिक्स लैब",
        description: "एस्ट्रोफिजिक्स में सिमुलेशन और प्रयोग।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "अल्ट्राफास्ट लेजर स्पेक्ट्रोस्कोपी लैब",
        description: "अल्ट्राफास्ट लेजर तकनीकों से जुड़े प्रयोग।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "शुरुआती के लिए इलेक्ट्रॉन माइक्रोस्कोपी",
        description: "इलेक्ट्रॉन माइक्रोस्कोपी तकनीकों का परिचय।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "पायथन प्रोग्रामिंग लैब",
        description: "पायथन प्रोग्रामिंग की मूलभूत अवधारणाओं पर अभ्यास।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "भौतिकी की मूल बातें",
        description: "मूलभूत भौतिकी प्रयोग और सिमुलेशन।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "यांत्रिक धातुकर्म प्रयोगशाला (नई)",
        description: "धातुओं के यांत्रिक व्यवहार पर अध्ययन।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "यांत्रिकी वर्चुअल लैब (पायलट)",
        description: "यांत्रिकी में वर्चुअल प्रयोग।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "डिजिटल मानवशास्त्र लैब",
        description: "डिजिटल सिमुलेशन के माध्यम से मानवशास्त्रीय अवधारणाओं की खोज।",
        college: "आईआईटी कानपुर",
    },
    {
        name: "यंत्र विज्ञान प्रयोगशाला I",
        description: "मशीनों के यांत्रिकी पर प्रयोग।",
        college: "आईआईटी कानपुर",
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
            <p class="college"><strong>महाविद्यालय:</strong> ${topic.college}</p>
        </div>
        <div class="buttons">
            <button class="btn white-btn">संदर्भ पुस्तकें</button>
            <button class="btn orange-btn">पाठ्यक्रम मैपिंग</button>
        </div>
    `;

    cseCardsContainer.appendChild(card);
});
