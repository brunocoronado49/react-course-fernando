import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExperApp = () => {
    const [categories, setCategories] = useState(["One Punch"]);

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(event) => addCategory(event)} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};
