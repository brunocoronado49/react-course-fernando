/// Objetos literales

const persona = {
    nombre: 'Bruno',
    apellido: 'Coronado',
    edad: 25,
    direccion: {
        ciudad: 'México',
        zip: 98676453,
        lat: 14.56436,
        lng: 12.83456,
    }
};

//console.table(persona);

/// Clonamos el contenido de persona
const persona2 = { ...persona };
persona2.nombre = 'Francisco';

console.log(persona);
console.log(persona2);