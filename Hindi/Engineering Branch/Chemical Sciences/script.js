

const topics = [
  {
    name: "सर्कुलर डाइक्रोइज्म स्पेक्ट्रोस्कोपी लैब",
    description: "सर्कुलर डाइक्रोइज़्म (सीडी) स्पेक्ट्रोस्कोपी का उपयोग करके प्रयोग और विश्लेषण।",
    college: "आईआईआईटी हैदराबाद"
  },
  {
    name: "कोलाइड और सतह रसायन विज्ञान प्रयोगशाला",
    description: "कोलाइड्स, सतह रसायन विज्ञान और संबंधित घटनाओं का अध्ययन।",
    college: "आईआईआईटी हैदराबाद"
  },
  {
    name: "अकार्बनिक रसायन विज्ञान वर्चुअल लैब",
    description: "अकार्बनिक रसायन विज्ञान में आभासी प्रयोग और सिमुलेशन।",
    college: "अमृता विश्वविद्यापीठम्"
  },
  {
    name: "आणविक अवशोषण स्पेक्ट्रोस्कोपी लैब",
    description: "आणविक अवशोषण स्पेक्ट्रोस्कोपी तकनीकों पर प्रयोग।",
    college: "आईआईआईटी हैदराबाद"
  },
  {
    name: "आणविक प्रतिदीप्ति स्पेक्ट्रोस्कोपी लैब",
    description: "आणविक प्रतिदीप्ति स्पेक्ट्रोस्कोपी और अनुप्रयोगों का अध्ययन।",
    college: "आईआईआईटी हैदराबाद"
  },
  {
    name: "फिजिकल केमिस्ट्री (अमृता) लैब",
    description: "अमृता पाठ्यक्रम से संबंधित भौतिक रसायन विज्ञान में प्रयोग।",
    college: "अमृता विश्वविद्यापीठम्"
  },
  {
    name: "फिजिकल केमिस्ट्री (IIITH) लैब",
    description: "आईआईआईटी हैदराबाद पाठ्यक्रम के लिए विशिष्ट भौतिक रसायन विज्ञान में प्रयोग।",
    college: "आईआईआईटी हैदराबाद"
  },
  {
    name: "क्वांटम केमिस्ट्री लैब",
    description: "क्वांटम रसायन विज्ञान सिद्धांतों और गणनाओं का व्यावहारिक अनुप्रयोग।",
    college: "आईआईआईटी हैदराबाद"
  }
];


const cseCardsContainer = document.getElementById("cseCards");

topics.forEach(topic => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
      <h2>${topic.name}</h2>
      <p>${topic.description}</p>
      <p class="college"><strong>कॉलेज:</strong> ${topic.college}</p>
      <div class="buttons">
          <button class="btn white-btn">धार्मिक आस्था</button>
          <button class="btn orange-btn">सिलेबस मैपिंग</button>
      </div>
  `;

  cseCardsContainer.appendChild(card);
});
