/*
  340. Longest Substring with At Most K Distinct Characters.
  Given a string, find the length of the longest substring T that contains at most k distinct characters.
*/

export function longestSubstringKDistinct(s: string, k: number) {
  let n = s.length;
  if (n * k == 0) {
    return 0;
  }

  let left = 0;
  let right = 0;
  let hashMap = new Map<string, number>();
  let maxLength = 1;

  while (right < n) {
    let character = s.charAt(right);
    if (hashMap.has(character)) {
      hashMap.delete(character);
    }
    hashMap.set(character, right++);
    if (hashMap.size == k + 1) {
      let leftmost = hashMap.entries().next();
      hashMap.delete(leftmost.value[0]);
      left = leftmost.value[1];
    }
    maxLength = Math.max(maxLength, right - left);
  }

  return maxLength;
}
