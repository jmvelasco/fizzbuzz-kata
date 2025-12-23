import { expect, test } from '@jest/globals';
import { fizzbuzz, generateFizzBuzzSequence, printFizzBuzz } from '../core/fizzbuzz';

// TODO: Lista de casos de prueba para FizzBuzz
// ✅ 1. Devuelve "1" para el número 1 (caso más simple - transformación: {} → constant)
// ✅ 2. Devuelve "2" para el número 2 (transformación: constant → scalar)
// ✅ 3. Devuelve "fizz" para el número 3 (primer múltiplo de 3 - transformación: unconditional → if)
// ✅ 4. Devuelve "buzz" para el número 5 (primer múltiplo de 5 - transformación: if → if + if)
// ✅ 5. Devuelve "fizz" para el número 6 (segundo múltiplo de 3)
// ✅ 6. Devuelve "buzz" para el número 10 (segundo múltiplo de 5)
// ✅ 7. Devuelve "fizzbuzz" para el número 15 (primer múltiplo de 3 y 5)
// ✅ 8. Devuelve "fizzbuzz" para el número 30 (segundo múltiplo de 3 y 5)
// ✅ 9. Genera secuencia del 1 al 100 (transformación: scalar → array, if → while/map)

test('converts 1 to string "1"', () => {
  const result = fizzbuzz(1);

  expect(result).toBe('1');
});

test('converts 2 to string "2"', () => {
  const result = fizzbuzz(2);

  expect(result).toBe('2');
});

test('converts 3 to "fizz"', () => {
  const result = fizzbuzz(3);

  expect(result).toBe('fizz');
});

test('converts 5 to "buzz"', () => {
  const result = fizzbuzz(5);

  expect(result).toBe('buzz');
});

test('converts 6 to "fizz"', () => {
  const result = fizzbuzz(6);

  expect(result).toBe('fizz');
});

test('converts 10 to "buzz"', () => {
  const result = fizzbuzz(10);

  expect(result).toBe('buzz');
});

test('converts 15 to "fizzbuzz"', () => {
  const result = fizzbuzz(15);

  expect(result).toBe('fizzbuzz');
});

test('generates sequence from 1 to 100', () => {
  const result = generateFizzBuzzSequence();

  expect(result).toHaveLength(100);
  expect(result[0]).toBe('1');
  expect(result[2]).toBe('fizz');
  expect(result[4]).toBe('buzz');
  expect(result[14]).toBe('fizzbuzz');
  expect(result[99]).toBe('buzz');
});

test('prints fizzbuzz sequence to console', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

  printFizzBuzz();

  expect(consoleSpy).toHaveBeenCalledTimes(100);
  expect(consoleSpy).toHaveBeenNthCalledWith(1, '1');
  expect(consoleSpy).toHaveBeenNthCalledWith(3, 'fizz');
  expect(consoleSpy).toHaveBeenNthCalledWith(5, 'buzz');
  expect(consoleSpy).toHaveBeenNthCalledWith(15, 'fizzbuzz');

  consoleSpy.mockRestore();
});
