/*
  358. Rearrange String k Distance Apart
  Given a non-empty string s and an integer k,
  rearrange the string such that the same characters are at least distance k from each other.
  All input strings are given in lowercase letters.
  If it is not possible to rearrange the string, return the empty string "".
*/

export function rearrangeString(str: string, k: number) {
  let length = str.length;
  let count = new Array(26).fill(0);
  let valid = new Array(26).fill(0);

  for (let i = 0; i < length; i++) {
    count[str.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  let sb: string[] = [];
  for (let index = 0; index < length; index++) {
    let candidatePos = findValidMax(count, valid, index);
    if (candidatePos == -1) {
      return "";
    }
    count[candidatePos]--;
    valid[candidatePos] = index + k;
    sb.push(String.fromCharCode("a".charCodeAt(0) + candidatePos));
  }

  return sb.join("");
}

function findValidMax(count: number[], valid: number[], index: number) {
  let max = -Infinity;
  let candidatePos = -1;
  for (let i = 0; i < count.length; i++) {
    if (count[i] > 0 && count[i] > max && index >= valid[i]) {
      max = count[i];
      candidatePos = i;
    }
  }
  return candidatePos;
}
