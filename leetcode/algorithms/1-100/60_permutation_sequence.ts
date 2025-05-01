/* 
  60. Permutations sequence
  The set [1,2,3,...,n] contains a total of n! unique permutations.

  By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
  "123"
  "132"
  "214"
  "231"
  "312"
  "321"
  
  Given n and k, return the kth permutation sequence.

  Note:
  Given n will be between 1 and 9
  Given k will be between 1 and n! inclusive
*/

export function permutationSequence(n: number, k: number): string {
  k = k - 1;

  let factor = 1;

  for (let i = 1; i < n; i++) {
    factor *= i;
  }

  let digits = [];

  for (let i = 0; i < n; i++) {
    digits.push(i + 1);
  }

  let res: string[] = [];
  for (let i = 0; i < n; i++) {
    let index = Math.floor(k / factor);
    res.push(`${digits[index]}`);
    digits.splice(index, 1);
    k = k % factor;
    if (i < n - 1) {
      factor = Math.floor(factor / (n - 1 - i));
    }
  }

  return res.join("");
}
