/// Desestructuración

const persona = {
    nombre: "Jhonny",
    edad: 45,
    clave: "silverhand",
};

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = (usuario) => {
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
};

const context = ({ clave, nombre, edad, rango = "Rockero anarquista" }) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 2.334552,
            lng: 3.224665,
        },
    };
};

retornaPersona(persona);
const {
    nombreClave,
    anios,
    latlng: { lat, lng },
} = context(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
