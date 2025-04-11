/*
  386. Lexicographical Numbers.
  Given an integer n, return 1 - n in lexicographical order.
*/

export function lexicalOrder(n: number) {
  let res: number[] = [];
  for (let i = 1; i < 10; i++) {
    dfs(i, n, res);
  }
  return res;
}

function dfs(curr: number, n: number, res: number[]) {
  if (curr > n) {
    return;
  }
  res.push(curr);
  for (let i = 0; i < 10; i++) {
    let next = 10 * curr + i;
    if (next > n) {
      return;
    }
    dfs(next, n, res);
  }
}
