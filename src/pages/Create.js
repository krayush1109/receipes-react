import { useContext } from 'react';
import { ReceipesContext } from '../context/ReceipesContext';
import { nanoid } from 'nanoid'

const Create = () => {
    const { receipes, setReceipes, fData, setFData } = useContext(ReceipesContext)
    console.log(nanoid());
    const handleCreate = (e) => {
        e.preventDefault();
        console.log("Create button clicked");

        const newReceipe = {
            id: nanoid(),
            url: fData.url,
            name: fData.name,
            description: fData.description,
            ingredients: fData.ingredients.split(','),
            instructions: fData.instructions.split(',')
        }

        const updatedReceipes = [...receipes, newReceipe]
        setReceipes(updatedReceipes);
        setFData({
            url: "",
            name: '',
            description: '',
            ingredients: '',
            instructions: ''
        })

        //todo: JSON.stringify(tasks) converts the tasks array into a JSON string:
        localStorage.setItem('Receipes', JSON.stringify(updatedReceipes));

        // console.log("newReceipe : ", newReceipe);
    }

    return { handleCreate, receipes, setReceipes, fData, setFData }

};

export default Create;