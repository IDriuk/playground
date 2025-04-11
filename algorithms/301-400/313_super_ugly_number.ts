/*
  313. Super Ugly Number (quest)
  Write a program to find the nth super ugly number.
  Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.
*/

export function nthSuperUglyNumber(n: number, primes: number[]) {
  let len = primes.length;
  let index = Array<number>(len).fill(0);
  let res = Array<number>(n).fill(0);
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    let min = Infinity;
    for (let j = 0; j < len; j++) {
      min = Math.min(res[index[j]] * primes[j], min);
    }
    res[i] = min;
    for (let j = 0; j < len; j++) {
      if (res[i] % primes[j] == 0) {
        index[j]++;
      }
    }
  }
  return res[n - 1];
}
