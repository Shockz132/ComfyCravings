from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv

load_dotenv()

client = InferenceClient(
    provider="hf-inference",
    api_key=os.getenv("LLM_API_KEY")
)

# Placeholder for database integration
previous_symptoms_placeholder = "Fatigue, Irritability"  # Example placeholder
previous_solutions_placeholder = "Increased water intake, Reduced caffeine consumption"  # Example placeholder

# Simulate user input
current_input = "Depression and persistent sadness"  # Example current symptoms

# Combine placeholders with current input
user_message = f"""Current symptoms: {current_input}.
Previous symptoms: {previous_symptoms_placeholder}.
Previous solutions: {previous_solutions_placeholder}."""

messages = [
    {
        "role": "system",
        "content": """You are a nutritional psychiatrist. Your job is to:
        1. Analyze the user's current symptoms and their history of symptoms and solutions (provided as placeholders for now).
        2. Provide a structured response in the following format:
           ### Structured Response:
           - Symptom: [Symptom 1]
             Recommended Nutritional Change: [Change for Symptom 1]
           - Symptom: [Symptom 2]
             Recommended Nutritional Change: [Change for Symptom 2]
        3. Provide a conversational response in the following format:
           ### Conversational Response:
           [Empathetic and conversational text to check in with the user about their previous symptoms and solutions, and ask if they have noticed any improvements or additional symptoms.]"""
    },
    {
        "role": "user",
        "content": user_message
    }
]

completion = client.chat.completions.create(
    model="microsoft/Phi-3-mini-4k-instruct",
    messages=messages,
    max_tokens=550
)

response = completion.choices[0].message.content

# Split the response into structured and conversational parts
structured_response = ""
conversational_response = ""

if "### Structured Response:" in response and "### Conversational Response:" in response:
    parts = response.split("### Conversational Response:")
    structured_response = parts[0].replace("### Structured Response:", "").strip()
    conversational_response = parts[1].strip()
else:
    # Fallback if the response doesn't follow the expected format
    structured_response = response
    conversational_response = "Could not extract conversational response. Please check the AI output format."

# Print the structured response
print("Structured Response:")
print(structured_response)

# Print the conversational response
print("\nConversational Response:")
print(conversational_response)