function toggleChat() {
  const chatBody = document.getElementById("chat-body");
  // Toggle visibility
  chatBody.style.display = chatBody.style.display === "block" ? "none" : "block";
}

// Handle Send button
document.getElementById("send-btn").addEventListener("click", function(event) {
  // Prevent form submission if the button is in a form
  event.preventDefault();
  sendMessage();
});

// Handle Enter key
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

  // Show user's message immediately
  appendMessage("user", message);
  userInput.value = "";

  // Show a "typing..." indicator
  appendTypingIndicator();

  // Optional 1-second delay to mimic "thinking" or "typing"
  setTimeout(() => {
    fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    })
    .then(response => {
      // Throw an error if the server returned a non-OK status
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      removeTypingIndicator();
      appendMessage("bot", data.response);
    })
    .catch((error) => {
      removeTypingIndicator();
      appendMessage("bot", `Error communicating with chatbot: ${error.message}`);
    });
  }, 1000);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

// Show "Typing..." message
function appendTypingIndicator() {
  const chatBox = document.getElementById("chat-box");
  const typingDiv = document.createElement("div");
  typingDiv.classList.add("message", "bot", "typing");
  typingDiv.id = "typing-indicator";
  typingDiv.textContent = "Typing...";
  chatBox.appendChild(typingDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Remove "Typing..." message
function removeTypingIndicator() {
  const typingDiv = document.getElementById("typing-indicator");
  if (typingDiv) typingDiv.remove();
}
