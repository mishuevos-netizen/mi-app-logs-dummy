const { sumar } = require('./app');

test('Sumar 1 + 2 debe ser 3', () => {
    expect(sumar(1, 2)).toBe(3);
});

test('Sumar 5 + 3 debe ser 8', () => {
    expect(sumar(5, 3)).toBe(8);
});

test('Sumar -1 + 1 debe lanzar error', () => {
    expect(() => sumar(-1, 1)).toThrow("No se pueden sumar números negativos.");
});

test('Sumar -2 + -3 debe lanzar error', () => {
    expect(() => sumar(-2, -3)).toThrow("No se pueden sumar números negativos.");
});

test('Sumar 0 + 0 debe ser 0', () => {
    expect(sumar(0, 0)).toBe(0);
});
