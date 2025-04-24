// Write a function that determines whether a given number is a perfect square. 
// A perfect square is a number that is the square of an integer (like 0, 1, 4, 9, 16, etc). 
// The function should return true if the number is a perfect square, and false otherwise."
// connect: undefined

function isSquare(n: number): boolean {
  return n >= 0 && Number.isInteger(Math.sqrt(n));
}

describe('isSquare', () => {
  test('should return true for perfect squares', () => {
    expect(isSquare(0)).toBe(true);
    expect(isSquare(1)).toBe(true);
    expect(isSquare(4)).toBe(true);
    expect(isSquare(9)).toBe(true);
    expect(isSquare(16)).toBe(true);
  });

  test('should return false for non-square positive numbers', () => {
    expect(isSquare(2)).toBe(false);
    expect(isSquare(3)).toBe(false);
    expect(isSquare(5)).toBe(false);
    expect(isSquare(10)).toBe(false);
  });

  test('should return false for negative numbers', () => {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare(-4)).toBe(false);
  });
});