/// Promesas
import { getHeroesById } from "./08-exports-imports";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if (!heroe) {
                return reject("No se encontrĂ³ al heroe.");
            } else {
                resolve(heroe);
            }
        }, 2000);
    });
};

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);
