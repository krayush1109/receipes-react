import React, { useContext } from 'react'
import { RecipesContext } from '../context/RecipesContext'
import { useNavigate } from 'react-router-dom'

const Delete = (params) => {
    const navigate = useNavigate()
    const { recipes, setRecipes } = useContext(RecipesContext)

    const handleDelete = () => {
        console.log('Delete button clicked'),
            console.log(recipes);

        const filteredRecipes = recipes.filter((recipe) => recipe.id !== params.id);
        console.log(filteredRecipes)

        setRecipes(filteredRecipes)
        localStorage.setItem('Recipes', JSON.stringify(filteredRecipes));

        navigate('/recipes')
    }

    return { handleDelete }
}

export default Delete