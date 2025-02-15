// Vlab ChatBot/loader.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Loader.js: DOM fully loaded. Attempting to fetch chatbot.html...");
  
    // If your folder name has a space, you can write it exactly as is:
    fetch("/Vlab ChatBot/chatbot.html")
      .then((response) => {
        console.log("Loader.js: chatbot.html response status:", response.status);
        return response.text();
      })
      .then((html) => {
        console.log("Loader.js: Received chatbot.html content.");
        const container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container);
  
        // Load Chatbot CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/Vlab ChatBot/styles.css";
        document.head.appendChild(link);
  
        // Load Chatbot logic
        const script = document.createElement("script");
        script.src = "/Vlab ChatBot/script.js"; // Chatbot logic
        script.defer = true;
        document.body.appendChild(script);
  
        console.log("Loader.js: Chatbot injected successfully.");
      })
      .catch((err) => {
        console.error("Loader.js: Failed to load chatbot:", err);
      });
  });
  