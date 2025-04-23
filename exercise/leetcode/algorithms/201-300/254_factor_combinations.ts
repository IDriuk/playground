/*
  254. Factor Combinations
  Numbers can be regarded as product of its factors. For example 8 = 2 * 2 * 2, = 2 * 4
  Write a function that takes an integer n and return all possible combinations of its factors.
  Note: 
  You may assume that n is always positive.
  Factors should be greater than 1 and less than n.
*/

export function factorCombinations(n: number) {
  let factors: number[][] = [];
  backtrack(factors, n, 2, []);
  return factors;
}

function backtrack(
  res: number[][],
  n: number,
  start: number,
  factors: number[],
) {
  if (n == 1) {
    if (factors.length > 1) {
      res.push([...factors]);
    }
    return;
  }

  for (let i = start; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      factors.push(i);
      backtrack(res, Math.floor(n / i), i, factors);
      factors.pop();
    }
  }

  let i = n;
  factors.push(i);
  backtrack(res, Math.floor(n / i), i, factors);
  factors.pop();
}
