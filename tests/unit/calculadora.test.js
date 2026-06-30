const calculadora = require ('../../models/calculadora.js');

test("espero que 5 + 100 seja 105", () => {
  expect(calculadora.somar(5,100)).toBe(105);
});

test("espero que banana + 100 seja Erro", () => {
  expect(calculadora.somar('banana',100)).toBe('Erro');
});