/// Desestructuracion de arreglos

const personajes = ["Francisco", "Bruno", "V", "Geralt"];

console.log(personajes[0], personajes[1], personajes[2], personajes[3]);
console.log({ ...personajes });

/// Toma el primer elemento del arreglo
const [p1] = personajes;
console.log(p1);

/// Ignora el primero
const [, p2] = personajes;
console.log(p2);

/// Ignora el primero y segundo
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => ["ABC", 123];
const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

/// Tarea
const state = (valor) => {
    return [valor, () => console.log("Hola Mundo")];
};

const [nombre, setNombre] = state("Goku");
console.log(nombre);
setNombre();
