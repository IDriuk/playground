/*
  243. Shortest Word Distance
  Given a list of words and two words word1 and word2,
  return the shortest distance between these two words in the list.
*/

export function shortestDistance(
  words: string[],
  word1: string,
  word2: string,
) {
  let i1 = -1;
  let i2 = -1;

  let minDistance = words.length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] == word1) {
      i1 = i;
    } else if (words[i] == word2) {
      i2 = i;
    }

    if (i1 != -1 && i2 != -1) {
      minDistance = Math.min(minDistance, Math.abs(i1 - i2));
    }
  }

  return minDistance;
}
