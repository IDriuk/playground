/* 
  43. Multiply Strings

  Given two non-negative integers num1 and num2 represented as strings, 
  return the product of num1 and num2, also represented as a string.

  Note:
  The length of both num1 and num2 is < 110.
  Both num1 and num2 contain only digits 0-9.
  Both num1 and num2 do not contain any leading zero, except the number 0 itself.
  You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

export function multiplyStrings(s1: string, s2: string): string {
  if (s1 == null || s2 == null) {
    return "";
  }

  let a = s1.split("");
  let b = s2.split("");
  let m = a.length;
  let n = b.length;
  let multip = Array(m + n).fill(0);
  let res: number[] = [];

  for (let i = m - 1; i >= 0; i--) {
    let aNum = +a[i];
    for (let j = n - 1; j >= 0; j--) {
      let bNum = +b[j];
      multip[i + j + 1] += aNum * bNum;
      multip[i + j] += Math.floor(multip[i + j + 1] / 10);
      multip[i + j + 1] %= 10;
    }
  }

  for (let d of multip) {
    if (d || res.length) {
      res.push(d);
    }
  }

  return res.join("");
}
