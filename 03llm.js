import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync";

// Initialize the AI client
const ai = new GoogleGenAI({
  apiKey: "AIzaSyCtdmzCWKPxL4qY9droN6Xz9qDwLgPG0Qk"
});

const chat = ai.chats.create({
  model: "gemini-2.5-flash",
  history: [],
});


async function main(){
  const userProblem = readlineSync.question("Ask me anything: ");
  const response = await chat.sendMessage({
    message: userProblem,
  });

  console.log(response.text);
  main();
}

main();