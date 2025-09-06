import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "genai-api-key"});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role:"user",
        parts:[{text:"What is my name?"}]
      },
      {
        role:"model",
        parts:[{text:"Hii Adarsh, nice to meet you!"}]
      },
      {
        role:"user",
        parts:[{text:"What is my name?"}]
      }
    ],
  });
  console.log(response.text);
}

await main();

