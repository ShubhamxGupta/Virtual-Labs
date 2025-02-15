function toggleChat() {
  const chatBody = document.getElementById("chat-body");

  // Toggle chat window visibility
  chatBody.style.display = chatBody.style.display === "block" ? "none" : "block";
}

document.getElementById("send-btn").addEventListener("click", function() {
  sendMessage();
});

// Handle Enter Key for Sending Messages
document.getElementById("user-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage("user", message);
  userInput.value = "";

  // Show typing indicator
  appendTypingIndicator();

  setTimeout(() => {
    fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        removeTypingIndicator();
        appendMessage("bot", data.response);
    })
    .catch(() => {
        removeTypingIndicator();
        appendMessage("bot", "Error communicating with chatbot.");
    });
  }, 1000);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Typing Indicator Functionality
function appendTypingIndicator() {
  const chatBox = document.getElementById("chat-box");
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("message", "bot", "typing");
  typingDiv.id = "typing-indicator";
  typingDiv.textContent = "Typing...";
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const typingDiv = document.getElementById("typing-indicator");
  if (typingDiv) typingDiv.remove();
}
