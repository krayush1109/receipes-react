import React, { useContext, useEffect, useState } from "react";
import Create from "./Create.js";
import { RecipesContext } from "../context/RecipesContext.jsx";

const CreateX = () => {
    const { handleCreate, } = Create();
    const { recipes, fData, setFData } = useContext(RecipesContext);
    
    useEffect(() => {
        // console.log("Componets Mounted")
        // console.log(recipes);

        return () => {
            // console.log("Componets Unmounted")
            setFData({
                url: "",
                name: '',
                description: '',
                ingredients: '',
                instructions: ''
            })
        }

    }, [recipes])

    return (
        <form onSubmit={handleCreate} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>
            <input
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
                value={fData.url}
                onChange={(e) => setFData({ ...fData, url: e.target.value })}

            />
            <input
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
                value={fData.name}
                onChange={(e) => setFData({ ...fData, name: e.target.value })}
            />
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
                name="description"
                value={fData.description}
                onChange={(e) => setFData({ ...fData, description: e.target.value })}

            ></textarea>
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
                value={fData.ingredients}
                onChange={(e) => setFData({ ...fData, ingredients: e.target.value })}

            ></textarea>
            <textarea
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
                name="instructions"
                value={fData.instructions}
                onChange={(e) => setFData({ ...fData, instructions: e.target.value })}

            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default CreateX;
