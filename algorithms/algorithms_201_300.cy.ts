import {
  happyNumber,
  rangeBitwiseAnd,
  removeElementsRecursive,
  countPrimes,
  isIsomorphic,
  reverseLinkedList,
  courseSchedule,
  Trie,
  minSubArrayLen,
  courseSchedule2,
  /* 211_add_and_search_word (empty solution) */
  wordSearch2,
  rob2,
  shortestPalindrome,
  findKthLargest,
  combinationSum3,
  containsDuplicate,
  getSkyline,
  containsDuplicate2,
  containsDuplicate3,
  maximalSquare,
  countNodesCompleteTree,
  rectangleArea,
  basicCalculator,
  Stack,
  invertBinaryTree,
  basicCalculator2,
  summaryRanges,
  majorityElement2,
  kthSmallest,
  isPowerOfTwo,
  Queue,
  countDigitOne,
  palindromeLinkedList,
  lowestCommonAncestor,
  lowestCommonAncestor2,
  deleteNode,
  productExceptSelf,
  slidingWindowMaximum,
  searchMatrix2,
  diffWaysToCompute,
  isAnagram,
  shortestDistance,
  WordDistance2,
  shortestDistance3,
  isStrobogrammatic,
  strobogrammaticNumbers2,
  strobogrammaticInRange,
  groupStrings,
  countUnivalSubtrees,
  /* 251_flatten_2d_vector (c++ or java solution) */
  meetingRooms,
  meetingRooms2,
  factorCombinations,
  verifyPreorderBST,
  paintHouse,
  binaryTreePaths,
  addDigits,
  threeSumSmaller,
  singleNumber3,
  graphValidTree,
  /* 262 */
  uglyNumber,
  uglyNumber2,
  paintHouse2,
  palindromePermutation,
  palindromePermutation2,
  missingNumber,
  alienOrder,
  closestBSTValue,
  Codec,
  closestBSTValue2,
  numberToWords,
  hIndex,
  hIndex2,
  paintFence,
  findCelebrity,
  firstBadVersion,
  perfectSquares,
  wiggleSort,
  ZigzagIterator,
  addOperators,
  moveZeroes,
  /* 284_peeking_iterator (c++ or java solution) */
  inorderSuccessorBST,
  wallsAndGates,
  findDuplicate,
  uniqueAbbreviation,
  gameOfLife,
  wordPattern,
  wordPattern2,
  nimGame,
  flipGame,
  flipGame2,
  /* 295_find_median_from_data_stream (c++ or java solution) */
  bestMeetingPoint,
  Serialize,
  longestConsecutive,
  bullsAndCows,
  longestIncreasingSubsequence,
} from "../../../algorithms";

describe("Algorithm tests form 201 to 300", () => {
  // 201. Bitwise AND of Numbers Range
  it("Should return bitwise AND of range", () => {
    expect(rangeBitwiseAnd(5, 7)).to.equal(4);
    expect(rangeBitwiseAnd(0, 1)).to.equal(0);
  });

  // 202. Happy Number
  it("Should determine happy number", () => {
    expect(happyNumber(19)).to.equal(true);
  });

  // 203. Remove Linked List Elements
  it("Should remove linked list element", () => {
    expect(removeElementsRecursive([6, 1, 2, 6, 3, 4, 5, 6], 6)).to.deep.equal([
      1, 2, 3, 4, 5,
    ]);
  });

  // 204. Count Primes
  it("Should count primes", () => {
    expect(countPrimes(10)).to.equal(4);
  });

  // 205. Isomorphic Strings
  it("Should determine isomorphic strings", () => {
    expect(isIsomorphic("egg", "add")).to.equal(true);
    expect(isIsomorphic("foo", "bar")).to.equal(false);
    expect(isIsomorphic("paper", "title")).to.equal(true);
  });

  // 206. Reverse Linked List
  it("Should reverse linked list", () => {
    expect(reverseLinkedList([1, 2, 3, 4, 5, 6])).to.deep.equal([
      6, 5, 4, 3, 2, 1,
    ]);
  });

  // 207. Course Schedule
  it("Should return if it can finish courses", () => {
    expect(courseSchedule(2, [[1, 0]])).to.equal(true);
    expect(
      courseSchedule(2, [
        [1, 0],
        [0, 1],
      ]),
    ).to.equal(false);
  });

  // 208. Implement Trie (Prefix Tree)
  it("Should implement trie", () => {
    let trie = new Trie();
    trie.insert("apple");
    expect(trie.search("apple")).to.equal(true);
    expect(trie.search("app")).to.equal(false);
    expect(trie.startsWith("app")).to.equal(true);
    trie.insert("app");
    expect(trie.search("app")).to.equal(true);
  });

  // 209. Minimum Size Subarray Sum
  it("Should return minimum subarray length", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).to.equal(2);
  });

  // 210. Course Schedule II
  it("Should return courses order", () => {
    expect(courseSchedule2(2, [[1, 0]])).to.deep.equal([0, 1]);
    expect(
      courseSchedule2(4, [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ]),
    ).to.deep.equal([0, 1, 2, 3]);
  });

  // 211. Add and Search Word - Data structure design

  // 212. Word Search II
  it("Should return words on board", () => {
    expect(
      wordSearch2(
        [
          ["o", "a", "a", "n"],
          ["e", "t", "a", "e"],
          ["i", "h", "k", "r"],
          ["i", "f", "l", "v"],
        ],
        ["oath", "pea", "eat", "rain"],
      ),
    ).to.deep.equal(["oath", "eat"]);
  });

  // 213. House Robber II
  it("Should rob house with maximum profit", () => {
    expect(rob2([2, 3, 2])).to.equal(3);
    expect(rob2([1, 2, 3, 1])).to.equal(4);
  });

  // 214. Shortest Palindrome
  it("Should return shortest palindrome", () => {
    expect(shortestPalindrome("aacecaaa")).to.equal("aaacecaaa");
    expect(shortestPalindrome("abcd")).to.equal("dcbabcd");
  });

  // 215. Kth Largest Element in an Array
  it("Should return kth largest element in an array", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).to.equal(5);
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).to.equal(4);
  });

  // 216. Combination Sum III
  it("Should return possible combinations", () => {
    expect(combinationSum3(3, 7)).to.deep.equal([[1, 2, 4]]);
    expect(combinationSum3(3, 9)).to.deep.equal([
      [1, 2, 6],
      [1, 3, 5],
      [2, 3, 4],
    ]);
  });

  // 217. Contains Duplicate
  it("Should determine the presence of duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 1])).to.be.true;
    expect(containsDuplicate([1, 2, 3, 4])).to.be.false;
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).to.be.true;
  });

  // 218. The Skyline Problem
  it("Should return skyline", () => {
    expect(
      getSkyline([
        [2, 9, 10],
        [3, 7, 15],
        [5, 12, 12],
        [15, 20, 10],
        [19, 24, 8],
      ]),
    ).to.deep.equal([
      [2, 10],
      [3, 15],
      [7, 12],
      [12, 0],
      [15, 10],
      [20, 8],
      [24, 0],
    ]);
  });

  // 219. Contains Duplicate II
  it("Should find duplicates with k distance", () => {
    expect(containsDuplicate2([1, 2, 3, 1], 3)).to.be.true;
    expect(containsDuplicate2([1, 0, 1, 1], 1)).to.be.true;
    expect(containsDuplicate2([1, 2, 3, 1, 2, 3], 2)).to.be.false;
  });

  // 220. Contains Duplicate III
  it("Should find close numbers with distance", () => {
    expect(containsDuplicate3([1, 2, 3, 1], 3, 0)).to.be.true;
    expect(containsDuplicate3([1, 0, 1, 1], 1, 2)).to.be.true;
    expect(containsDuplicate3([1, 5, 9, 1, 5, 9], 2, 3)).to.be.false;
  });

  // 221. Maximal Square
  it("Should return maximal square in the matrix", () => {
    expect(
      maximalSquare([
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0],
      ]),
    ).to.equal(4);
  });

  // 222. Count Complete Tree Nodes
  it("Should count nodes in the complete tree", () => {
    expect(countNodesCompleteTree([1, 2, 3, 4, 5, 6])).to.equal(6);
  });

  // 223. Rectangle Area
  it("Should count rectangles area", () => {
    expect(rectangleArea(-3, 0, 3, 4, 0, -1, 9, 2)).to.equal(45);
  });

  // 224. Basic Calculator
  it("Should calculate expression in the string", () => {
    expect(basicCalculator("1 + 1")).to.equal(2);
    expect(basicCalculator("2-1 + 2")).to.equal(3);
    expect(basicCalculator("(1 + (4+5+2) - 3) + (6 + 8)")).to.equal(23);
  });

  // 225. Implement Stack using Queues
  it("Should implement stack using queues", () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.top()).to.equal(2);
    expect(stack.pop()).to.equal(2);
    expect(stack.empty()).to.equal(false);
  });

  // 226. Invert Binary Tree
  it("Should invert binary tree", () => {
    expect(invertBinaryTree([4, 2, 7, 1, 3, 6, 9])).to.deep.equal([
      4, 7, 2, 9, 6, 3, 1,
    ]);
  });

  // 227. Basic Calculator II
  it("Should calculate string", () => {
    expect(basicCalculator2("3+2*2")).to.equal(7);
    expect(basicCalculator2("3/2")).to.equal(1);
    expect(basicCalculator2("3+5/2")).to.equal(5);
  });

  // 228. Summary Ranges
  it("Should return ranges", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).to.deep.equal([
      "0->2",
      "4->5",
      "7",
    ]);
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).to.deep.equal([
      "0",
      "2->4",
      "6",
      "8->9",
    ]);
  });

  // 229. Majority Element 2
  it("Should find majority elements", () => {
    expect(majorityElement2([3, 2, 3])).to.deep.equal([3]);
    expect(majorityElement2([1, 1, 1, 3, 3, 2, 2, 2])).to.deep.equal([1, 2]);
  });

  // 230. Kth Smallest Element in a BST
  it("Should find kth smallest in BST", () => {
    expect(kthSmallest([3, 1, 4, null, 2], 1)).to.equal(1);
    expect(kthSmallest([5, 3, 6, 2, 4, null, null, 1], 3)).to.equal(3);
  });

  // 231. Power of Two
  it("Should determine power of two", () => {
    expect(isPowerOfTwo(1)).to.be.true;
    expect(isPowerOfTwo(16)).to.be.true;
    expect(isPowerOfTwo(218)).to.be.false;
  });

  // 232. Implement Queue using Stacks
  it("Should implement queue with stacks", () => {
    let q = new Queue();
    q.push(1);
    q.push(2);
    expect(q.peek()).to.equal(1);
    expect(q.pop()).to.equal(1);
    expect(q.empty()).to.be.false;
  });

  // 230. Number of Digit One
  it("Should count digit one", () => {
    expect(countDigitOne(13)).to.equal(6);
  });

  // 234. Palindrome Linked List
  it("Should determine palindrome linked list", () => {
    expect(palindromeLinkedList([1, 2])).to.be.false;
    expect(palindromeLinkedList([1, 2, 2, 1])).to.be.true;
  });

  // 235. Lowest Common Ancestor of a Binary Search Tree
  it("Should find lowest common ancestor for bst", () => {
    expect(
      lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8),
    ).to.equal(6);
    expect(
      lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4),
    ).to.equal(2);
  });

  // 236. Lowest Common Ancestor of a Binary Tree
  it("Should find lowest common ancestor for binary treee", () => {
    expect(
      lowestCommonAncestor2([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1),
    ).to.equal(3);
    expect(
      lowestCommonAncestor2([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4),
    ).to.equal(5);
  });

  // 237. Delete Node in a Linked List
  it("Should delete node in linked list", () => {
    expect(deleteNode([4, 5, 1, 9], 5)).to.deep.equal([4, 1, 9]);
  });

  // 238. Product of Array Except Self
  it("Should return product of array except self", () => {
    expect(productExceptSelf([1, 2, 3, 4])).to.deep.equal([24, 12, 8, 6]);
  });

  // 239. Sliding Window Maximum
  it("Should return maximum of sliding window", () => {
    expect(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)).to.deep.equal([
      3, 3, 5, 5, 6, 7,
    ]);
  });

  // 240. Search a 2D Matrix II
  it("Should search in 2D matrix", () => {
    let matrix = [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ];
    expect(searchMatrix2(matrix, 5)).to.be.true;
    expect(searchMatrix2(matrix, 20)).to.be.false;
  });

  // 241. Different Ways to Add Parentheses
  it("Should return results for different parentheses", () => {
    expect(diffWaysToCompute("2-1-1")).to.deep.equal([2, 0]);
    expect(diffWaysToCompute("2*3-4*5")).to.deep.equal([
      -34, -10, -14, -10, 10,
    ]);
  });

  // 242. Valid Anagram
  it("Should determine valid anagram", () => {
    expect(isAnagram("anagram", "nagaram")).to.be.true;
    expect(isAnagram("rat", "car")).to.be.false;
  });

  // 243. Shortest Word Distance
  it("Should return shortest distance", () => {
    let words = ["practice", "makes", "perfect", "coding", "makes"];
    expect(shortestDistance(words, "coding", "practice")).to.equal(3);
    expect(shortestDistance(words, "makes", "coding")).to.equal(1);
  });

  // 244. Shortest Word Distance II
  it("Should make class with shortest distance", () => {
    let words = ["practice", "makes", "perfect", "coding", "makes"];
    let short = new WordDistance2(words);
    expect(short.shortest("coding", "practice")).to.equal(3);
    expect(short.shortest("makes", "coding")).to.equal(1);
  });

  // 245. Shortest Word Distance III
  it("Should return shortest distance with same words", () => {
    let words = ["practice", "makes", "perfect", "coding", "makes"];
    expect(shortestDistance3(words, "makes", "coding")).to.equal(1);
    expect(shortestDistance3(words, "makes", "makes")).to.equal(3);
  });

  // 246. Strobogrammatic Number
  it("Should determine strobogrammatic number", () => {
    expect(isStrobogrammatic("69")).to.be.true;
    expect(isStrobogrammatic("88")).to.be.true;
    expect(isStrobogrammatic("962")).to.be.false;
    expect(isStrobogrammatic("1016969101")).to.be.true;
  });

  // 247. Strobogrammatic Number II
  it("Should return strobogrammatic numbers", () => {
    expect(strobogrammaticNumbers2(2)).to.deep.equal(["11", "88", "69", "96"]);
  });

  // 248. Strobogrammatic Number III
  it("Should return strobogrammatic between low and high", () => {
    expect(strobogrammaticInRange("50", "100")).to.equal(3);
  });

  // 249. Group Shifted Strings
  it("Should group shifted strings", () => {
    expect(
      groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]),
    ).to.deep.equal([
      ["abc", "bcd", "xyz"],
      ["acef"],
      ["az", "ba"],
      ["a", "z"],
    ]);
  });

  // 250. Count Univalue Subtrees
  it("Should count univalue subtrees", () => {
    expect(countUnivalSubtrees([5, 1, 5, 5, 5, null, 5])).to.equal(4);
  });

  // 251. Flatten 2D Vector

  // 252. Meeting Rooms
  it("Should determine if can attend the meetings.", () => {
    expect(
      meetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
      ]),
    ).to.be.false;
    expect(
      meetingRooms([
        [7, 10],
        [2, 4],
      ]),
    ).to.be.true;
  });

  // 253. Meeting Rooms II
  it("Should determine meeting rooms count", () => {
    expect(meetingRooms2([[0.3], [5, 10], [15, 20]])).to.equal(2);
    expect(
      meetingRooms2([
        [7, 10],
        [2, 4],
      ]),
    ).to.equal(1);
  });

  // 254. Factor Combinations
  it("Should return factor combinations", () => {
    expect(factorCombinations(1)).to.deep.equal([]);
    expect(factorCombinations(37)).to.deep.equal([]);
    expect(factorCombinations(12)).to.deep.equal([
      [2, 2, 3],
      [2, 6],
      [3, 4],
    ]);
    expect(factorCombinations(32)).to.deep.equal([
      [2, 2, 2, 2, 2],
      [2, 2, 2, 4],
      [2, 2, 8],
      [2, 4, 4],
      [2, 16],
      [4, 8],
    ]);
  });

  // 255. Verify Preorder Sequence in Binary Search Tree.
  it("Should verify prerder in bst", () => {
    expect(verifyPreorderBST([5, 2, 6, 1, 3])).to.be.false;
    expect(verifyPreorderBST([5, 2, 1, 3, 6])).to.be.true;
  });

  // 256. Paint House
  it("Should return min costs to paint houses", () => {
    expect(
      paintHouse([
        [17, 2, 17],
        [16, 16, 5],
        [14, 3, 19],
      ]),
    ).to.equal(10);
  });

  // 257. Binary Tree Paths
  it("Should return binary tree paths", () => {
    expect(binaryTreePaths([1, 2, 3, null, 5])).to.deep.equal([
      "1->2->5",
      "1->3",
    ]);
  });

  // 258. Add Digits
  it("Should add digits until result has only one", () => {
    expect(addDigits(38)).to.equal(2);
  });

  // 259. 3Sum Smaller
  it("Should return number of triplets less than target", () => {
    expect(threeSumSmaller([-2, 0, 1, 3], 2)).to.equal(2);
  });

  // 260. Single Number III
  it("Should find single numbers", () => {
    expect(singleNumber3([1, 2, 1, 3, 2, 5])).to.deep.equal([3, 5]);
  });

  // 261. Graph Valid Tree
  it("Should validate graph tree", () => {
    expect(
      graphValidTree(5, [
        [0, 1],
        [0, 2],
        [0, 3],
        [1, 4],
      ]),
    ).to.be.true;
    expect(
      graphValidTree(5, [
        [0, 1],
        [1, 2],
        [2, 3],
        [1, 3],
        [1, 4],
      ]),
    ).to.be.false;
  });

  // 263. Ugly Number
  it("Should determine ugly number", () => {
    expect(uglyNumber(6)).to.equal(true);
    expect(uglyNumber(8)).to.equal(true);
    expect(uglyNumber(14)).to.equal(false);
  });

  // 264. Ugly Number II
  it("Should return n-th ugly number", () => {
    expect(uglyNumber2(10)).to.equal(12);
  });

  // 265. Paint House II
  it("Should paint houses with k colors", () => {
    expect(
      paintHouse2([
        [1, 5, 3],
        [2, 9, 4],
      ]),
    ).to.equal(5);
  });

  // 266. Palindrome Permutation
  it("Should determine palindrome permutation", () => {
    expect(palindromePermutation("code")).to.be.false;
    expect(palindromePermutation("aab")).to.be.true;
    expect(palindromePermutation("carerac")).to.be.true;
  });

  // 267. Palindrome Permutation II
  it("Should return palindrome permutations", () => {
    expect(palindromePermutation2("aabb")).to.deep.equal(["abba", "baab"]);
  });

  // 268. Missing Number
  it("Should return missing number", () => {
    expect(missingNumber([3, 0, 1])).to.equal(2);
    expect(missingNumber([3, 0, 1, 4])).to.equal(2);
    expect(missingNumber([3, 0, 1, 4, 5])).to.equal(2);
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).to.equal(8);
  });

  // 269. Alien Dictionary
  it("Should return alien dictionary order", () => {
    expect(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])).to.equal("wertf");
    expect(alienOrder(["z", "x"])).to.equal("zx");
    expect(alienOrder(["z", "x", "z"])).to.equal("");
  });

  // 270. Closest Binary Search Tree Value
  it("Should return closest BST value", () => {
    expect(closestBSTValue([4, 2, 5, 1, 3], 3.714286)).to.equal(4);
  });

  // 271. Encode and Decode Strings
  it("Should encode and decode strings", () => {
    let codec = new Codec();
    expect(codec.encode(["slkdjhfk", "sdfj23", "^%$kjsdhf123"])).to.equal(
      "8/slkdjhfk6/sdfj2312/^%$kjsdhf123",
    );
    expect(codec.decode("8/slkdjhfk6/sdfj2312/^%$kjsdhf123")).to.deep.equal([
      "slkdjhfk",
      "sdfj23",
      "^%$kjsdhf123",
    ]);
  });

  // 270. Closest Binary Search Tree Value II
  it("Should return k closest BST values", () => {
    expect(closestBSTValue2([4, 2, 5, 1, 3], 3.714286, 2)).to.deep.equal([
      4, 3,
    ]);
  });

  // 273. Integer to English Words
  it("Should return words for number", () => {
    expect(numberToWords(123)).to.equal("One Hundred Twenty Three");
    expect(numberToWords(12345)).to.equal(
      "Twelve Thousand Three Hundred Forty Five",
    );
    expect(numberToWords(1234567)).to.equal(
      "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven",
    );
    expect(numberToWords(1234567891)).to.equal(
      "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One",
    );
  });

  // 274. H-Index
  it("Should return h-index", () => {
    expect(hIndex([3, 0, 6, 1, 5])).to.equal(3);
  });

  // 275. H-Index II
  it("Should return h-index out of sorted papers", () => {
    expect(hIndex2([0, 1, 3, 5, 6])).to.equal(3);
  });

  // 276. Paint Fence
  it("Should paint fence different ways", () => {
    expect(paintFence(3, 2)).to.equal(6);
  });

  // 277. Find the Celebrity (stubbed solution)
  it("Should find celebrity", () => {
    expect(findCelebrity(5)).to.equal(-1);
  });

  // 278. Find Bad Version
  it("Shoiuld return first bad version", () => {
    expect(firstBadVersion(20)).to.equal(11);
  });

  // 279. Perfect Squares
  it("Should return minimum squares count", () => {
    expect(perfectSquares(12)).to.equal(3);
  });

  // 280. Wiggle Sort
  it("Should return wiggle sorted array", () => {
    expect(wiggleSort([3, 5, 2, 1, 6, 4])).to.deep.equal([1, 3, 2, 5, 4, 6]);
  });

  // 281. Zigzag Iterator
  it("Should iterate by zigzag", () => {
    let zig = new ZigzagIterator([
      [1, 2, 3],
      [4, 5, 6, 7],
      [8, 9],
    ]);
    expect(zig.next()).to.equal(1);
    expect(zig.next()).to.equal(4);
    expect(zig.next()).to.equal(8);
    expect(zig.hasNext()).to.equal(true);
    expect(zig.next()).to.equal(2);
    expect(zig.next()).to.equal(5);
    expect(zig.next()).to.equal(9);
    expect(zig.next()).to.equal(3);
    expect(zig.next()).to.equal(6);
    expect(zig.next()).to.equal(7);
    expect(zig.hasNext()).to.equal(false);
  });

  // 282. Expression Add Operators
  it("Should add operators", () => {
    expect(addOperators("123", 6)).to.deep.equal(["1*2*3", "1+2+3"]);
    expect(addOperators("232", 8)).to.deep.equal(["2*3+2", "2+3*2"]);
    expect(addOperators("105", 5)).to.deep.equal(["1*0+5", "10-5"]);
    expect(addOperators("00", 0)).to.deep.equal(["0*0", "0+0", "0-0"]);
    expect(addOperators("3456237490", 9191)).to.deep.equal([]);
  });

  // 283. Move Zeroes
  it("Should move zeroes", () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).to.deep.equal([1, 3, 12, 0, 0]);
  });

  // 285. Inorder Successor in BST
  it("Should return inorder bst successor", () => {
    expect(inorderSuccessorBST([2, 1, 3], 1)).to.equal(2);
    expect(inorderSuccessorBST([5, 3, 6, 2, 4, null, null, 1], 6)).to.equal(
      null,
    );
  });

  // 286. Walls and Gates
  it("Should return minimum distances to gates", () => {
    expect(
      wallsAndGates([
        [Infinity, -1, 0, Infinity],
        [Infinity, Infinity, Infinity, -1],
        [Infinity, -1, Infinity, -1],
        [0, -1, Infinity, Infinity],
      ]),
    ).to.deep.equal([
      [3, -1, 0, 1],
      [2, 2, 1, -1],
      [1, -1, 2, -1],
      [0, -1, 3, 4],
    ]);
  });

  //  287. Find the Duplicate Number
  it("Should find the duplicate number", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).to.equal(2);
    expect(findDuplicate([3, 1, 3, 4, 2])).to.equal(3);
  });

  // 288. Unique Word Abbreviation
  it("Should determine whether the abbreviation is unique", () => {
    let dictionary = ["deer", "door", "cake", "card"];
    expect(uniqueAbbreviation("dear", dictionary)).to.be.false;
    expect(uniqueAbbreviation("cart", dictionary)).to.be.true;
    expect(uniqueAbbreviation("cane", dictionary)).to.be.false;
    expect(uniqueAbbreviation("make", dictionary)).to.be.true;
  });

  // 289. Game of Life
  it("Should return the next state of the Game of Life board", () => {
    let board = [
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0],
    ];
    let nextBoard = [
      [0, 0, 0],
      [1, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ];
    expect(gameOfLife(board)).to.deep.equal(nextBoard);
  });

  // 290. Word Pattern
  it("Should determine if words follow pattern", () => {
    expect(wordPattern("abba", "dog cat cat dog")).to.be.true;
    expect(wordPattern("abba", "dog cat cat fish")).to.be.false;
    expect(wordPattern("aaaa", "dog cat cat dog")).to.be.false;
    expect(wordPattern("abba", "dog dog dog dog")).to.be.false;
  });

  // 291. Word Pattern II
  it("Should determie if string follow pattern", () => {
    expect(wordPattern2("abab", "redblueredblue")).to.be.true;
    expect(wordPattern2("aaaa", "asdasdasdasd")).to.be.true;
    expect(wordPattern2("aabb", "xyzabcxzyabc")).to.be.false;
  });

  // 292. Nim Game
  it("Should determine if you can win the nim game", () => {
    expect(nimGame(4)).to.be.false;
    expect(nimGame(5)).to.be.true;
  });

  // 293. Flip Game
  it("Should return next flip game moves", () => {
    expect(flipGame("++++")).to.deep.equal(["--++", "+--+", "++--"]);
  });

  // 294. Flip Game II
  it("Should determine if player can win the game", () => {
    expect(flipGame2("++++")).to.be.true;
  });

  // 296. Best Meeting Point
  it("Should find the best meeting point", () => {
    expect(
      bestMeetingPoint([
        [1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
      ]),
    ).to.equal(6);
  });

  // 297. Serialize and Deserialize Binary Tree
  it("Should serialize and deserialize a binary tree", () => {
    let codec = new Serialize();
    let str = "1,2,null,5,null,null,3,null,null,";
    let root = {
      val: 1,
      left: {
        val: 2,
        left: null,
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
      right: {
        val: 3,
        left: null,
        right: null,
      },
    };
    let strSerialized = codec.serialize(root);
    expect(str).to.equal(strSerialized);
    let deserializedRoot = codec.deserialize(strSerialized);
    expect(root).to.deep.equal(deserializedRoot);
  });

  // 298. Binary Tree Longest Consecutive Sequence
  it("Should return longest consecutive sequence length", () => {
    expect(
      longestConsecutive([
        1,
        null,
        3,
        null,
        null,
        2,
        4,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        5,
      ]),
    ).to.equal(3);
    expect(
      longestConsecutive([
        2,
        null,
        3,
        null,
        null,
        2,
        null,
        null,
        null,
        null,
        1,
      ]),
    ).to.equal(2);
  });

  // 299. Bulls and Cows
  it("Should count bulls and cows", () => {
    expect(bullsAndCows("1807", "7810")).to.equal("1A3B");
    expect(bullsAndCows("1123", "0111")).to.equal("1A1B");
  });

  // 300. Longest Increasing Subsequence
  it("Should return longest sebsequence length", () => {
    expect(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18])).to.equal(
      4,
    );
  });
});
