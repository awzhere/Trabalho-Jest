const { calculadora } = require('./calc');

describe('testando nossa calculadora', () => {
 test('testando a adicao', () => {
   expect(calculadora(10, 5, "adicao")).toBe(15);
   expect(calculadora(53, 20, "adicao")).toBe(73);
   
 })
 test('testando a subtracao', () => {
    expect(calculadora(10, 5, "sub")).toBe(5);
    expect(calculadora(53, 20, "sub")).toBe(33);
    
  })

  test('testando a multiplicacao', () => {
    expect(calculadora(10, 5, "mult")).toBe(50);
    expect(calculadora(53, 20, "mult")).toBe(1060);
    
  })

  test('testando a divisao', () => {
    expect(calculadora(10, 5, "div")).toBe(2);
    expect(calculadora(75, 25, "div")).toBe(3);
    expect(calculadora(75, 0, "div")).toBe(Infinity);
    
  })
})