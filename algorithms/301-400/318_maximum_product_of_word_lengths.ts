/*
  318. Maximum Product of Word Lengths
  Given a string array words, 
  find the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters.
  You may assume that each word will contain only lower case letters.
  If no such two words exist, return 0.
*/

export function maxProductWordsLen(words: string[]) {
  words.sort((s1, s2) => s2.length - s1.length);
  let masks: number[] = Array(words.length);
  for (let i = 0; i < words.length; i++) {
    masks[i] = getBitMask(words[i]);
  }

  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].length * words[i].length <= max) {
      break;
    }
    for (let j = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) == 0) {
        max = Math.max(max, words[i].length * words[j].length);
        break;
      }
    }
  }
  return max;
}

function getBitMask(s: string) {
  let mask = 0;
  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) - "a".charCodeAt(0);
    mask |= 1 << index;
  }
  return mask;
}
