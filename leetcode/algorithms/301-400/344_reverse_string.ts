/*
  344. Reverse String
  Write a function that takes a string as input and returns the string reversed.
*/

export function reverseString(s: string) {
  if (!s || s.length < 2) {
    return s;
  }

  let i = 0;
  let j = s.length - 1;
  let ar = s.split("");

  while (i < j) {
    let tmp = ar[i];
    ar[i] = ar[j];
    ar[j] = tmp;
    i++;
    j--;
  }

  return ar.join("");
}
