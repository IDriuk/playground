// Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/submissions/
// connect: recursion, combinations

// let dMap: Record<string, string[]> = {
//   "2": ["a", "b", "c"],
//   "3": ["d", "e", "f"],
//   "4": ["g", "h", "i"],
//   "5": ["j", "k", "l"],
//   "6": ["m", "n", "o"],
//   "7": ["p", "q", "r", "s"],
//   "8": ["t", "u", "v"],
//   "9": ["w", "x", "y", "z"]
// }



// Test cases
describe('Letter Combinations of a Phone Number', () => {
   test('Empty input should return empty array', () => {
      //  expect(letterCombinations("")).toEqual([]);
   });

  //  test('Single digit input', () => {
  //      expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  //      expect(letterCombinations("5")).toEqual(["j", "k", "l"]);
  //      expect(letterCombinations("9")).toEqual(["w", "x", "y", "z"]);
  //  });

  //  test('Two digit input', () => {
  //      expect(letterCombinations("23")).toEqual([
  //          "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"
  //      ]);
  //      expect(letterCombinations("57")).toEqual([
  //          "jp", "jq", "jr", "js", "kp", "kq", "kr", "ks", "lp", "lq", "lr", "ls"
  //      ]);
  //  });

  //  test('Three digit input', () => {
  //      expect(letterCombinations("234")).toEqual([
  //          "adg", "adh", "adi", "aeg", "aeh", "aei", "afg", "afh", "afi",
  //          "bdg", "bdh", "bdi", "beg", "beh", "bei", "bfg", "bfh", "bfi",
  //          "cdg", "cdh", "cdi", "ceg", "ceh", "cei", "cfg", "cfh", "cfi"
  //      ]);
  //  });

  //  test('Four digit input', () => {
  //      const result = letterCombinations("7294");
  //      expect(result).toContain("pawg");
  //      expect(result).toContain("rbyi");
  //  });

  //  test('Handle digits with 4 letters (7 and 9)', () => {
  //      expect(letterCombinations("79")).toHaveLength(16); // 4*4 = 16 combinations
  //      const result = letterCombinations("79");
  //      ["pw", "px", "py", "pz", "qw", "qx", "qy", "qz", 
  //       "rw", "rx", "ry", "rz", "sw", "sx", "sy", "sz"].forEach(combo => {
  //          expect(result).toContain(combo);
  //      });
  //  });

  //  test('Performance - longer input should complete in reasonable time', () => {
  //      // This test checks that the function can handle longer inputs efficiently
  //      const result = letterCombinations("23456");
  //      expect(result.length).toBe(3 * 3 * 3 * 3 * 3); // 243 combinations
  //  });


});