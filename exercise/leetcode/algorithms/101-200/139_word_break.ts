/*
  139. Word Break
  Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
  determine if s can be segmented into a space-separated sequence of one or more dictionary words.

  Note:
  The same word in the dictionary may be reused multiple times in the segmentation.
  You may assume the dictionary does not contain duplicate words.
*/

export function wordBreak(s: string, wordDict: string[]): boolean {
  let dp = [true];

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }

  return !!dp[s.length];
}
