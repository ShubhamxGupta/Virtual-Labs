// Sample recommended courses based on usage
const recommendedCourses = [
    {
        title: "वर्चुअल लैब्स का परिचय",
        description: "वर्चुअल लैब्स के साथ शुरुआत करें और सीखें कि प्लेटफ़ॉर्म को प्रभावी ढंग से कैसे नेविगेट और उपयोग किया जाए।"
    },
    {
        title: "उन्नत प्रयोग तकनीकें",
        description: "प्रयोगों के संचालन के लिए उन्नत तकनीकों और सर्वोत्तम प्रथाओं को सीखकर अपने कौशल को बढ़ाएं।"
    },
    {
        title: "इंजीनियरों के लिए डेटा विश्लेषण",
        description: "सार्थक निष्कर्ष निकालने के लिए प्रयोगों से डेटा एकत्र करना, संसाधित करना और विश्लेषण करना सीखें।"
    },
    {
        title: "सिमुलेशन और मॉडलिंग",
        description: "आधुनिक इंजीनियरिंग प्रयोगों में उपयोग किए जाने वाले सिमुलेशन टूल और मॉडलिंग तकनीकों के बारे में जानें।"
    }
];

function displayRecommendedCourses() {
    const courseList = document.getElementById("course-list");
    recommendedCourses.forEach(course => {
        const li = document.createElement("li");
        li.style.marginBottom = "1rem";
        li.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
      `;
        courseList.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", displayRecommendedCourses);


const recentActivity = [
    {
      title: "भौतिकी प्रयोग: यांत्रिकी",
      date: "2025-02-01",
      description: "सिमुलेशन के माध्यम से बलों, गति और ऊर्जा संरक्षण का अध्ययन किया।"
    },
    {
      title: "रसायन विज्ञान प्रयोग: प्रतिक्रिया दरें",
      date: "2025-02-02",
      description: "प्रतिक्रिया गति पर तापमान के प्रभाव का विश्लेषण किया।"
    },
    {
      title: "सिविल इंजीनियरिंग लैब: संरचनात्मक विश्लेषण",
      date: "2025-02-03",
      description: "आभासी मॉडल का उपयोग करके भार वहन क्षमता का परीक्षण किया गया।"
    },
    {
      title: "कंप्यूटर विज्ञान प्रयोग: डेटा संरचनाएँ",
      date: "2025-02-04",
      description: "एल्गोरिदम दक्षता और सॉर्टिंग तकनीकों का पता लगाया।"
    }
  ];
  
  function displayActivity() {
    const list = document.getElementById("activityList");
    recentActivity.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `
        <h3>${item.title}</h3>
        <p><strong>तारीख:</strong> ${item.date}</p>
        <p>${item.description}</p>
      `;
      list.appendChild(li);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayActivity);