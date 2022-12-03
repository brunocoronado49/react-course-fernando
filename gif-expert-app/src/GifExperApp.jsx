import { useState } from "react";

export const GifExperApp = () => {
    const [categories, setCategories] = useState([
        "One Punch",
        "Dragon Ball",
        "Naruto",
    ]);

    const addCategory = () => {
        setCategories([...categories, "Valorant"]);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
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