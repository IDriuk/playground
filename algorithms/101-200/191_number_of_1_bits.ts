/*
  191. Number of 1 Bits
  Write a function that takes an unsigned integer and returns the number of '1' bits it has ( also known as the Hamming weight).
*/

export function hammingWeight(n: number): number {
  let bits = 0;
  let mask = 1;

  for (let i = 0; i < 32; i++) {
    if ((n & mask) != 0) {
      bits++;
    }
    mask <<= 1;
  }

  return bits;
}
