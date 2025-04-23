/*
  72. Edit Distance
  Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.
  You have the following 3 operations permitted on a word:
  Insert a character
  Delete a character
  Replace a character
*/

export function editDistance(word1: string, word2: string): number {
  if (word1 == word2) {
    return 0;
  }

  let m = word1.length;
  let n = word2.length;

  let d = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(null));

  d[0][0] = 0;

  for (let i = 1; i < m + 1; i++) {
    d[i][0] = i;
  }

  for (let j = 1; j < n + 1; j++) {
    d[0][j] = j;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      d[i][j] = Math.min(
        Math.min(d[i][j - 1] + 1, d[i - 1][j] + 1),
        word1.charAt(i - 1) == word2.charAt(j - 1)
          ? d[i - 1][j - 1]
          : d[i - 1][j - 1] + 1,
      );
    }
  }

  return d[m][n];
}
