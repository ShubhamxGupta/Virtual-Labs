// server.js

require('dotenv').config();
const express = require('express');
const cors = require("cors");
const path = require('path');

const { GoogleGenerativeAI } = require('@google/generative-ai');
// If needed: const { HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.0-flash-thinking-exp-01-21',
});

const generationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 65536,
  responseMimeType: 'text/plain',
};

const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: 'user',
      parts: [
        {
          text: `{
  "knowledge_base": [
    {
      "category": "Onboarding & Guidance",
      "qa": [
        {
          "question": "What is Virtual Labs?",
          "answer": "Virtual Labs is an initiative by India's Ministry of Education offering remote, simulation-based experiments in science and engineering."
        },
        {
          "question": "How do I register?",
          "answer": "Click 'Register' at the top right, fill in your details, verify your email, and log in."
        },
        {
          "question": "How do I navigate the platform?",
          "answer": "Use the main menu and search bar to explore experiments by category."
        }
      ]
    },
    {
      "category": "Experiment-Specific Help",
      "qa": [
        {
          "question": "What does the 'Chemical Reactions' experiment cover?",
          "answer": "It demonstrates reaction rates and the effects of temperature and concentration on reactions."
        },
        {
          "question": "I'm stuck on a step. What should I do?",
          "answer": "Refer to the experiment's detailed guide or ask for a specific hint."
        },
        {
          "question": "What are the objectives of an experiment?",
          "answer": "Each experiment lists its objectives; for example, a physics experiment may explain mechanics or optics."
        }
      ]
    },
    {
      "category": "Troubleshooting",
      "qa": [
        {
          "question": "The simulation isn't loading. What should I do?",
          "answer": "Check your internet connection, refresh the page, or clear your browser cache."
        },
        {
          "question": "I can't log in.",
          "answer": "Use the 'Forgot Password' link to reset your credentials or contact support."
        },
        {
          "question": "I'm experiencing technical issues.",
          "answer": "Review our troubleshooting guide under 'Resources' or email support@virtuallabs.in."
        }
      ]
    },
    {
      "category": "Resource Discovery",
      "qa": [
        {
          "question": "Where can I find tutorials?",
          "answer": "Tutorials are available in the 'Resources' section of each experiment."
        },
        {
          "question": "Can you recommend related experiments?",
          "answer": "Check the 'Recommended Experiments' section on your dashboard."
        }
      ]
    },
    {
      "category": "Personalized Recommendations",
      "qa": [
        {
          "question": "What experiment should I try next?",
          "answer": "Based on your activity, try exploring experiments in your field of interest."
        },
        {
          "question": "Can you suggest experiments in renewable energy?",
          "answer": "I recommend 'Energy Conversion' and 'Solar Power Simulation' for renewable energy insights."
        }
      ]
    },
    {
      "category": "Feedback Collection",
      "qa": [
        {
          "question": "How do I provide feedback?",
          "answer": "After each experiment, you can rate your experience and leave comments using our feedback form."
        },
        {
          "question": "I have a suggestion.",
          "answer": "Thank you! Please use our feedback form or email support@virtuallabs.in."
        }
      ]
    },
    {
      "category": "24/7 Support",
      "qa": [
        {
          "question": "I need help right now.",
          "answer": "I'm here to help! Please describe your issue, and I'll guide you immediately."
        },
        {
          "question": "How do I contact human support?",
          "answer": "Email our support team at support@virtuallabs.in for further assistance."
        }
      ]
    },
    {
      "category": "General & Miscellaneous",
      "qa": [
        {
          "question": "What experiments are available?",
          "answer": "Virtual Labs hosts over 700 experiments across 100+ labs in fields like chemistry, physics, biology, engineering, and computer science."
        },
        {
          "question": "How often is the content updated?",
          "answer": "Content is regularly updated with new experiments and improved protocols."
        },
        {
          "question": "Is there a mobile app available?",
          "answer": "Currently, Virtual Labs is accessible through modern web browsers. A dedicated mobile app is in development."
        }
      ]
    }
  ]
}`
        }
      ],
    },
    {
      role: 'model',
      parts: [{ text: 'Knowledge base loaded successfully.' }],
    }
  ],
});

const app = express();
const port = 3000;
app.use(cors()); 

app.use(express.json());

// 1) Serve the entire project root as static.
//    This means ANY file in <project-root> is accessible via absolute paths.
app.use(express.static(path.join(__dirname)));

// 2) Chat endpoint
app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const result = await chatSession.sendMessage(message);
    // const responseText = result.response.text();
    const responseText = result.response.text();
    res.json({ response: responseText });
  } catch (error) {
    console.error('Error processing message:', error);
    res.status(500).json({ error: 'Error processing message' });
  }
});

// 3) Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
