/*
  115. Distinct Subsequences
  Given a string S and a string T, count the number of distinct subsequences of S which equals T.

  A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
  (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
*/

export function distinctSubsequences(s: string, t: string): number {
  if (s == null || t == null) {
    return 0;
  }
  let m = t.length;
  let n = s.length;
  if (m > n) {
    return 0;
  }
  let dp = Array(m + 1)
    .fill(null)
    .map((_) => Array(n + 1).fill(null));

  for (let i = 0; i <= n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        dp[i][j - 1] +
        (t.charAt(i - 1) == s.charAt(j - 1) ? dp[i - 1][j - 1] : 0);
    }
  }

  return dp[m][n];
}
