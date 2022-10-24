/// Import y export
//import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

/// Por medio del metodo find recorre el array y toma el elemento por medio
/// de una condicion
export const getHeroesById = (id) =>
    heroes.find((heroe) => (id === heroe.id ? true : false));

/// Por medio del metodo fillter recorre el array y toma el elemento por medio
/// de una condicion
export const getHeroesByOwner = (owner) =>
    heroes.filter((heroe) => (owner === heroe.owner ? true : false));

// console.log(getHeroesById(1));
// console.log(getHeroesByOwner("Marvel"));

// console.log(owners);
