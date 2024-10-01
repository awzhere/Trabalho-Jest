const {palynCheck} = require('./palindromo');

describe('testando nosso verificador de palindromos', () => {
    test('testando palindromos', () => {
      expect(palynCheck("amma")).toBe(true);
      expect(palynCheck("abcdefggfedcba")).toBe(true);
      expect(palynCheck("abcdefg")).toBe(false);
      expect(palynCheck("")).toBe(false);
      expect(palynCheck("a")).toBe(true);
      
    })
   })