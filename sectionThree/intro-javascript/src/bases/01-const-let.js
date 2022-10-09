console.log('Hola Mundo');

/// Variables (let) y constantes (const)
const nombre = 'Bruno';
const apellido = 'Rangel';
let valorDado = 5;

valorDado = 4;

console.log(nombre, apellido, valorDado);

/// No se debe utilizar "var" nunca más
if (true) {
    let valorDado = 7;
    console.log(valorDado);
}
