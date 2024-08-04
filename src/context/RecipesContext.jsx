import { createContext, useEffect, useState } from 'react'

const RecipesContext = createContext(null);

const RecipesProvider = ({ children }) => {
    const storedRecipes = JSON.parse(localStorage.getItem('Recipes'))
    // console.log("Official Stored Recipe -> ", storedRecipes);
    
    // const [recipes, setRecipes] = useState([]);
    const [recipes, setRecipes] = useState(storedRecipes || []);    
    const [fData, setFData] = useState({
        id: "",
        url: "",
        name: '',
        description: '',
        ingredients: '',
        instructions: ''
    })
    // console.log(fData)

    // const newDemoRecipe = {
    //     url: "",
    //     name: 'Salad',
    //     description: 'Salad',
    //     ingredients: `lettuce, tomatoes, cucumbers, dressing`.split(','),
    //     instructions: `aaa, bbb , ccc`.split(',')
    // }

    return (
        <RecipesContext.Provider value={{ recipes, setRecipes, fData, setFData }}>
            {children}
        </RecipesContext.Provider>
    )
}

export { RecipesContext };
export default RecipesProvider;