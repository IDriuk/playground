/*
  230. Number of Digit One
  Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.
*/

export function countDigitOne(n: number) {
  let countr = 0;
  for (let i = 1; i <= n; i++) {
    let str = `${i}`;
    countr += count(str);
  }
  return countr;
}

function count(str: string) {
  let count = 0;
  let digits = str.split("");
  for (let d of digits) {
    if (d == "1") {
      count++;
    }
  }
  return count;
}
