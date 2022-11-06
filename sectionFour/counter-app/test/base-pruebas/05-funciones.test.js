import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

/// Al comparar dos objetos tenemos que comparar con toEqual
/// Se comparan en base a espacio de memoria
describe("Pruebas en 05-funciones", () => {
    test("getUser debe retornar un objeto", () => {
        const testUser = {
            uid: "ABC123",
            username: "El_Papi1502",
        };

        const user = getUser();
        expect(testUser).toEqual(user);
    });

    test("getUsuarioActivo debe retornar un objeto", () => {
        const name = "Francisco";

        const user = getUsuarioActivo(name);

        expect(user).toStrictEqual({
            uid: "ABC567",
            username: name,
        });
    });
});
