const newMessage = {
    message: "Hola mundo",
    title: "Burton",
};

/// Se recomienda usar funciones fuera del funcional
/// component para que no guarde espacio en memoria
const message = () => {
    return "Hola mundo";
};

export const FirstApp = () => {
    return (
        <>
            <h1>Bruno</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>Soy un subtitulo</p>
        </>
    );
};
