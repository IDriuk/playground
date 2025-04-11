/*
  288. Unique Word Abbreviation
  An abbreviation of a word follows the form <first letter><number><last letter>.
  Below are some examples of word abbreviations:
  i|nternationalization|n ---> i18n
  Assume you have a dictionary and given a word, 
  find whether its abbreviation is unique in the dictionary.
  A word's abbreviation is unique if no other word from the dictionary has the same abbreviation.
*/

export function uniqueAbbreviation(s: string, dictionary: string[]) {
  for (let word of dictionary) {
    if (word.length == s.length && word[0] == s[0] && word.at(-1) == s.at(-1)) {
      return false;
    }
  }
  return true;
}
