import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("09-async-await", () => {
    test("getImage debe retornar un url", async () => {
        const url = await getImagen();
        expect(typeof url).toBe("string");
    });
});
