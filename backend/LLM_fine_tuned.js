import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("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");

const chatCompletion = await client.chatCompletion({
    provider: "hf-inference",
    model: "microsoft/Phi-3-mini-4k-instruct",
    messages: [
        {
            "role": "system",  
            //  make sure the content here replies in a FIXED format.
            "content": "Your are a nutritional psychiatrist. your job is to xxxx (return the symptoms and the necessary nutritional changes needed to their existing diet etc.)"
        },
        {
            "role": "user",
            "content": "insert user info here. (existing symptoms, previous known symptoms and solutions)"
        }
    ],
    max_tokens: 550,
});

console.log(chatCompletion.choices[0].message);