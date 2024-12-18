export async function getRecipeFromMistral(ingredientsArr) {
    try {
        const response = await fetch("/api/getRecipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: ingredientsArr }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch recipe.");
        }

        const data = await response.json();
        return data.recipe;
    } catch (error) {
        console.error(error.message);
        throw new Error("Failed to fetch recipe. Please try again later.");
    }
}




// import { HfInference } from '@huggingface/inference';
// // const hfToken = process.env.HF_API_TOKEN;
// // if (!hfToken) {
// //     throw new Error("HF_API_TOKEN is missing!");
// // }

// // const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// const system_prompt = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mentioned in your recipe. The recipe can include additional ingredients they didn't mention, but try to not to include too many extra ingredients. Add an image of the recipe on top and at the bottom add a best match video source with the recipe. Format your response in markdown to make it easier to render to a web page`;

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ");
//     try {
//         const response = await hf.chatCompletion({
//             model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
//             messages: [
//                 { role: "system", content: system_prompt },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1000,
//         });
//         if (!response.choices || response.choices.length === 0) {
//             throw new Error("No choices returned by the model.");
//         }
//         return response.choices[0].message.content;
//     } catch (err) {
//         console.error("Error fetching recipe:", err);
//         throw new Error("Failed to fetch recipe. Please try again later.");
//     }
// }



