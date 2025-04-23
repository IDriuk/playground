import {
  twoSum,
  addTwoNumbers,
  longestWithoutRepeating,
  medianOfTwoSortedArrays,
  getLongestPalindrom,
  zigzag,
  reverseInteger,
  atoi,
  isPalindromeNumber,
  isMatchingRegex,
  mostWaterContainer,
  integerToRoman,
  romanToInteger,
  longestCommonPrefix,
  treeSum,
  treeSumClosest,
  phoneLetterCombos,
  fourSum,
  removeNthFromEnd,
  validParentheses,
  mergeTwoLists,
  generateParentheses,
  mergeKLists,
  swapNodesPairs,
  reverseKGroups,
  removeDuplicatesFromSortedArray,
  removeElement,
  strStr,
  divide,
  substringWithConcatenation,
  nextPermutation,
  longestValidParentheses,
  searchRotatedArray,
  searchRange,
  searchInsertPosition,
  isValidSudoku,
  /* sudoku_solver empty solution */
  countSay,
  combinationSum,
  combinationSum2,
  firstMissingPositive,
  trappingRainWater,
  multiplyStrings,
  wildcardMatch,
  getJumps2,
  permutations,
  permutations2,
  rotateImage,
  groupAnagrams,
  pow,
  nQueens,
  nQueens2,
  maximumSubarray,
  spiralMatrix,
  mergeIntervals,
  getJumps,
  insertInterval,
  lengthOfLastWord,
  spiralMatrix2,
  permutationSequence,
  rotateList,
  uniquePaths,
  /* unique_paths_2 empty solution */
  minimumPathSum,
  validNumber,
  plusOne,
  addBinary,
  fullJustify,
  sqrt,
  climbingStairs,
  simplifyPath,
  editDistance,
  setMatrixZeroes,
  search2DMatrix,
  sortColors,
  minimumWindowSubstring,
  getCombinations,
  getSubsets,
  wordSearch,
  removeDuplicatesFromSortedArray2,
  searchRotatedArray2,
  removeDuplicatesFromSortedList2,
  removeDuplicatesFromSortedList,
  largestRectangleInHistogram,
  maximalRectangle,
  partitionList,
  /* 87_scramble_string (very complex) */
  mergeSortedArray,
  grayCode,
  getSubsets2,
  decodeWays,
  reverseLinkedList2,
  restoreIPAddresses,
  binaryTreeInorderTraversal,
  uniqueBinarySearchTrees2,
  uniqueBinarySearchTrees,
  isInterleave,
  isValidBST,
  recoverBST,
  isSameTree,
} from "../algorithms";

describe("Algorithm tests from 1 to 100", () => {
  // 1. Two Sum
  it("Should return indices of the two numbers such that they add up to a specific target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).to.deep.equal([0, 1]);
  });

  // 2. Add two numbers.
  it("Should return linked list with sum of two numbers", () => {
    let l1 = { val: 2, next: { val: 4, next: { val: 3 } } };
    let l2 = { val: 5, next: { val: 6, next: { val: 4 } } };
    expect(addTwoNumbers(l1, l2)).to.deep.equal({
      val: 7,
      next: {
        val: 0,
        next: {
          val: 8,
        },
      },
    });
  });

  // 3. Longest Substring Without Repeating Characters
  it("Should return the length of the longest substring without repeating characters", () => {
    expect(longestWithoutRepeating("abcabcbb")).to.equal(3);
    expect(longestWithoutRepeating("bbbbb")).to.equal(1);
    expect(longestWithoutRepeating("pwwkew")).to.equal(3);
  });

  // 4. Median of two sorted arrays
  it("Should return the median of two sorted arrays", () => {
    expect(medianOfTwoSortedArrays([1, 3], [2])).to.equal(2);
    expect(medianOfTwoSortedArrays([1, 2], [3, 4])).to.equal(2.5);
  });

  // 5. Longest palindromic substring
  it("Should return longest palindromic substring", () => {
    expect(getLongestPalindrom("babad")).to.equal("bab");
    expect(getLongestPalindrom("cbbd")).to.equal("bb");
  });

  // 6. Zigzag Сonversion
  it("Should return zigzag convertion to given number of rows", () => {
    expect(zigzag("PAYPALISHIRING", 3)).to.equal("PAHNAPLSIIGYIR");
    expect(zigzag("PAYPALISHIRING", 4)).to.equal("PINALSIGYAHRPI");
  });

  // 7. Reverse integer
  it("Should reverse integer", () => {
    expect(reverseInteger(123)).to.equal(321);
    expect(reverseInteger(-123)).to.equal(-321);
    expect(reverseInteger(120)).to.equal(21);
  });

  // 8. String to integer
  it("Should convert string to integer", () => {
    expect(atoi("42")).to.equal(42);
    expect(atoi("-42")).to.equal(-42);
    expect(atoi("4193 with words")).to.equal(4193);
    expect(atoi("words and 987")).to.equal(0);
  });

  // 9. Palindrome number
  it("Should determine if integer is palindrome", () => {
    expect(isPalindromeNumber(121)).to.equal(true);
    expect(isPalindromeNumber(-121)).to.equal(false);
    expect(isPalindromeNumber(10)).to.equal(false);
  });

  // 10. Regular Expression Matching
  it("Should match regular expression", () => {
    expect(isMatchingRegex("aab", "c*a*b*")).to.equal(true);
    expect(isMatchingRegex("aa", "a")).to.equal(false);
    expect(isMatchingRegex("aa", "a*")).to.equal(true);
    expect(isMatchingRegex("ab", ".*")).to.equal(true);
    expect(isMatchingRegex("mississippi", "mis*is*p*")).to.equal(false);
  });

  // 11. Container With Most Water
  it("Should contain the most water", () => {
    expect(mostWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).to.equal(49);
  });

  // 12. Integer to Roman
  it("Should convert integer to roman", () => {
    expect(integerToRoman(3)).to.equal("III");
    expect(integerToRoman(4)).to.equal("IV");
    expect(integerToRoman(9)).to.equal("IX");
    expect(integerToRoman(58)).to.equal("LVIII");
    expect(integerToRoman(1994)).to.equal("MCMXCIV");
  });

  // 13. Roman to Integer
  it("Should convert roman to integer", () => {
    expect(romanToInteger("III")).to.equal(3);
    expect(romanToInteger("IV")).to.equal(4);
    expect(romanToInteger("IX")).to.equal(9);
    expect(romanToInteger("LVIII")).to.equal(58);
    expect(romanToInteger("MCMXCIV")).to.equal(1994);
  });

  // 14. Longest Common Prefix
  it("Should find the longest common prefix amongst array of strings", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).to.equal("fl");
    expect(longestCommonPrefix(["dog", "racecar", "car"])).to.equal("");
  });

  // 15. 3Sum
  it("Should return triplets which gives the sum of zero.", () => {
    expect(treeSum([-1, 0, 1, 2, -1, -4])).to.deep.equal([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  // 16. 3Sum Closest
  it("Should return sum of triplet which is closest to target.", () => {
    expect(treeSumClosest([-1, 2, 1, -4], 1)).to.equal(2);
  });

  // 17. Letter Combinations of a Phone Number
  it("Should return sum of triplet which is closest to target.", () => {
    expect(phoneLetterCombos("23")).to.deep.equal([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });

  // 18. 4Sum
  it("Should return quadruplets which sum is equal to target.", () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).to.deep.equal([
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ]);
  });

  // 19. Remove Nth Node From End of List
  it("Should return list without n-th node from the end", () => {
    let l1 = {
      val: 1,
      next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5 } } } },
    };
    let l2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 5 } } } };
    expect(removeNthFromEnd(l1, 2)).to.deep.equal(l2);
  });

  // 20. Valid Parentheses
  it("Should determine valid parentheses", () => {
    expect(validParentheses("()")).to.equal(true);
    expect(validParentheses("()[]{}")).to.equal(true);
    expect(validParentheses("(]")).to.equal(false);
    expect(validParentheses("([)]")).to.equal(false);
    expect(validParentheses("{[]}")).to.equal(true);
  });

  // 21. Merge Two Sorted Lists
  it("Should merge two sorted lists", () => {
    let l1 = { val: 1, next: { val: 2, next: { val: 4 } } };
    let l2 = { val: 1, next: { val: 3, next: { val: 4 } } };
    let res = {
      val: 1,
      next: {
        val: 1,
        next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4 } } } },
      },
    };
    expect(mergeTwoLists(l1, l2)).to.deep.equal(res);
  });

  // 22. Generate Parentheses
  it("Should generate parenthesees", () => {
    expect(generateParentheses(3)).to.deep.equal(
      ["((()))", "(()())", "(())()", "()(())", "()()()"].reverse(),
    );
  });

  // 23. Merge k Sorted Lists
  it("Should merge k sorted lists", () => {
    expect(
      mergeKLists([
        { val: 1, next: { val: 4, next: { val: 5 } } },
        { val: 1, next: { val: 3, next: { val: 4 } } },
        { val: 2, next: { val: 6 } },
      ]),
    ).to.deep.equal({
      val: 1,
      next: {
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 4,
              next: { val: 4, next: { val: 5, next: { val: 6 } } },
            },
          },
        },
      },
    });
  });

  // 24. Swap Nodes in Pairs
  it("Should generate parenthesees", () => {
    expect(
      swapNodesPairs({
        val: 1,
        next: { val: 2, next: { val: 3, next: { val: 4 } } },
      }),
    ).to.deep.equal({
      val: 2,
      next: { val: 1, next: { val: 4, next: { val: 3, next: undefined } } },
    });
  });

  // 25. Reverse Nodes in k-Group
  it("Should reverse k-groups in list", () => {
    expect(
      reverseKGroups(
        {
          val: 1,
          next: {
            val: 2,
            next: { val: 3, next: { val: 4, next: { val: 5 } } },
          },
        },
        2,
      ),
    ).to.deep.equal({
      val: 2,
      next: {
        val: 1,
        next: { val: 4, next: { val: 3, next: { val: 5 } } },
      },
    });
    expect(
      reverseKGroups(
        {
          val: 1,
          next: {
            val: 2,
            next: { val: 3, next: { val: 4, next: { val: 5 } } },
          },
        },
        3,
      ),
    ).to.deep.equal({
      val: 3,
      next: {
        val: 2,
        next: { val: 1, next: { val: 4, next: { val: 5 } } },
      },
    });
  });

  // 26. Remove Duplicates from Sorted Array
  it("Should return length of array without duplicates", () => {
    expect(removeDuplicatesFromSortedArray([1, 1, 2])).to.equal(2);
    expect(
      removeDuplicatesFromSortedArray([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]),
    ).to.equal(5);
  });

  // 27. Remove Element
  it("Should return array length without removed elements", () => {
    expect(removeElement([3, 2, 2, 3], 3)).to.equal(2);
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).to.equal(5);
  });

  // 28. Implement strStr().
  it("Should return position of substring", () => {
    expect(strStr("hello", "ll")).to.equal(2);
    expect(strStr("aaaaa", "bba")).to.equal(-1);
  });

  // 29. Divide Two Integers
  it("Should divide integers without divide and multiply operators", () => {
    expect(divide(10, 3)).to.equal(3);
    expect(divide(7, -3)).to.equal(-2);
  });

  // 30. Substring with Concatenation of All Words
  it("Should find concatenated substrings in string", () => {
    expect(
      substringWithConcatenation("barfoothefoobarman", ["foo", "bar"]),
    ).to.deep.equal([0, 9]);
  });

  // 31. Next Permutation
  it("Should make next permutation", () => {
    expect(nextPermutation([1, 2, 3])).to.deep.equal([1, 3, 2]);
    expect(nextPermutation([3, 2, 1])).to.deep.equal([1, 2, 3]);
    expect(nextPermutation([1, 1, 5])).to.deep.equal([1, 5, 1]);
  });

  // 32. Longest Valid Parentheses
  it("Should return length of longest valid parentheses", () => {
    expect(longestValidParentheses("(()")).to.equal(2);
    expect(longestValidParentheses(")()())")).to.equal(4);
  });

  // 33. Search in Rotated Sorted Array
  it("Should return index of element in rotated array", () => {
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)).to.equal(4);
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)).to.equal(-1);
  });

  // 34. Find first and last position of element in sorted array
  it("Should return range with first and last position of element", () => {
    expect(searchRange([5, 7, 7, 8, 8, 10], 8)).to.deep.equal([3, 4]);
    expect(searchRange([5, 7, 7, 8, 8, 10], 6)).to.deep.equal([-1, -1]);
  });

  // 35. Search insert position
  it("Should return index of target or insert postion", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).to.equal(2);
    expect(searchInsertPosition([1, 3, 5, 6], 2)).to.equal(1);
    expect(searchInsertPosition([1, 3, 5, 6], 7)).to.equal(4);
    expect(searchInsertPosition([1, 3, 5, 6], 0)).to.equal(0);
  });

  // 36. Valid Sudoku
  it("Should validate sudoku", () => {
    let board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ];
    expect(isValidSudoku(board)).to.equal(true);
    board[0][0] = "8";
    expect(isValidSudoku(board)).to.equal(false);
  });

  // 38. Count and say
  it("Should generate n-th term of the count and say", () => {
    expect(countSay(1)).to.equal("1");
    expect(countSay(4)).to.equal("1211");
  });

  // 39. Combination Sum
  it("Should return array with arrays where digits sums to target", () => {
    expect(combinationSum([2, 3, 6, 7], 7).reverse()).to.deep.equal([
      [7],
      [2, 2, 3],
    ]);
    expect(combinationSum([2, 3, 5], 8)).to.deep.equal([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  // 40. Combination Sum II
  it("Should return combinations sums to target without repeating ", () => {
    expect(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)).to.deep.equal([
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ]);
    expect(combinationSum2([2, 5, 2, 1, 2], 5)).to.deep.equal([[1, 2, 2], [5]]);
  });

  // 41. First Missing Positive
  it("Should return first missing positive", () => {
    expect(firstMissingPositive([1, 2, 0])).to.equal(3);
    expect(firstMissingPositive([3, 4, -1, 1])).to.equal(2);
    expect(firstMissingPositive([7, 8, 9, 11, 12])).to.equal(1);
  });

  // 42. Trapping rain water
  it("Should return amount of trapped water after raining", () => {
    expect(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).to.equal(6);
  });

  // 43. Multiply Strings
  it("Should multiply string without converting", () => {
    expect(multiplyStrings("2", "3")).to.equal("6");
    expect(multiplyStrings("123", "456")).to.equal("56088");
  });

  // 44. Wildcard Matching
  it("Should return true if pattern matches the string", () => {
    expect(wildcardMatch("aa", "a")).to.equal(false);
    expect(wildcardMatch("aa", "*")).to.equal(true);
    expect(wildcardMatch("cb", "?a")).to.equal(false);
    expect(wildcardMatch("adceb", "*a*b")).to.equal(true);
    expect(wildcardMatch("acdcb", "a*c?b")).to.equal(false);
    expect(wildcardMatch("abcdefg", "123*efg")).to.equal(false);
  });

  // 45. Jump Game II
  it("Should return the minimum number of jumps to reach the last index", () => {
    expect(getJumps2([2, 3, 1, 1, 4])).to.equal(2);
  });

  // 46. Permutations
  it("Should return all possible permutations", () => {
    expect(permutations([1, 2, 3])).to.deep.equal([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2],
    ]);
  });

  // 47. Permutations II
  it("Should return all possible unique permutations ", () => {
    expect(permutations2([1, 1, 2])).to.deep.equal([
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ]);
  });

  // 48. Rotate Image
  it("Should rotate image in-place clockwise", () => {
    expect(
      rotateImage([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).to.deep.equal([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);

    expect(
      rotateImage([
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ]),
    ).to.deep.equal([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  // 49. Group Anagrams
  it("Should group anagrams", () => {
    expect(
      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]),
    ).to.deep.equal([["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
  });

  // 50. Pow(x,n)

  it("Should calculate pow", () => {
    expect(pow(2, 10)).to.equal(1024);
    expect(pow(2.1, 3)).to.equal(9.261000000000001);
    expect(pow(2, -2)).to.equal(0.25);
    expect(pow(3, 3)).to.equal(27);
  });

  // 51. N-Queens
  it("Should return n queens positions", () => {
    expect(nQueens(4)).to.deep.equal([
      [".Q..", "...Q", "Q...", "..Q."],
      ["..Q.", "Q...", "...Q", ".Q.."],
    ]);
  });

  // 52. N-Queens II
  it("Should return the number of distinct n queens positions", () => {
    expect(nQueens2(4)).to.equal(2);
  });

  // 53. Maximum Subarray
  it("Should return sum of contigous subarray with max sum", () => {
    expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
  });

  // 54. Spiral Matrix
  it("Should return all elements of the matrix in spiral order", () => {
    expect(
      spiralMatrix([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).to.deep.equal([1, 2, 3, 6, 9, 8, 7, 4, 5]);

    expect(
      spiralMatrix([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ]),
    ).to.deep.equal([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  // 55. Jump Game
  it("Should determine if you are able to reach the last index", () => {
    expect(getJumps([2, 3, 1, 1, 4])).to.equal(true);
    expect(getJumps([3, 2, 1, 0, 4])).to.equal(false);
  });

  // 56. Merge intervals
  it("Should return merged intervals", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).to.deep.equal([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);

    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ]),
    ).to.deep.equal([[1, 5]]);
  });

  // 57. Insert Interval
  it("Should insert interval", () => {
    expect(
      insertInterval(
        [
          [1, 3],
          [6, 9],
        ],
        [2, 5],
      ),
    ).to.deep.equal([
      [1, 5],
      [6, 9],
    ]);

    expect(
      insertInterval(
        [
          [1, 2],
          [3, 5],
          [6, 7],
          [8, 10],
          [12, 16],
        ],
        [4, 8],
      ),
    ).to.deep.equal([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });

  // 58.  Length of Last Word
  it("Should return the length of last word", () => {
    expect(lengthOfLastWord("Hello World")).to.equal(5);
  });

  // 59. Spiral Matrix II
  it("Should create spiral matrix", () => {
    expect(spiralMatrix2(3)).to.deep.equal([
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ]);
  });

  // 60. Permutations sequence
  it("Should return k-th permutation", () => {
    expect(permutationSequence(3, 3)).to.equal("213");
    expect(permutationSequence(4, 9)).to.equal("2314");
  });

  // 61. Rotate List
  it("Should rotate list by k places", () => {
    let list = {
      val: 1,
      next: {
        val: 2,
        next: { val: 3, next: { val: 4, next: { val: 5, next: undefined } } },
      },
    };
    let rotatedList = {
      val: 4,
      next: {
        val: 5,
        next: {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: undefined,
            },
          },
        },
      },
    };
    expect(rotateList(list, 2)).to.deep.equal(rotatedList);

    let list1 = {
      val: 0,
      next: {
        val: 1,
        next: { val: 2, next: undefined },
      },
    };

    let rotatedList1 = {
      val: 2,
      next: {
        val: 0,
        next: { val: 1, next: undefined },
      },
    };

    expect(rotateList(list1, 4)).to.deep.equal(rotatedList1);
  });

  // 62. Unique Paths
  it("Should return number of unique paths", () => {
    expect(uniquePaths(3, 2)).to.equal(3);
    expect(uniquePaths(7, 3)).to.equal(28);
  });

  // 64. Minimum path sum
  it("Should return minimum path to right bottom", () => {
    expect(
      minimumPathSum([
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ]),
    ).to.equal(7);
  });

  // 65. Valid Number
  it("Should determine valid number", () => {
    expect(validNumber("0")).to.equal(true);
    expect(validNumber("0.1")).to.equal(true);
    expect(validNumber("abc")).to.equal(false);
    expect(validNumber("1 a")).to.equal(false);
    expect(validNumber("2e10")).to.equal(true);
    expect(validNumber("-90e3")).to.equal(true);
    expect(validNumber("1e")).to.equal(false);
    expect(validNumber("e3")).to.equal(false);
    expect(validNumber("6e-1")).to.equal(true);
    expect(validNumber("99e2.5")).to.equal(false);
    expect(validNumber("53.5e93")).to.equal(true);
    expect(validNumber("--6")).to.equal(false);
    expect(validNumber("-+3")).to.equal(false);
    expect(validNumber("95a54e53")).to.equal(false);
  });

  // 66. Plus One
  it("Should add one to number", () => {
    expect(plusOne([1, 2, 3])).to.deep.equal([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).to.deep.equal([4, 3, 2, 2]);
  });

  // 67. Add Binary
  it("Should add binaries", () => {
    expect(addBinary("11", "1")).to.equal("100");
    expect(addBinary("1010", "1011")).to.equal("10101");
  });

  // 68. Text Justification
  it("Should justify text", () => {
    expect(
      fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16),
    ).to.deep.equal([
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ]);
  });

  // 69. Sqrt(x)
  it("Should return sqrt", () => {
    expect(sqrt(4)).to.equal(2);
    expect(sqrt(8)).to.equal(2);
  });

  // 70. Climbing Stairs
  it("Should return number of ways to climb n stairs", () => {
    expect(climbingStairs(2)).to.equal(2);
    expect(climbingStairs(3)).to.equal(3);
  });

  // 71. Simplify Path
  it("Should return simplified unix path", () => {
    expect(simplifyPath("/home/")).to.equal("/home");
    expect(simplifyPath("/a/./b/../../c/")).to.equal("/c");
    expect(simplifyPath("/a/../../b/../c//.//")).to.equal("/c");
    expect(simplifyPath("/a//b////c/c//././/..")).to.equal("/a/b/c");
  });

  // 72. Edit Distance
  it("Should return minimum operations for word transform", () => {
    expect(editDistance("horse", "ros")).to.equal(3);
    expect(editDistance("intention", "execution")).to.equal(5);
  });

  // 73. Set Matrix Zeroes
  it("Should set matrix zeroes", () => {
    expect(
      setMatrixZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ]),
    ).to.deep.equal([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ]);
    expect(
      setMatrixZeroes([
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5],
      ]),
    ).to.deep.equal([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ]);
  });

  // 74. Search a 2D Matrix.
  it("Should search value in the matrix", () => {
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        3,
      ),
    ).to.deep.equal(true);
    expect(
      search2DMatrix(
        [
          [1, 3, 5, 7],
          [10, 11, 16, 20],
          [23, 30, 34, 50],
        ],
        13,
      ),
    ).to.deep.equal(false);
  });

  // 75. Sort Colors
  it("Should sort array with colors", () => {
    expect(sortColors([2, 0, 2, 1, 1, 0])).to.deep.equal([0, 0, 1, 1, 2, 2]);
  });

  // 76. Minimum Window Substring
  it("Should return minimum window", () => {
    expect(minimumWindowSubstring("ADOBECODEBANC", "ABC")).to.equal("BANC");
  });

  // 77. Combinations
  it("Should return combinations of k numbers out of n", () => {
    expect(getCombinations(4, 2)).to.deep.equal([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  // 78. Subsets
  it("Should return possible subsets", () => {
    expect(getSubsets([1, 2, 3])).to.deep.equal([
      [],
      [3],
      [2],
      [2, 3],
      [1],
      [1, 3],
      [1, 2],
      [1, 2, 3],
    ]);
  });

  // 79. Word search
  it("Should search word in the grid", () => {
    let board = [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ];
    expect(wordSearch(board, "ABCCED")).to.equal(true);
    expect(wordSearch(board, "SEE")).to.equal(true);
    expect(wordSearch(board, "ABCB")).to.equal(false);
  });

  // 80. Remove duplicates from sorted array II.
  it("Should remove duplicates appeared more than twice", () => {
    expect(removeDuplicatesFromSortedArray2([1, 1, 1, 2, 2, 3])).to.equal(5);
    expect(
      removeDuplicatesFromSortedArray2([0, 0, 1, 1, 1, 1, 2, 3, 3]),
    ).to.equal(7);
  });

  // 81. Search in Rotated Sorted Array II
  it("Should search in sorted rotated array with duplicates", () => {
    expect(searchRotatedArray2([2, 5, 6, 0, 0, 1, 2], 0)).to.equal(true);
    expect(searchRotatedArray2([2, 5, 6, 0, 0, 1, 2], 3)).to.equal(false);
  });

  // 82. Remove Duplicates from Sorted List II
  it("Should remove numbers which has duplicates", () => {
    expect(
      removeDuplicatesFromSortedList2({
        val: 1,
        next: {
          val: 2,
          next: {
            val: 3,
            next: {
              val: 3,
              next: { val: 4, next: { val: 4, next: { val: 5 } } },
            },
          },
        },
      }),
    ).to.deep.equal({ val: 1, next: { val: 2, next: { val: 5 } } });
    expect(
      removeDuplicatesFromSortedList2({
        val: 1,
        next: {
          val: 1,
          next: {
            val: 1,
            next: {
              val: 2,
              next: { val: 3 },
            },
          },
        },
      }),
    ).to.deep.equal({ val: 2, next: { val: 3 } });
  });

  // 83. Remove Duplicates from Sorted List
  it("Should remove duplicates such that each element appear only once", () => {
    expect(
      removeDuplicatesFromSortedList({
        val: 1,
        next: {
          val: 1,
          next: {
            val: 2,
          },
        },
      }),
    ).to.deep.equal({ val: 1, next: { val: 2 } });
    expect(
      removeDuplicatesFromSortedList({
        val: 1,
        next: {
          val: 1,
          next: {
            val: 2,
            next: { val: 3, next: { val: 3 } },
          },
        },
      }),
    ).to.deep.equal({
      val: 1,
      next: { val: 2, next: { val: 3, next: undefined } },
    });
  });

  // 84. Largest Rectangle in Histogram
  it("Should return area of the largest rectangle in histogram", () => {
    expect(largestRectangleInHistogram([2, 1, 5, 6, 2, 3])).to.equal(10);
  });

  // 85. Maximal Rectangle
  it("Should return area of maximal rectangle", () => {
    expect(
      maximalRectangle([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"],
      ]),
    ).to.equal(6);
  });

  // 86. Partition List
  it("Should partition list", () => {
    let l1 = {
      val: 1,
      next: {
        val: 4,
        next: { val: 3, next: { val: 2, next: { val: 5, next: { val: 2 } } } },
      },
    };
    let l2 = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 2,
          next: { val: 4, next: { val: 3, next: { val: 5, next: null } } },
        },
      },
    };
    expect(partitionList(l1, 3)).to.deep.equal(l2);
  });

  // 88. Merge Sorted Array
  it("Should merge sorted array", () => {
    expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).to.deep.equal(
      [1, 2, 2, 3, 5, 6],
    );
  });

  // 89. Gray Code
  it("Should get gray code", () => {
    expect(grayCode(2)).to.deep.equal([0, 1, 3, 2]);
    expect(grayCode(0)).to.deep.equal([0]);
  });

  // 90. Subsets II
  it("Should return subsets with duplicate number", () => {
    expect(getSubsets2([1, 2, 2])).to.deep.equal([
      [],
      [1],
      [1, 2],
      [1, 2, 2],
      [2],
      [2, 2],
    ]);
  });

  // 91. Decode Ways
  it("Should return count of decode ways", () => {
    expect(decodeWays("12")).to.equal(2);
    expect(decodeWays("226")).to.equal(3);
  });

  // 92. Reverse Linked List II
  it("Should reverse part of linked list", () => {
    expect(
      reverseLinkedList2(
        {
          val: 1,
          next: {
            val: 2,
            next: { val: 3, next: { val: 4, next: { val: 5 } } },
          },
        },
        2,
        4,
      ),
    ).to.deep.equal({
      val: 1,
      next: {
        val: 4,
        next: { val: 3, next: { val: 2, next: { val: 5 } } },
      },
    });
  });

  // 93. Restore IP Addresses
  it("Should restore ip addresses", () => {
    expect(restoreIPAddresses("25525511135")).to.deep.equal([
      "255.255.11.135",
      "255.255.111.35",
    ]);
  });

  // 94. Binary Tree Inorder Traversal
  it("Should traverse tree inorder", () => {
    expect(
      binaryTreeInorderTraversal([1, null, 2, null, null, 3]),
    ).to.deep.equal([1, 3, 2]);
  });

  // 95. Unique Binary Search Trees II
  it("Should genereate unique binary search trees", () => {
    expect(uniqueBinarySearchTrees2(3)).to.deep.equal([
      [1, null, 2, null, 3],
      [1, null, 3, 2],
      [2, 1, 3],
      [3, 1, null, null, 2],
      [3, 2, null, 1],
    ]);
  });

  // 96. Unique Binary Search Trees
  it("Should count possible unique bst", () => {
    expect(uniqueBinarySearchTrees(3)).to.equal(5);
  });

  // 97. Interleaving String
  it("Should check interleaving string", () => {
    expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).to.equal(true);
  });

  // 98. Validate Binary Search Tree
  it("Should validate BST", () => {
    expect(isValidBST([2, 1, 3])).to.equal(true);
    expect(isValidBST([5, 1, 4, null, null, 3, 6])).to.equal(false);
  });

  // 99. Recover Binary Search Tree
  it("Should recover BST", () => {
    expect(recoverBST([1, 3, null, null, 2])).to.deep.equal([
      3,
      1,
      null,
      null,
      2,
    ]);

    expect(recoverBST([3, 1, 4, null, null, 2])).to.deep.equal([
      2,
      1,
      4,
      null,
      null,
      3,
    ]);
  });

  // 100. Same Tree
  it("Should compare two trees", () => {
    expect(isSameTree([1, 2, 3], [1, 2, 3])).to.equal(true);
    expect(isSameTree([1, 2], [1, null, 2])).to.equal(false);
  });
});
