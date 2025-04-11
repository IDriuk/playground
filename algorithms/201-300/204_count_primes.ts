/*
  204. Count Primes
  Count the number of prime numbers less than a non-negative number, n.
*/

export function countPrimes(n: number): number {
  if (n <= 2) {
    return 0;
  }

  let res = n >> 1;
  let m = Math.floor(Math.sqrt(n - 1));
  let notPrime = Array(n).fill(false);

  for (let i = 3; i <= m; i += 2) {
    if (!notPrime[i]) {
      for (let j = i * i, step = i << 1; j < n; j += step) {
        if (!notPrime[j]) {
          notPrime[j] = true;
          --res;
        }
      }
    }
  }

  return res;
}
