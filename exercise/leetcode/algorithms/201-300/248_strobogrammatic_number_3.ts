/*
  248. Strobogrammatic Number III
  A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

  Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high
*/

let pairs = {
  "0": "0",
  "1": "1",
  "8": "8",
  "6": "9",
  "9": "6",
};

export function strobogrammaticInRange(low: string, high: string) {
  let count = [0];
  for (let i = low.length; i <= high.length; i++) {
    dfs(i, 0, new Array<string>(i), +low, +high, count);
  }
  return count[0];
}

function dfs(
  i: number,
  left: number,
  number: string[],
  low: number,
  high: number,
  count: number[],
) {
  if (left > i - 1 - left) {
    let n = +number.join("");
    if (low <= n && n <= high) {
      count[0]++;
    }
    return;
  }

  for (let pair of Object.entries(pairs)) {
    if (pair[0] == "0" && left == 0 && i != 1) {
      continue;
    }
    if (left == i - 1 - left && pair[0] != pair[1]) {
      continue;
    }
    number[left] = pair[0];
    number[i - 1 - left] = pair[1];
    dfs(i, left + 1, number, low, high, count);
  }
}
