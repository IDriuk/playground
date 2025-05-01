/*
  372. Super Pow (quest)
  Your task is to calculate ab mod 1337
  where a is a positive integer and b is an extremely large positive integer given in the form of an array.
*/

let BASE = 1337;

export function superPow(a: number, b: number[]) {
  return supPow(a, b, b.length);
}

function supPow(a: number, b: number[], length: number): number {
  if (length == 0) {
    return 1;
  }
  let lastDigit = b[length - 1];
  length--;
  return (powMod(supPow(a, b, length), 10) * powMod(a, lastDigit)) % BASE;
}

function powMod(a: number, k: number) {
  a %= BASE;
  let res = 1;
  for (let i = 0; i < k; i++) {
    res = (res * a) % BASE;
  }
  return res;
}
