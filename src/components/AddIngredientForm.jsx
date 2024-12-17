export const AddIngredientForm = (props) => {
    return (
        <>
            <div className="my-10 text-center">
                <h2 className="text-xl font-semibold">Add available ingredients...</h2>
                <p className="text-black/60 text-sm leading-loose my-2">Smart Chef will provide you an amazing recipe using those ingredients!</p>
            </div>
            <form
                action={props.addIngredient}
                className="flex justify-center w-full gap-4"
                autoComplete="off">
                <input
                    aria-label="Type ingredient"
                    placeholder="e.g. orenano"
                    type="text"
                    required
                    name="ingredient"
                    className="bg-white rounded-lg border-orange-200 px-4 py-2 text-black border-2 text-sm flex-1 focus:outline focus:outline-orange-400"
                />
                <button className="text-sm font-medium rounded-md text-black px-10 py-2 capitalize tracking-wide hover:bg-orange-300/90 bg-orange-300 focus:outline focus:outline-orange-400">
                    Add
                </button>
            </form>
        </>

    )
}
