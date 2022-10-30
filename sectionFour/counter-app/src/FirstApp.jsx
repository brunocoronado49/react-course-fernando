import PropTypes from "prop-types";

/// Se recomienda usar funciones fuera del funcional
/// component para que no guarde espacio en memoria
const message = () => {
    return "Hola mundo";
};

const newMessage = {
    message: "Hola mundo",
    title: "Burton",
};

export const FirstApp = ({ title, subtitle, name }) => {
    // console.log(props);

    return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
};

FirstApp.defaultProps = {
    title: "No hay título",
    subtitle: "No hay subtitulo",
    name: "Francisco Rangel",
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

