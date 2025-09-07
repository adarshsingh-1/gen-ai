import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

// Initialize the AI client
const ai = new GoogleGenAI({
  apiKey: "AIzaSyCtdmzCWKPxL4qY9droN6Xz9qDwLgPG0Qk"
});

// Store conversation history
const History = [];

// Function to handle chatting with the AI
async function chatting(userProblem) {
  History.push({
    role: "user",
    parts: [{ text: userProblem }]
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
  });

  console.log(response.text);
}

// Main loop for user interaction
async function main() {
  const userProblem = readlineSync.question("Ask me anything: ");
  await chatting(userProblem);
  main();
}

main();