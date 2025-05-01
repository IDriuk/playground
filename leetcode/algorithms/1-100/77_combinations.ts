/* 
  77. Combinations
  Given two integers n and k, return all possible combinations of k numbers out of 1..n
*/

export function getCombinations(n: number, k: number): number[][] {
  let res: number[][] = [];
  backtrack(res, n, k, 1, []);
  return res;
}

function backtrack(
  res: number[][],
  n: number,
  k: number,
  start: number,
  comb: number[],
) {
  if (k == 0) {
    res.push([...comb]);
    return;
  }

  for (let i = start; i <= n; i++) {
    comb.push(i);
    backtrack(res, n, k - 1, i + 1, comb);
    comb.pop();
  }
}
