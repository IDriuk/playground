/* 
  68. Text Justification
  Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

  You should pack your words in a greedy approach; that is , pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

  Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

  For the last line of text, it should be left justified and no extra space is inserted between words.

  Note:
  A word is defined as a character sequence consisting of non-space characters only.
  Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
  The input array words contains at least one word.
*/

export function fullJustify(words: string[], maxWidth: number): string[] {
  let lines = [];

  for (let i = 0, j = 0; i < words.length; i = j) {
    let len = -1;
    for (
      j = i;
      j < words.length && len + 1 + words[j].length <= maxWidth;
      j++
    ) {
      len += 1 + words[j].length;
    }

    let line = [];
    line.push(words[i]);
    let spaces = 1;
    let extra = 0;

    if (j != i + 1 && j < words.length) {
      let totalSpaces = maxWidth - len;
      let intervals = j - i - 1;
      spaces = Math.floor(totalSpaces / intervals) + 1;
      extra = totalSpaces % intervals;
    }

    for (let k = i + 1; k < j; k++) {
      for (let s = spaces; s > 0; s--) {
        line.push(" ");
      }
      if (extra > 0) {
        line.push(" ");
      }
      extra--;
      line.push(words[k]);
    }

    for (let r = maxWidth - line.join("").length; r > 0; r--) {
      line.push(" ");
    }

    lines.push(line.join(""));
  }
  return lines;
}
