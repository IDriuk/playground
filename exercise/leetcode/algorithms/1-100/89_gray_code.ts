/*
  89. Gray Code 
  The gray code is a binary numeral system where two successive values differ in only one bit.
  Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code.
  A gray code sequence must begin with 0.
*/

export function grayCode(n: number): number[] {
  let results: number[] = [0];
  for (let i = 0; i < n; i++) {
    let inc = 1 << i;
    for (let j = results.length - 1; j >= 0; j--) {
      results.push(results[j] + inc);
    }
  }
  return results;
}
