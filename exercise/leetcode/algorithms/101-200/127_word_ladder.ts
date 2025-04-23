/*
  127. Word Ladder
  Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence(s) from beginWord to endWord, such that:
  Only one letter can be changed at a time
  Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

  Note:
    Return 0 if there is no such transformation sequence.
    All words have the same length.
    All words contain only lowercase alphabetic characters.
    You may assume no duplicates in the word list.
    You may assume beginWord and endWord are non-empty and are not the same.
*/

export function wordLadder(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  let dict = new Set<string>(wordList);
  let queue: string[] = [];
  queue.push(beginWord);
  dict.delete(beginWord);
  let length = 0;

  while (queue.length > 0) {
    length++;
    for (let i = queue.length; i > 0; i--) {
      let word: string = queue.shift()!;
      if (word == endWord) {
        return length;
      }
      for (let i = 0; i < word.length; i++) {
        for (let j = 97; j <= 122; j++) {
          let c = String.fromCharCode(j);
          let chars = word.split("");
          if (chars[i] == c) {
            continue;
          }
          chars[i] = c;
          let next = chars.join("");
          if (dict.has(next)) {
            queue.push(next);
            dict.delete(next);
          }
        }
      }
    }
  }
  return length;
}
