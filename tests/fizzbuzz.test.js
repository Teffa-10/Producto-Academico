// tests/fizzbuzz.test.js

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return String(n);
  }
  
  describe("Kata FizzBuzz", () => {
    test("retorna 'FizzBuzz' para múltiplos de 3 y 5", () => {
      expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
  
    test("retorna 'Fizz' para múltiplos de 3", () => {
      expect(fizzBuzz(9)).toBe("Fizz");
    });
  
    test("retorna 'Buzz' para múltiplos de 5", () => {
      expect(fizzBuzz(10)).toBe("Buzz");
    });
  
    test("retorna número como string si no es múltiplo", () => {
      expect(fizzBuzz(7)).toBe("7");
    });
  });
  