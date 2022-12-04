import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExperApp = () => {
    const [categories, setCategories] = useState([
        "One Punch",
        "Dragon Ball",
        "Naruto",
    ]);

    const addCategory = () => {
        setCategories(["Valorant", ...categories]);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory setCategories={setCategories} />
            {/* listado */}
            <button onClick={addCategory}>Agregar</button>
            <ol>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ol>
            {/* gif item */}
        </>
    );
};
