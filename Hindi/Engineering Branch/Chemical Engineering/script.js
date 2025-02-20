

const topics = [
  {
    name: "केमिकल इंजीनियरिंग लैब",
    description: "विभिन्न रासायनिक इंजीनियरिंग सिद्धांतों में प्रयोग और विश्लेषण।",
    college: "आईआईटी बॉम्बे"
  },
  {
    name: "रासायनिक प्रक्रिया गतिशीलता प्रयोगशाला",
    description: "रासायनिक प्रक्रियाओं के गतिशील व्यवहार और उनके नियंत्रण का अध्ययन।",
    college: "आईआईटी खड़गपुर"
  },
  {
    name: "प्रक्रिया नियंत्रण, प्रतिक्रिया इंजीनियरिंग और इकाई संचालन प्रयोगशाला",
    description: "प्रक्रिया नियंत्रण, प्रतिक्रिया इंजीनियरिंग और इकाई संचालन के व्यावहारिक अनुप्रयोग।",
    college: "एनआईटीके सूरथकल"
  },
  {
    name: "वर्चुअल मास ट्रांसफर लैब",
    description: "बड़े पैमाने पर स्थानांतरण अवधारणाओं को समझने के लिए आभासी प्रयोग और सिमुलेशन।",
    college: " आईआईटी गुवाहाटी"
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
