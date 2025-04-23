/*
  320. Generalized Abbreviation
  Write a function to generate the generalized abbreviations of a word.
  Note: 
  The order of the output does not matter.
*/

export function generalizedAbbreviations(word: string) {
  let ans: string[] = [];
  backtrack(ans, [], word, 0, 0);
  return ans;
}

function backtrack(
  ans: string[],
  builder: (string | number)[],
  word: string,
  i: number,
  k: number,
) {
  let len = builder.length;
  if (i == word.length) {
    if (k != 0) {
      builder.push(k);
    }
    ans.push(builder.join(""));
  } else {
    backtrack(ans, builder, word, i + 1, k + 1);
    if (k != 0) {
      builder.push(k);
    }
    builder.push(word.charAt(i));
    backtrack(ans, builder, word, i + 1, 0);
  }
  builder.length = len;
}
