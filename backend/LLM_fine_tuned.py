from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv

load_dotenv()

client = InferenceClient(
	provider="hf-inference",
	api_key=os.getenv("LLM_API_KEY")
)

messages = [
	{
        "role": "system",  
        # make sure the content here replies in a FIXED format.
        "content": """Your are a nutritional psychiatrist. your job is to xxxx (return the symptoms and the necessary
        nutritional changes needed to their existing diet etc.)"""
    },
    {
        "role": "user",
        "content": "insert user info here. (existing symptoms, previous known symptoms and solutions)"
    }
]

completion = client.chat.completions.create(
    model="microsoft/Phi-3-mini-4k-instruct", 
	messages=messages, 
	max_tokens=550, # affects the duration of the response too i think and the depth.
)


# just note that it takes a while for the model to respond
print(completion.choices[0].message.content)


# after finalising the prompt,