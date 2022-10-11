/// Funciones

const saludar = function (nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;

console.log(saludar("Francisco"));
console.log(saludar2("Bruno"));
console.log(saludar3("José"));

const getUser = () => {
    return {
        uid: "abcd",
        username: "El_Papi1502",
    }
}

const getUser2 = () => ({ uid: "abcd", username: "El_Papi1502" })

console.log(getUser());
console.log(getUser2());

/// Tarea
const getUsuarioActivo = (nombre) => ({ uid: "abcd123", username: nombre });
const usuario = getUsuarioActivo("Fernando");
console.log(usuario);
