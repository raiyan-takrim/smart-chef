"use client"
import { useState, Suspense } from "react";
import { AddIngredientForm } from "./AddIngredientForm";
import { IngredientList } from "./IngredientList";
import ReactMarkdown from 'react-markdown'
import { getRecipeFromMistral } from "@/app/ai";
import { CTA } from "./CTA";

export const Main = () => {
  const [ingredientList, setingredientList] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient");
    setingredientList(prev => [...prev, ingredient]);
  }

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredientList);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  return (
    <main className="px-4 py-10 max-w-xl mx-auto">
      <div className="my-10 text-center">
        <h2 className="text-xl font-semibold">Add available ingredients...</h2>
        <p className="text-black/60 text-sm leading-loose my-2">Smart Chef will provide you an amazing recipe using those ingredients!</p>
      </div>
      <AddIngredientForm addIngredient={addIngredient} />
      {ingredientList.length > 0 && (
        <>
          <IngredientList ingredientList={ingredientList} />
          <CTA ingredientList={ingredientList} getRecipe={getRecipe} loading={loading} />
          <Suspense fallback={<div>Loading recipe...</div>}>
            {recipe && (
              <div className="tracking-wide leading-relaxed px-4 py-10 mt-10 bg-orange-100 border-2 rounded-lg border-orange-200" aria-live="polite">
                <h1 className="text-xl font-bold mb-4">Generated Recipe: </h1>
                <ReactMarkdown>{recipe}</ReactMarkdown>
              </div>
            )}
          </Suspense>
        </>
      )}
    </main>
  );
};

