import {
    getHeroeById,
    getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
    test("Debe retornar un heroe por medio del id", () => {
        const id = 1;
        const heroe = getHeroeById(id);
        console.log(heroe);
        expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });

        // Evalua su es null, undefined o false
        const id2 = 100;
        const heroe2 = getHeroeById(id2);
        console.log(heroe2);
        expect(heroe2).toBeFalsy();
    });

    // Tarea
    test("getHeroesByOwner debe retortar heroes de dc", () => {
        // Primer manera de hacerlo
        const dc = "DC";

        const ownerDc = heroes.filter((dcHeroe) => dcHeroe.owner === dc);
        expect(ownerDc.length).toEqual(3);

        // Segunda manera de hacerlo
        const heroesDC = getHeroesByOwner(dc);
        console.log(heroesDC);
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual([
            { id: 1, name: "Batman", owner: "DC" },
            { id: 3, name: "Superman", owner: "DC" },
            { id: 4, name: "Flash", owner: "DC" },
        ]);
    });

    test("getHeroesByOwner debe retortar heroes de marvel", () => {
        const marvel = "Marvel";

        // Primer manera de hacerlo
        const ownderMarvel = heroes.filter(
            (marvelHeroe) => marvelHeroe.owner === marvel
        );
        expect(ownderMarvel.length).toEqual(2);

        // Segunda manera de hacerlo
        const heroesMarvel = getHeroesByOwner(marvel);
        console.log(heroesMarvel);
        expect(heroesMarvel.length).toBe(2);
        expect(heroesMarvel).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
    });
});
