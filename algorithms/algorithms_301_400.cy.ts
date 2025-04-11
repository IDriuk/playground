import {
  additiveNumber,
  numberOfIslands2,
  rangeSumQuery,
  rangeSumQuery2D,
  rectangleEnclosingPixels,
  removeInvalidParentheses,
  /* 307_range_sum_query_mutable (c++ or java solution) */
  /* 308_range_sum_query_2d_mutable (c++ or java solution) */
  maxProfit5 /* (quest) */,
  findMinHeightTrees,
  sparseMatrixMultiplication,
  maxCoins,
  nthSuperUglyNumber /* (quest) */,
  verticalOrder,
  countSmaller,
  removeDuplicateLetters,
  shortestDistance4,
  maxProductWordsLen,
  bulbSwitcher,
  generalizedAbbreviations,
  maxNumber,
  coinChange,
  countComponents,
  wiggleSort2,
  maxSubArray,
  isPowerOfThree,
  countRangeSum,
  oddEvenList,
  longestIncreasingPath,
  minPatches,
  isValidSerialization,
  findItinerary,
  largestBSTSubtree,
  increasingTriplet,
  selfCrossing,
  palindromePairs,
  houseRobber3,
  countBits,
  depthSum,
  longestSubstringKDistinct,
  FlattenIterator,
  isPowerOfFour,
  integerBreak,
  reverseString,
  reverseStringVowels,
  MovingAverage,
  topKFrequent,
  TicTacToe,
  intersectionOfTwoArrays,
  intersectionOfTwoArrays2,
  numberOfPatterns,
  /* 352_data_stream_as_disjoint_intervals (c++ or java solution) */
  SnakeGame,
  maxEnvelopes,
  Twitter,
  isReflected,
  countNumberWithUniqueDigits,
  rearrangeString,
  Logger,
  sortTransformedArray,
  maxKilledEnemies,
  HitCounter,
  /* 363_max_sum_of_rectangle_no_larger_than_k (c++ or java solution) */
  depthSumInverse,
  canMeasureWater,
  findLeaves,
  isPerfectSquare,
  largestDivisibleSubset,
  plusOneList,
  rangeAddition,
  sumRecursive /* (quest) */,
  superPow /* (quest) */,
  kSmallestPairs,
  guessNumber,
  getMoneyAmount,
  wiggleMaxLength,
  combinationSum4,
  kthSmallestInSortedMatrix,
  PhoneDirectory,
  RandomizedSet,
  RandomizedCollection,
  RandomLinkNode,
  canConstructRansom,
  ShuffleArray,
  lexicalOrder,
  miniParser,
  firstUniqChar,
  lengthLongestPath,
  findTheDifference,
  lastRemaining,
  isRectangleCover,
  isSubsequence,
  /* 393_utf_8_validation (c++ or java solution) (quest) */
  decodeString,
  longestSubstringWithKRepeating,
  maxRotateFunction,
  integerReplacement,
  RandomIndex,
  findNthDigit,
  /* 399_evaluate_division (c++ or java solution) */
} from "../../../algorithms";

describe("Algorithm tests form 301 to 400", () => {
  // 301. Remove Invalid Parentheses
  it("Should remove invalid parentheses", () => {
    expect(removeInvalidParentheses("()())()")).to.deep.equal([
      "(())()",
      "()()()",
    ]);
  });

  // 302. Smallest Rectangle Enclosing Black Pixels
  it("Should return smallest rectangle enclosing pixels area", () => {
    expect(
      rectangleEnclosingPixels(
        ["0010", "0110", "0100"].map((el) => el.split("")),
        0,
        2,
      ),
    ).to.equal(6);
  });

  // 303. Range Sum Query - Immutable
  it("Should sum range", () => {
    let sumRange = rangeSumQuery([-2, 0, 3, -5, 2, -1]);
    expect(sumRange(0, 2)).to.equal(1);
    expect(sumRange(2, 5)).to.equal(-1);
    expect(sumRange(0, 5)).to.equal(-3);
  });

  // 304. Range Sum Query 2D - Immutable
  it("Should sum range in 2D", () => {
    let sumRange2D = rangeSumQuery2D([
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ]);
    expect(sumRange2D(2, 1, 4, 3)).to.equal(8);
    expect(sumRange2D(1, 1, 2, 2)).to.equal(11);
    expect(sumRange2D(1, 2, 2, 4)).to.equal(12);
  });

  // 305. Number of Islands II
  it("Should return number of islands", () => {
    expect(
      numberOfIslands2(3, 3, [
        [0, 0],
        [0, 1],
        [1, 2],
        [2, 1],
      ]),
    ).to.deep.equal([1, 1, 2, 3]);
  });

  // 306. Additive Number
  it("Should dermine additive sequence", () => {
    expect(additiveNumber("112358")).to.be.true;
    expect(additiveNumber("199100199")).to.be.true;
  });

  // 309. Best Time to Buy and Sell Stock with Cooldown. (quest)
  it("Should return maximum profit", () => {
    expect(maxProfit5([1, 2, 3, 0, 2])).to.equal(3);
  });

  // 310. Minimum Height Trees
  it("Should find minimum height trees", () => {
    expect(
      findMinHeightTrees(4, [
        [1, 0],
        [1, 2],
        [1, 3],
      ]),
    ).to.deep.equal([1]);
    expect(
      findMinHeightTrees(6, [
        [0, 3],
        [1, 3],
        [2, 3],
        [4, 3],
        [5, 4],
      ]),
    ).to.deep.equal([3, 4]);
  });

  // 311. Sparse Matrix Multiplication
  it("Should multiply sparce matrix", () => {
    expect(
      sparseMatrixMultiplication(
        [
          [1, 0, 0],
          [-1, 0, 3],
        ],
        [
          [7, 0, 0],
          [0, 0, 0],
          [0, 0, 1],
        ],
      ),
    ).to.deep.equal([
      [7, 0, 0],
      [-7, 0, 3],
    ]);
  });

  // 312. Burst Balloons
  it("Should burst balloons", () => {
    expect(maxCoins([3, 1, 5, 8])).to.equal(167);
  });

  // 313. Super Ugly Number (quest)
  it("Should return nth super ugly number", () => {
    expect(nthSuperUglyNumber(12, [2, 7, 13, 19])).to.deep.equal(32);
  });

  // 314. Binary Tree Vertical Order Traversal
  it("Should return vertical order traversal", () => {
    expect(verticalOrder([3, 9, 20, null, null, 15, 7])).to.deep.equal([
      [9],
      [3, 15],
      [20],
      [7],
    ]);
    expect(verticalOrder([3, 9, 8, 4, 0, 1, 7])).to.deep.equal([
      [4],
      [9],
      [3, 0, 1],
      [8],
      [7],
    ]);
    expect(
      verticalOrder([3, 9, 8, 4, 0, 1, 7, null, null, null, 2, 5]),
    ).to.deep.equal([[4], [9, 5], [3, 0, 1], [8, 2], [7]]);
  });

  // 315. Count of Smaller Numbers After Self
  it("Should count smaller numbers", () => {
    expect(countSmaller([5, 2, 6, 1])).to.deep.equal([2, 1, 1, 0]);
  });

  // 316. Remove Duplicate Letters
  it("Should remove duplicate letters", () => {
    expect(removeDuplicateLetters("bcabc")).to.equal("abc");
    expect(removeDuplicateLetters("cbacdcbc")).to.equal("acdb");
  });

  // 317. Shortest Distance from all buildings
  it("Shortest distance from all buildings", () => {
    expect(
      shortestDistance4([
        [1, 0, 2, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
      ]),
    ).to.equal(7);
  });

  // 318. Maximum Product of Word Lengths
  it("Should return maximum product of lengths", () => {
    expect(
      maxProductWordsLen(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]),
    ).to.equal(16);
    expect(
      maxProductWordsLen(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]),
    ).to.equal(4);
    expect(maxProductWordsLen(["a", "aa", "aaa", "aaaa"])).to.equal(0);
  });

  // 319. Bulb Switcher
  it("Should return how many bulbs are on", () => {
    expect(bulbSwitcher(3)).to.equal(1);
    expect(bulbSwitcher(10)).to.equal(3);
  });

  // 320. Generalized Abbreviation
  it("Should return generalized abbreviation", () => {
    expect(generalizedAbbreviations("word")).to.deep.equal([
      "4",
      "3d",
      "2r1",
      "2rd",
      "1o2",
      "1o1d",
      "1or1",
      "1ord",
      "w3",
      "w2d",
      "w1r1",
      "w1rd",
      "wo2",
      "wo1d",
      "wor1",
      "word",
    ]);
  });

  // 321. Create Maximum Number
  it("Should create max number", () => {
    expect(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5)).to.deep.equal([
      9, 8, 6, 5, 3,
    ]);
    expect(maxNumber([6, 7], [6, 0, 4], 5)).to.deep.equal([6, 7, 6, 0, 4]);
    expect(maxNumber([3, 9], [8, 9], 3)).to.deep.equal([9, 8, 9]);
  });

  // 322. Coin Change
  it("Should return min coins", () => {
    expect(coinChange([1, 2, 5], 11)).to.deep.equal(3);
    expect(coinChange([2], 3)).to.deep.equal(-1);
  });

  // 323. Number of Connected Components in an Undirected Graph
  it("Should return number of components", () => {
    expect(
      countComponents(5, [
        [0, 1],
        [1, 2],
        [3, 4],
      ]),
    ).to.equal(2);
    expect(
      countComponents(5, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ]),
    ).to.equal(1);
  });

  // 324. Wiggle Sort II
  it("Should return wiggle sorted array", () => {
    expect(wiggleSort2([1, 5, 1, 1, 6, 4])).to.deep.equal([1, 5, 1, 6, 1, 4]);
    expect(wiggleSort2([1, 3, 2, 2, 3, 1])).to.deep.equal([2, 3, 1, 3, 1, 2]);
  });

  // 325. Maximum Size Subarray Sum Equals k
  it("Should return max subarray equals to k", () => {
    expect(maxSubArray([1, -1, 5, -2, 3], 3)).to.equal(4);
    expect(maxSubArray([-2, -1, 2, 1], 1)).to.equal(2);
  });

  // 326. Power of Three
  it("Shourd return if number is the power of three", () => {
    expect(isPowerOfThree(27)).to.be.true;
    expect(isPowerOfThree(0)).to.be.false;
    expect(isPowerOfThree(9)).to.be.true;
    expect(isPowerOfThree(45)).to.be.false;
  });

  // 327. Count of Range Sum (quest)
  it("Should return count of range sum", () => {
    expect(countRangeSum([-2, 5, -1], -2, 2)).to.equal(3);
  });

  // 328. Odd Even Linked List
  it("Should group odd and even nodes", () => {
    expect(oddEvenList([1, 2, 3, 4, 5])).to.deep.equal([1, 3, 5, 2, 4]);
    expect(oddEvenList([2, 1, 3, 5, 6, 4, 7])).to.deep.equal([
      2, 3, 6, 7, 1, 5, 4,
    ]);
  });

  // 329. Longest Increasing Path in a Matrix
  it("Should find longes increasing path", () => {
    expect(
      longestIncreasingPath([
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
      ]),
    ).to.equal(4);
    expect(
      longestIncreasingPath([
        [3, 4, 5],
        [3, 2, 6],
        [2, 2, 1],
      ]),
    ).to.equal(4);
  });

  // 330. Patching Array
  it("Should return minimum patches", () => {
    expect(minPatches([1, 3], 6)).to.equal(1);
    expect(minPatches([1, 5, 10], 20)).to.equal(2);
    expect(minPatches([1, 2, 2], 5)).to.equal(0);
  });

  // 331. Verify Preorder Serialization of a Binary Tree
  it("Should verify preorder serialization", () => {
    expect(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")).to.true;
    expect(isValidSerialization("1,#")).to.false;
    expect(isValidSerialization("9,#,#,1")).to.false;
  });

  // 332. Reconstruct Itinerary
  it("Should find itinerary", () => {
    expect(
      findItinerary([
        ["MUC", "LHR"],
        ["JFK", "MUC"],
        ["SFO", "SJC"],
        ["LHR", "SFO"],
      ]),
    ).to.deep.equal(["JFK", "MUC", "LHR", "SFO", "SJC"]);
  });

  // 333. Largest BST Subtree
  it("Should find largest bst subtree", () => {
    expect(largestBSTSubtree([10, 5, 15, 1, 8, null, 7])).to.equal(3);
  });

  // 334. Increasing Triplet Subsequence
  it("Should return increasing triplet", () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).to.be.true;
    expect(increasingTriplet([5, 4, 3, 2, 1])).to.be.false;
  });

  // 335. Self Crossing
  it("Should find self crossing", () => {
    expect(selfCrossing([2, 1, 1, 2])).to.be.true;
    expect(selfCrossing([1, 2, 3, 4])).to.be.false;
    expect(selfCrossing([1, 1, 1, 1])).to.be.true;
  });

  // 336. Palindrome Pairs
  it("Should return palindrome pairs", () => {
    expect(
      palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]),
    ).to.deep.equal([
      [0, 1],
      [1, 0],
      [3, 2],
      [2, 4],
    ]);
    expect(palindromePairs(["bat", "tab", "cat"])).to.deep.equal([
      [0, 1],
      [1, 0],
    ]);
  });

  // 337. House Robber III
  it("Should return maximum amount ot rob", () => {
    expect(houseRobber3([3, 2, 3, null, 3, null, 1])).to.equal(7);
    expect(houseRobber3([3, 4, 5, 1, 3, null, 1])).to.equal(9);
  });

  // 338. Counting Bits
  it("Should return enabled bits counts for numbers", () => {
    expect(countBits(2)).to.deep.equal([0, 1, 1]);
    expect(countBits(5)).to.deep.equal([0, 1, 1, 2, 1, 2]);
  });

  // 339. Nested List Weight Sum
  it("Should return weighted sum of array", () => {
    expect(depthSum([[1, 1], 2, [1, 1]])).to.equal(10);
    expect(depthSum([1, [4, [6]]])).to.equal(27);
  });

  // 340. Longest Substring with At Most K Distinct Characters.
  it("Should return longest substring with k distinct", () => {
    expect(longestSubstringKDistinct("eceba", 2)).to.equal(3);
    expect(longestSubstringKDistinct("aa", 1)).to.equal(2);
  });

  // 341. Flatten Nested List Iterator
  it("Should return flatten iterator", () => {
    let iterator1 = new FlattenIterator([[1, 1], 2, [1, 1]]);
    let result1: number[] = [];
    while (iterator1.hasNext()) {
      result1.push(iterator1.next());
    }
    expect(result1).to.deep.equal([1, 1, 2, 1, 1]);
    let iterator2 = new FlattenIterator([1, [4, [6]]]);
    let result2: number[] = [];
    while (iterator2.hasNext()) {
      result2.push(iterator2.next());
    }
    expect(result2).to.deep.equal([1, 4, 6]);
  });

  // 342. Power of Four
  it("Should determine if digit is power of four", () => {
    expect(isPowerOfFour(16)).to.be.true;
    expect(isPowerOfFour(5)).to.be.false;
  });

  // 343. Integer Break
  it("Should break integer to get maximum multiplication", () => {
    expect(integerBreak(2)).to.equal(1);
    expect(integerBreak(10)).to.equal(36);
  });

  // 344. Reverse String
  it("Should reverse string", () => {
    expect(reverseString("hello")).to.equal("olleh");
    expect(reverseString("A man, a plan, a canal: Panama")).to.equal(
      "amanaP :lanac a ,nalp a ,nam A",
    );
  });

  // 345. Reverse Vowels of a String
  it("Should reverse vowels", () => {
    expect(reverseStringVowels("hello")).to.equal("holle");
    expect(reverseStringVowels("leetcode")).to.equal("leotcede");
  });

  // 346. Moving Average from Data Stream
  it("Should return moving average", () => {
    let m = new MovingAverage(3);
    expect(m.next(1)).equal(1);
    expect(m.next(10)).equal((1 + 10) / 2);
    expect(m.next(3)).equal((1 + 10 + 3) / 3);
    expect(m.next(5)).equal((10 + 3 + 5) / 3);
  });

  // 347. Top K Frequent Elements
  it("Should return to k frequent", () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).to.deep.equal([1, 2]);
  });

  // 348. Design Tic-Tac-Toe
  it("Should return tic-tac-toe winner", () => {
    let toe = new TicTacToe(3);
    expect(toe.move(0, 0, 1)).to.equal(0);
    expect(toe.move(0, 2, 2)).to.equal(0);
    expect(toe.move(2, 2, 1)).to.equal(0);
    expect(toe.move(1, 1, 2)).to.equal(0);
    expect(toe.move(2, 0, 1)).to.equal(0);
    expect(toe.move(1, 0, 2)).to.equal(0);
    expect(toe.move(2, 1, 1)).to.equal(1);
  });

  // 349. Intersection of Two Arrays.
  it("Should return intersection of two arrays", () => {
    expect(intersectionOfTwoArrays([1, 2, 2, 1], [2, 2])).to.deep.equal([2]);
    expect(intersectionOfTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])).to.deep.equal([
      9, 4,
    ]);
  });

  // 350. Intersection of Two Arrays 2.
  it("Should return intersection of two arrays with multiple numbers", () => {
    expect(intersectionOfTwoArrays2([1, 2, 2, 1], [2, 2])).to.deep.equal([
      2, 2,
    ]);
    expect(intersectionOfTwoArrays2([4, 9, 5], [9, 4, 9, 8, 4])).to.deep.equal([
      9, 4,
    ]);
  });

  //  351. Android Unlock Patterns
  it("Should return android unlock patterns count", () => {
    expect(numberOfPatterns(1, 1)).to.equal(9);
  });

  // 353. Design Snake Game.
  it("Should design snake game", () => {
    let snake = new SnakeGame(3, 2, [
      [1, 2],
      [0, 1],
    ]);
    expect(snake.move("R")).equal(0);
    expect(snake.move("D")).equal(0);
    expect(snake.move("R")).equal(1);
    expect(snake.move("U")).equal(1);
    expect(snake.move("L")).equal(2);
    expect(snake.move("U")).equal(-1);
  });

  // 354. Russian Doll Envelopes
  it("Should return max envelopes", () => {
    expect(
      maxEnvelopes([
        [5, 4],
        [6, 4],
        [6, 7],
        [2, 3],
      ]),
    ).to.equal(3);
  });

  // 355. Design Twitter
  it("Should design twitter", () => {
    let tw = new Twitter();
    tw.postTweet(1, 5);
    expect(tw.getNewsFeed(1)).to.deep.equal([5]);
    tw.follow(1, 2);
    tw.postTweet(2, 6);
    expect(tw.getNewsFeed(1)).to.deep.equal([6, 5]);
    tw.unfollow(1, 2);
    expect(tw.getNewsFeed(1)).to.deep.equal([5]);
  });

  // 356. Line Reflection
  it("Should find line reflection", () => {
    expect(
      isReflected([
        [1, 1],
        [-1, 1],
      ]),
    ).to.be.true;
    expect(
      isReflected([
        [1, 1],
        [-1, -1],
      ]),
    ).to.be.false;
  });

  // 357. Count Numbers with Unique Digits
  it("Should count numbers with unique digits", () => {
    expect(countNumberWithUniqueDigits(2)).to.equal(91);
  });

  // 358. Rearrange String k Distance Apart
  it("Should rearrange string k distance apart", () => {
    expect(rearrangeString("aabbcc", 3)).to.equal("abcabc");
  });

  // 359. Logger Rate Limiter
  it("Should return printed messages", () => {
    let logger = new Logger();
    expect(logger.shouldPrintMessage(1, "foo")).to.be.true;
    expect(logger.shouldPrintMessage(2, "bar")).to.be.true;
    expect(logger.shouldPrintMessage(3, "foo")).to.be.false;
    expect(logger.shouldPrintMessage(8, "bar")).to.be.false;
    expect(logger.shouldPrintMessage(10, "foo")).to.be.false;
    expect(logger.shouldPrintMessage(11, "foo")).to.be.true;
  });

  // 360. Sort Transformed Array
  it("Should sort transformed array", () => {
    expect(sortTransformedArray([-4, -2, 2, 4], 1, 3, 5)).to.deep.equal([
      3, 9, 15, 33,
    ]);

    expect(sortTransformedArray([-4, -2, 2, 4], -1, 3, 5)).to.deep.equal([
      -23, -5, 1, 7,
    ]);
  });

  // 361. Bomb Enemy
  it("Should max killed enemies", () => {
    expect(
      maxKilledEnemies([
        ["0", "E", "0", "0"],
        ["E", "0", "W", "E"],
        ["0", "E", "0", "0"],
      ]),
    ).to.equal(3);
  });

  // 362. Design Hit Counter.
  it("Should count hits", () => {
    let counter = new HitCounter();
    counter.hit(1);
    counter.hit(2);
    counter.hit(3);
    expect(counter.getHits(4)).to.equal(3);
    counter.hit(300);
    expect(counter.getHits(300)).to.equal(4);
    expect(counter.getHits(301)).to.equal(3);
  });

  // 364. Nested List Weight Sum II
  it("Should return weighted sum", () => {
    expect(depthSumInverse([[1, 1], 2, [1, 1]])).to.equal(8);
    expect(depthSumInverse([1, [4, [6]]])).to.equal(17);
  });

  // 365. Water and Jug Problem.
  it("Should return measure using two jugs", () => {
    expect(canMeasureWater(3, 5, 4)).to.be.true;
    expect(canMeasureWater(2, 6, 5)).to.be.false;
  });

  // 366. Find Leaves of Binary Tree
  it("Should return leaves of binary tree until tree is empty", () => {
    expect(findLeaves([1, 2, 3, 4, 5])).to.deep.equal([[4, 5, 3], [2], [1]]);
  });

  // 367. Valid Perfect Square
  it("Should validate perfect square", () => {
    expect(isPerfectSquare(16)).to.be.true;
    expect(isPerfectSquare(14)).to.be.false;
  });

  // 368. Largest Divisible Subset
  it("Should return largest divisible subset", () => {
    expect(largestDivisibleSubset([1, 2, 3])).to.deep.equal([1, 2]);
    expect(largestDivisibleSubset([1, 2, 4, 8])).to.deep.equal([1, 2, 4, 8]);
  });

  // 369. Plus One Linked List
  it("Should plus one", () => {
    expect(plusOneList([1, 2, 3])).to.deep.equal([1, 2, 4]);
  });

  // 370. Range Addition
  it("Shoud return range addition", () => {
    expect(
      rangeAddition(5, [
        [1, 3, 2],
        [2, 4, 3],
        [0, 2, -2],
      ]),
    ).to.deep.equal([-2, 0, 3, 5, 3]);
  });

  // 371. Sum of Two Integers (quest)
  it("Should return sum of two integers", () => {
    expect(sumRecursive(1, 2)).to.equal(3);
    expect(sumRecursive(-2, 3)).to.equal(1);
  });

  // 372. Super Pow (quest)
  it("Should return super pow mod", () => {
    expect(superPow(2, [3])).to.equal(8);
    expect(superPow(2, [1, 0])).to.equal(1024);
  });

  // 373. Find K Pairs with Smallest Sums
  it("Should find k pairs with smallest sums", () => {
    expect(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)).to.deep.equal([
      [1, 2],
      [1, 4],
      [1, 6],
    ]);
    expect(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)).to.deep.equal([
      [1, 1],
      [1, 1],
    ]);
    expect(kSmallestPairs([1, 2], [3], 3)).to.deep.equal([
      [1, 3],
      [2, 3],
    ]);
  });

  // 374. Guess Number Higher or Lower
  it("Should guess number", () => {
    expect(guessNumber(10)).to.equal(5);
  });

  // 375. Guess Number Higher or Lower II
  it("Should return money amount", () => {
    expect(getMoneyAmount(10)).to.equal(16);
  });

  // 376. Wiggle Subsequence
  it("Should return wiggle max length", () => {
    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).to.equal(6);
    expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).to.equal(7);
    expect(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(2);
  });

  // 377. Combination Sum IV
  it("Should return combination sum", () => {
    expect(combinationSum4([1, 2, 3], 4)).to.equal(7);
  });

  // 378. Kth Smallest Element in a Sorted Matrix.
  it("Should return kth smallest element in the sorted matrix", () => {
    expect(
      kthSmallestInSortedMatrix(
        [
          [1, 5.9],
          [10, 11, 13],
          [12, 13, 15],
        ],
        8,
      ),
    ).to.equal(13);
  });

  // 379. Design Phone Directory
  it("Should design phone directory", () => {
    let directory = new PhoneDirectory(3);
    expect(directory.get()).to.equal(0);
    expect(directory.get()).to.equal(1);
    expect(directory.check(2)).to.equal(true);
    directory.get();
    expect(directory.check(2)).to.equal(false);
    directory.release(2);
    expect(directory.check(2)).to.equal(true);
  });

  // 380. Insert Delete GetRandom O(1)
  it("Should make insert delete getrandom", () => {
    let randomSet = new RandomizedSet();
    randomSet.insert(1);
    randomSet.remove(2);
    randomSet.insert(2);
    expect(randomSet.getRandom()).to.be.oneOf([1, 2]);
    randomSet.remove(1);
    randomSet.insert(2);
    expect(randomSet.getRandom()).to.equal(2);
  });

  // 381. Insert Delete GetRandom O(1) - Duplicates allowed.
  it("Should insert delete getrandom with duplicates", () => {
    let collection = new RandomizedCollection();
    collection.insert(1);
    collection.insert(1);
    collection.insert(2);
    expect(collection.getRandom()).to.be.oneOf([1, 2]);
    collection.remove(1);
    collection.remove(1);
    collection.insert(2);
    expect(collection.getRandom()).to.equal(2);
  });

  // 382. Linked List Random Node
  it("Should return random list value", () => {
    let list = new RandomLinkNode([1, 2, 3]);
    expect(list.getRandom()).to.be.oneOf([1, 2, 3]);
  });

  // 383. Ransom Note
  it("Shoud construct ransome", () => {
    expect(canConstructRansom("a", "b")).to.be.false;
    expect(canConstructRansom("aa", "ab")).to.be.false;
    expect(canConstructRansom("aa", "aab")).to.be.true;
  });

  // 384. Shuffle an Array.
  it("Should shuffle an Array", () => {
    let shuffle = new ShuffleArray([1, 2, 3]);
    shuffle.shuffle();
    expect(shuffle.reset()).to.deep.equal([1, 2, 3]);
  });

  // 385. Mini Parser.
  it("Should parse", () => {
    expect(miniParser("324")).to.equal(324);
    expect(miniParser("[123,[456,[789]]]")).to.deep.equal([123, [456, [789]]]);
  });

  // 386. Lexicographical Numbers.
  it("Should return numbers in lexicographical order", () => {
    expect(lexicalOrder(13)).to.deep.equal([
      1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  // 387. First Unique Character in a String.
  it("Should return first unique character", () => {
    expect(firstUniqChar("leetcode")).to.equal(0);
    expect(firstUniqChar("loveleetcode")).to.equal(2);
  });

  // 388. Longest Absolute File Path
  it("Should return longest path", () => {
    expect(
      lengthLongestPath(
        "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext",
      ),
    ).equals(32);
  });

  // 389. Find the Difference
  it("Should return difference", () => {
    expect(findTheDifference("abcd", "abcde")).to.equal("e");
  });

  // 390. Elimination Game
  it("Should eliminate", () => {
    expect(lastRemaining(9)).to.equal(6);
  });

  // 391. Perfect Rectangle
  it("Should cover rectangle", () => {
    expect(
      isRectangleCover([
        [1, 1, 3, 3],
        [3, 1, 4, 2],
        [3, 2, 4, 4],
        [1, 3, 2, 4],
        [2, 3, 3, 4],
      ]),
    ).to.be.true;
    expect(
      isRectangleCover([
        [1, 1, 2, 3],
        [1, 3, 2, 4],
        [3, 1, 4, 2],
        [3, 2, 4, 4],
      ]),
    ).to.be.false;
    expect(
      isRectangleCover([
        [1, 1, 3, 3],
        [3, 1, 4, 2],
        [1, 3, 2, 4],
        [3, 2, 4, 4],
      ]),
    ).to.be.false;
    expect(
      isRectangleCover([
        [1, 1, 3, 3],
        [3, 1, 4, 2],
        [1, 3, 2, 4],
        [2, 2, 4, 4],
      ]),
    ).to.be.false;
  });

  // 392. Is Subsequence
  it("Should find subsequence", () => {
    expect(isSubsequence("abc", "ahbgdc")).to.be.true;
    expect(isSubsequence("axc", "ahbgdc")).to.be.false;
  });

  // 394. Decode String
  it("Should decode string", () => {
    expect(decodeString("3[a]2[bc]")).to.equal("aaabcbc");
    expect(decodeString("3[a2[c]]")).to.equal("accaccacc");
    expect(decodeString("2[abc]3[cd]ef")).to.equal("abcabccdcdcdef");
  });

  // 395. Longest Substring with at least k repeating characters
  it("Should return longest substring", () => {
    expect(longestSubstringWithKRepeating("aaabb", 3)).to.equal(3);
    expect(longestSubstringWithKRepeating("ababbc", 2)).to.equal(5);
  });

  // 396. Rotate Function
  it("Should rotate function", () => {
    expect(maxRotateFunction([4, 3, 2, 6])).equal(26);
  });

  // 397. Integer Replacement
  it("Should replace integer", () => {
    expect(integerReplacement(8)).to.equal(3);
    expect(integerReplacement(7)).to.equal(4);
  });

  // 398. Random Pick Index
  it("Should pick random index", () => {
    let pick = new RandomIndex([1, 2, 3, 3, 3]);
    expect(pick.pick(3)).to.be.oneOf([2, 3, 4]);
  });

  // 400. Nth Digit
  it("Should return nth digit", () => {
    expect(findNthDigit(3)).to.equal(3);
    expect(findNthDigit(11)).to.equal(0);
  });
});
