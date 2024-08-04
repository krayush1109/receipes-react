import { useContext } from "react"
import { RecipesContext } from "../context/RecipesContext"
import { useNavigate } from "react-router-dom"

const Update = (params) => {
    const { recipes, setRecipes, fData } = useContext(RecipesContext)
    console.log(recipes)

    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();

        const selectedRecipe = recipes.filter((recipe) => recipe.id == params.id)[0];
        console.log(selectedRecipe);

        const updatedRecipe = {
            id: params.id,
            url: fData.url,
            name: fData.name,
            description: fData.description,
            ingredients: fData.ingredients,
            instructions: fData.instructions
        }

        // recipes.map((recipe) => {
        //     if (recipe.id == params.id) {
        //         console.log("Stored Recipe is : ", recipe);
        //         return updatedRecipe;
        //     } else {
        //         return recipe;
        //     }
        // })

        const updatedRecipes = recipes.map((recipe) => recipe.id == params.id ? updatedRecipe : recipe);        

        console.log(updatedRecipes)
        setRecipes(updatedRecipes)
        localStorage.setItem('Recipes', JSON.stringify(updatedRecipes));

        navigate(`/recipes/${params.id}`)
    }

    return { handleUpdate }
}

export default Update