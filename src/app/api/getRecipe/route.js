import { HfInference } from "@huggingface/inference";

const hfToken = process.env.HF_API_TOKEN;

if (!hfToken) {
    throw new Error("HF_API_TOKEN is missing!");
}

const hf = new HfInference(hfToken);

const system_prompt = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mentioned in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

export async function POST(request) {
    try {
        const { ingredients } = await request.json();

        if (!ingredients || !Array.isArray(ingredients)) {
            return new Response(JSON.stringify({ error: "Invalid ingredients provided." }), { status: 400 });
        }

        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: system_prompt },
                { role: "user", content: `I have ${ingredients.join(", ")}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1000,
        });

        const recipe = response.choices?.[0]?.message?.content;

        if (!recipe) {
            return new Response(JSON.stringify({ error: "No recipe generated." }), { status: 500 });
        }

        return new Response(JSON.stringify({ recipe }), { status: 200 });
    } catch (error) {
        console.error("Error in API route:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch recipe. Please try again later." }), { status: 500 });
    }
}
