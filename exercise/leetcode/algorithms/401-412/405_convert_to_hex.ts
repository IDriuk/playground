/*
  405. Convert a Number to Hexadecimal
  Given an integer, write an algorithm to convert it to hexadecimal.
  For negative integer, two's complement method is used.
*/

export function convertToHex(num: number) {
  if (num == 0) {
    return "0";
  }
  let mask = 15;
  let res = [];
  while (num != 0) {
    let index = num & mask;
    let c = String.fromCharCode(
      index < 10 ? "0".charCodeAt(0) + index : "a".charCodeAt(0) + index - 10,
    );
    res.unshift(c);
    num >>>= 4;
  }
  return res.join("");
}
