/*
  140. Word Break II
  Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
  add spaces in s to construct a sentence where each word is a valid dictionary word.
  Return all such possible sentences.

  Note:
  The same word in the dictionary may be reused multiple times in the segmentation.
  You may assume the dictionary does not contain duplicate words.
*/

export function wordBreak2(s: string, wordDict: string[]): string[] {
  let dp = [[""]];

  for (let i = 1; i <= s.length; i++) {
    let list = [];
    for (let j = 0; j < i; j++) {
      if (dp[j]?.length > 0 && wordDict.includes(s.substring(j, i))) {
        for (let l of dp[j]) {
          list.push(l + (l == "" ? "" : " ") + s.substring(i, j));
        }
      }
      dp[i] = list;
    }
  }

  return dp[s.length];
}
