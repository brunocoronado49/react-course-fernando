import { render, fireEvent, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Test en AddCatergory", () => {
    test("Debe retornar el cambio de valor de texto", () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Jotaro Kujo'}});
        expect(input.value).toBe('Jotaro Kujo');
    });

    test('Debe de llamar onNewCategory si el input tiene algun valor', () => {
        const inputValue = 'Jotaro Kujo';
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        // screen.debug();
    });
});
