export const CTA = (props) => {
    return (
        <div className="flex bg-orange-100 items-center justify-between border border-orange-200 text-black rounded-lg px-4 py-4">
            {
                props.ingredientList.length > 3 ? (
                    <>
                        <div>
                            <h2 className="font-semibold">Ready for a recipe?</h2>
                            <p className="text-black/60 text-sm leading-relaxed">Generate a recipe from your list of ingredients.</p>
                        </div>
                        <div>
                            <button
                                className="text-sm font-medium rounded-md text-black px-4 py-2 capitalize tracking-wide hover:bg-orange-300/90 bg-orange-300 focus:outline focus:outline-orange-400"
                                onClick={props.getRecipe}
                                disabled={props.loading}
                            >
                                {props.loading? "Generating...": "Generate"}
                                </button>
                        </div>
                    </>)
                    :
                    (<p className="text-orange-500 text-sm">Please add at least 4 items.</p>)
            }
        </div>
    )
}

