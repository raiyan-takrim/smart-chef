import React from 'react'

export const IngredientList = (props) => {
    return (
        <div className="py-10">
            <h1 className="text-lg font-semibold mb-4">Ingredients on hand:</h1>
            <ul className="list-inside list-disc">
                {
                    props.ingredientList.map(ingredient => (
                        <li className="my-2" key={ingredient}>{ingredient}</li>
                    ))
                }
            </ul>
        </div>
    )
}
