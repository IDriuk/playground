/*
  245. Shortest Word Distance III
  Given a list of words and two words word1 and word2,
  return the shortest distance between these two words in the list.
  word1 and word2 may be the same and they represent two individual words in the list.
*/

export function shortestDistance3(
  words: string[],
  word1: string,
  word2: string,
) {
  let prevIndex = -1;
  let min = words.length;
  let same = word1 == word2;

  for (let i = 0; i < words.length; i++) {
    if (words[i] == word1 || words[i] == word2) {
      if (prevIndex != -1 && (same || words[prevIndex] != words[i])) {
        min = Math.min(i - prevIndex, min);
      }
      prevIndex = i;
    }
  }

  return min;
}
