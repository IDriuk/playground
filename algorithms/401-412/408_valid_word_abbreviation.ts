/*
  408. Valid Word Abbreviation
  Given a non-empty string s and an abbreviation abbr,
  return whether the string matches with the given abbreviation.
  A string such as "word" contains only the following valid abbreviations:
  Notice that only the above abbreviations are valid abbreviations of the string "word".
  Any other string is not a valid abbreviation of "word".
  Note:
  Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.
*/

export function validWordAbbreviation(word: string, abbr: string) {
  if (word == null && abbr == null) {
    return true;
  }
  if (word == null || abbr == null) {
    return false;
  }
  let pWord = 0;
  let pAbbr = 0;
  while (pWord < word.length && pAbbr < abbr.length) {
    let end = pAbbr;
    while (
      end < abbr.length &&
      0 <= +abbr.charAt(end) &&
      +abbr.charAt(end) <= 9
    ) {
      end++;
    }
    if (end == pAbbr) {
      if (abbr.charAt(pAbbr) != word.charAt(pWord)) {
        return false;
      }
      pAbbr++;
      pWord++;
    } else {
      if (abbr.charAt(pAbbr) == "0") {
        return false;
      }
      let abbreviated = parseInt(abbr.substring(pAbbr, end));
      pWord += abbreviated;
      pAbbr = end;
    }
  }
  return pWord == word.length && pAbbr == abbr.length;
}
