import { useContext } from "react"
import { RecipesContext } from "../context/RecipesContext"

const LoadDefaultData = () => {
    const { recipes } = useContext(RecipesContext);

    const showDefaultData = () => {
        return recipes.length === 0 ? (
            <>
                <h1>Hello</h1>
            </>
        ) : (
            <div>No data</div>
        );
    };

    return { showDefaultData }
}

export default LoadDefaultData