/* 
  17. Letter Combinations of a Phone Number
  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
  A mapping of digit to letters, just like on the telephone buttons, is given below. 
  Note that 1 does not map to any letters. 
  Note:
  Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

const LETTERS = [
  " ",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];

export function phoneLetterCombos(num: string): string[] {
  let nums = num.split("");
  let res = [""];

  for (let i = 0; i < nums.length; i++) {
    for (let j = res.length; j > 0; j--) {
      let s = res.shift();
      let letters = LETTERS[+nums[i]].split("");
      for (let k = 0; k < letters.length; k++) {
        res.push(s + letters[k]);
      }
    }
  }

  return res;
}
