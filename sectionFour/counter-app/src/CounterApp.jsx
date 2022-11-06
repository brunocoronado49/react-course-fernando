import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleRest = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleRest}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

/// Especificar el tipo de datos
CounterApp.propTypes = {
    value: PropTypes.number,
};

/// Darle valor por defecto a las props
CounterApp.defaultProps = {
    value: 0,
};
 