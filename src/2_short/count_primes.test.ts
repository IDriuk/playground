// Count Primes
// Given an integer n, return the number of prime numbers that are strictly less than n.
// https://leetcode.com/problems/count-primes/
// connect: dp, interesting

var countPrimes = function(n: number) {
  let nonPrime = []
  let count = 0
  
  for ( let i = 2; i < n; i++ ) {
      if (!nonPrime[i]) {
          count++
          for ( let j = i; i * j < n; j++) {
              nonPrime[i * j] = true
          }
      } 
  }
  
  return count
};

test("count primes", () => {
  expect(countPrimes(10)).toBe(4)
  expect(countPrimes(0)).toBe(0)
  expect(countPrimes(1)).toBe(0)
})