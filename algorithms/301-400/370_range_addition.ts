/*
  370. Range Addition
  Assume you have an array of length n initialized with all 0's and are given k update operations.
  Each operation is represented as a triplet: [startIndex, endIndex, inc]
  which increments each element of subarray A[startIndex ... endIndex] (start index and end index inclusive) with inc.
  Return the modified array after all k operations were executed.
*/

export function rangeAddition(length: number, updates: number[][]) {
  let res = new Array(length).fill(0);
  for (let u of updates) {
    let [start, end, val] = u;
    res[start] += val;
    if (end + 1 < length) {
      res[end + 1] -= val;
    }
  }
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += res[i];
    res[i] = sum;
  }
  return res;
}
