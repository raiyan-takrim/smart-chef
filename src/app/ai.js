'use server'
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY);

const system_prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mentioned in your recipe. The recipe can include additional ingredients they didn't mention, but try to not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: system_prompt },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1000,
        }); 
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message);
    }
}