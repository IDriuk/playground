/*
  345. Reverse Vowels of a String
  Write a function that takes a string as input and reverse only vowels of a string.
*/

export function reverseStringVowels(s: string) {
  if (s == null || s.length == 0) {
    return s;
  }
  let vowels = "aeiouAEIOU";
  let i = 0;
  let j = s.length - 1;
  let ar = s.split("");
  while (i < j) {
    while (i < j && !vowels.includes(ar[i])) {
      i++;
    }
    while (i < j && !vowels.includes(ar[j])) {
      j--;
    }
    let c = ar[i];
    ar[i] = ar[j];
    ar[j] = c;
    i++;
    j--;
  }
  return ar.join("");
}
