"use client";
import { useState, useRef, useEffect } from "react";
import { AddIngredientForm } from "./AddIngredientForm";
import { IngredientList } from "./IngredientList";
import ReactMarkdown from "react-markdown";
import { getRecipeFromMistral } from "@/app/ai";
import { CTA } from "./CTA";

export const Main = () => {
    const [ingredientList, setIngredientList] = useState([]);
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const recipeRef = useRef(null);

    const addIngredient = (formData) => {
        const ingredient = formData.get("ingredient");
        setIngredientList((prev) => [...prev, ingredient]);
    };

    async function getRecipe() {
        if (loading) return; // Prevent duplicate calls
        setLoading(true);
        try {
            const recipeMarkdown = await getRecipeFromMistral(ingredientList);
            setRecipe(recipeMarkdown);
        } catch (error) {
            setRecipe("Failed to generate a recipe. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (recipe && recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [recipe]);

    return (
        <main className="px-4 py-10 max-w-xl mx-auto">
            <AddIngredientForm addIngredient={addIngredient} />
            {ingredientList.length > 0 && (
                <>
                    <IngredientList ingredientList={ingredientList} />
                    <CTA ingredientList={ingredientList} getRecipe={getRecipe} loading={loading} />
                    {recipe && (
                        <div
                            ref={recipeRef}
                            className="tracking-wide leading-relaxed px-4 py-10 mt-10 bg-orange-100 border-2 rounded-lg border-orange-200"
                            aria-live="polite"
                        >
                            <h1 className="text-xl font-bold mb-4">Generated Recipe:</h1>
                            <ReactMarkdown>{recipe}</ReactMarkdown>
                        </div>
                    )}
                </>
            )}
        </main>
    );
};
