import { createContext, useEffect, useState } from 'react'

const ReceipesContext = createContext(null);

const ReceipesProvider = ({ children }) => {
    const storedReceipes = JSON.parse(localStorage.getItem('Receipes'))

    // const [receipes, setReceipes] = useState([]);
    const [receipes, setReceipes] = useState(storedReceipes || []);
    const [fData, setFData] = useState({
        id: "",
        url: "",
        name: '',
        description: '',
        ingredients: '',
        instructions: ''
    })
    // console.log(fData)

    // const newReceipe = {
    //     url: "",
    //     name: 'Salad',
    //     description: 'Salad',
    //     ingredients: `lettuce, tomatoes, cucumbers, dressing`.split(','),
    //     instructions: `aaa, bbb , ccc`.split(',')
    // }

    useEffect(() => {
        // setReceipes((prevReceipe) => ([...prevReceipe, newReceipe]));
        // setReceipes((prevReceipe) => ([...prevReceipe, newReceipe]));
        // setReceipes((prevReceipe) => ([...prevReceipe, newReceipe1]));
        // setReceipes((prevReceipe) => ([...prevReceipe, newReceipe2]));
    }, [])

    return (
        <ReceipesContext.Provider value={{ receipes, setReceipes, fData, setFData }}>
            {children}
        </ReceipesContext.Provider>
    )
}

export { ReceipesContext };
export default ReceipesProvider;