import { HfInference } from '@huggingface/inference';
import * as dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.LLM_API_KEY;

if (!apiKey) {
  console.error("LLM_API_KEY environment variable not set.");
  process.exit(1);
}

const hf = new HfInference(apiKey);

// Placeholder for database integration
const previousSymptomsPlaceholder = "Fatigue, Irritability"; // Example placeholder
const previousSolutionsPlaceholder = "Increased water intake, Reduced caffeine consumption"; // Example placeholder

// Simulate user input
const currentInput = "Depression and persistent sadness"; // Example current symptoms

// Combine placeholders with current input
const userMessage = `Current symptoms: ${currentInput}.
Previous symptoms: ${previousSymptomsPlaceholder}.
Previous solutions: ${previousSolutionsPlaceholder}.`;

const messages = [
  {
    role: "system",
    content: `You are a nutritional psychiatrist. Your job is to:
1. Analyze the user's current symptoms and their history of symptoms and solutions (provided as placeholders for now).
2. Provide a structured response in the following format:
   ### Structured Response:
   - Symptom: [Symptom 1]
     Recommended Nutritional Change: [Change for Symptom 1]
   - Symptom: [Symptom 2]
     Recommended Nutritional Change: [Change for Symptom 2]
3. Provide a conversational response in the following format:
   ### Conversational Response:
   [Empathetic and conversational text to check in with the user about their previous symptoms and solutions, and ask if they have noticed any improvements or additional symptoms.]`
  },
  {
    role: "user",
    content: userMessage
  }
];

hf.chat({
  model: "microsoft/Phi-3-mini-4k-instruct",
  messages: messages,
  parameters: {
    max_new_tokens: 550,
  }
})
.then(response => {
  const content = response.generated_text;

  // Split the response into structured and conversational parts
  let structuredResponse = "";
  let conversationalResponse = "";

  const structuredMarker = "### Structured Response:";
  const conversationalMarker = "### Conversational Response:";

  const structuredIndex = content.indexOf(structuredMarker);
  const conversationalIndex = content.indexOf(conversationalMarker);

  if (structuredIndex !== -1 && conversationalIndex !== -1 && structuredIndex < conversationalIndex) {
    structuredResponse = content.substring(structuredIndex + structuredMarker.length, conversationalIndex).trim();
    conversationalResponse = content.substring(conversationalIndex + conversationalMarker.length).trim();
  } else {
    // Fallback if the response doesn't follow the expected format
    structuredResponse = content.trim();
    conversationalResponse = "Could not extract conversational response. Please check the AI output format.";
  }

  // Print the structured response
  console.log("Structured Response:");
  console.log(structuredResponse);

  // Print the conversational response
  console.log("\nConversational Response:");
  console.log(conversationalResponse);
})
.catch(error => {
  console.error("Error calling the Hugging Face Inference API:", error);
});