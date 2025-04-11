/*
  266. Palindrome Permutation
  Given a string, determine if a permutation of the string could form a palindrome.
*/

export function palindromePermutation(s: string) {
  let set = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    if (!set.has(s.charAt(i))) {
      set.add(s.charAt(i));
    } else {
      set.delete(s.charAt(i));
    }
  }
  return set.size <= 1;
}
