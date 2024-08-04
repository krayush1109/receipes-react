import { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import { nanoid } from 'nanoid'

const Create = () => {
    const { recipes, setRecipes, fData, setFData } = useContext(RecipesContext)
    console.log(nanoid());    
    const handleCreate = (e) => {
        e.preventDefault();
        console.log("Create button clicked");

        const newRecipe = {
            id: nanoid(),
            url: fData.url,
            name: fData.name,
            description: fData.description,
            ingredients: fData.ingredients,
            instructions: fData.instructions
        }

        const updatedRecipes = [...recipes, newRecipe]
        setRecipes(updatedRecipes);
        setFData({
            url: "",
            name: '',
            description: '',
            ingredients: '',
            instructions: ''
        })

        //todo: JSON.stringify(tasks) converts the tasks array into a JSON string:
        localStorage.setItem('Recipes', JSON.stringify(updatedRecipes));

        // console.log("newRecipe : ", newRecipe);
    }

    return { handleCreate, recipes, setRecipes, fData, setFData }

};

export default Create;