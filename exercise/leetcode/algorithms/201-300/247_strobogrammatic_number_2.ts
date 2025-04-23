/*
  247. Strobogrammatic Number II
  A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

  Find all strobogrammatic numbers that are of length = n.
*/

export function strobogrammaticNumbers2(n: number) {
  let result = Array<string>();
  dfs(n, 0, Array<string>(n), result);
  return result;
}

function dfs(n: number, left: number, number: string[], result: string[]) {
  if (left > n - 1 - left) {
    let s = number.join("");
    result.push(s);
    return;
  }

  if (left != 0 || n == 1) {
    number[left] = "0";
    number[n - 1 - left] = "0";
    dfs(n, left + 1, number, result);
  }

  number[left] = "1";
  number[n - 1 - left] = "1";
  dfs(n, left + 1, number, result);

  number[left] = "8";
  number[n - 1 - left] = "8";
  dfs(n, left + 1, number, result);

  if (left != n - 1 - left) {
    number[left] = "6";
    number[n - 1 - left] = "9";
    dfs(n, left + 1, number, result);

    number[left] = "9";
    number[n - 1 - left] = "6";
    dfs(n, left + 1, number, result);
  }
}
