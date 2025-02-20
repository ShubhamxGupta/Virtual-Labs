

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loader.js: DOM fully loaded. Attempting to fetch chatbot.html...");
  
    
    fetch("../VLab ChatBot/chatbot.html")
      .then((response) => {
        console.log("Loader.js: chatbot.html response status:", response.status);
        return response.text();
      })
      .then((html) => {
        console.log("Loader.js: Received chatbot.html content.");
        const container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container);
  
        
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../VLab ChatBot/styles.css";
        document.head.appendChild(link);
  
        
        const script = document.createElement("script");
        script.src = "../VLab ChatBot/script.js"; 
        script.defer = true;
        document.body.appendChild(script);
  
        console.log("Loader.js: Chatbot injected successfully.");
      })
      .catch((err) => {
        console.error("Loader.js: Failed to load chatbot:", err);
      });
  });
  