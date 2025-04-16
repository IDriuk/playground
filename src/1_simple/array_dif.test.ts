// Array.diff
// Implement a function that computes the difference between two lists. 
// The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). 
// The order of elements in the first list should be preserved in the result.
// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// connect: reduce

function arrayDiff<T extends string | number>(a: T[], b: T[]): T[] {
  const bSet = b.reduce<Record<T, boolean>>((ac, el) => {
    ac[el] = true;
    return ac;
  }, {} as Record<T, boolean>);

  return a.filter(el => !bSet[el]);
}

describe('Array.diff', () => {
  it('should return elements in array A that are not in array B (numbers)', () => {
    expect(arrayDiff([1, 2, 3], [2])).toEqual([1, 3]);
  });

  it('should return elements in array A that are not in array B (strings)', () => {
    expect(arrayDiff(['a', 'b', 'c'], ['b'])).toEqual(['a', 'c']);
  });

  it('should return all elements if array B is empty', () => {
    expect(arrayDiff([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  it('should return an empty array if all elements are removed', () => {
    expect(arrayDiff(['x', 'y'], ['x', 'y'])).toEqual([]);
  });
});