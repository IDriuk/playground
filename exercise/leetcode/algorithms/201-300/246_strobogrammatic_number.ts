/*
  246. Strobogrammatic Number
  A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

  Write a function to determine if a number is strobogrammatic.
  The number is represented as a string.
*/

export function isStrobogrammatic(num: string) {
  let len = num.length / 2;

  for (let i = 0; i <= len; i++) {
    let d1 = num.charAt(i);
    let d2 = num.charAt(num.length - 1 - i);
    if (d1 == d2 && (d1 == "0" || d1 == "1" || d1 == "8")) {
      continue;
    } else if ((d1 == "6" && d2 == "9") || (d2 == "6" && d1 == "9")) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
