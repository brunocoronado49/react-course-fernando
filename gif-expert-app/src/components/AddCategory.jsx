import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => {
        const { value } = event.target;
        setInputValue(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};
