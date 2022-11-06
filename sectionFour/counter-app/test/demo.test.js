/// Pruebas en ese componente, el describe es para darle
/// una descripcion o titulos a las pruebas
describe("Pruebas en <DemoComponent />", () => {
    test("Esta prueba no debe de fallar", () => {
        /// 1. Inicialización
        const msgOne = "Hello World";

        /// 2. Estimulo
        const msgTwo = msgOne.trim();

        /// 3. Observar el comportamiento
        expect(msgOne).toBe(msgTwo);
    });
});
