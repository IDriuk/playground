import {
  isSymmetricTree,
  binaryTreeLevelOrder,
  binaryTreeZigzagLevelOrder,
  maxDepth,
  treeFromPreorderInorder,
  treeFromInorderPostorder,
  binaryTreeLevelOrder2,
  sortedArrayToBST,
  sortedListToBST,
  balancedBinaryTree,
  treeMinDepth,
  hasPathSum,
  hasPathSum2,
  flattenTree,
  distinctSubsequences,
  populateNextRight,
  populateNextRight2,
  pascalTriangle,
  pascalTriangle2,
  triangleMinimumPath,
  maxProfit,
  maxProfit2,
  maxProfit3,
  maxPathSum,
  isPalindrome,
  wordLadder2,
  wordLadder,
  longestConsecutiveSequence,
  rootToLeafSum,
  surrondedRegions,
  palindromePartition,
  palindromePartition2,
  cloneGraph,
  canCompleteCircuit,
  candy,
  singleNumber,
  singleNumber2,
  copyRandomList,
  wordBreak,
  wordBreak2,
  listCycle,
  listCycle2,
  reorderList,
  treePreorderTraversal,
  treePostorderTraversal,
  LRUCache,
  insertionSort,
  sortList,
  maxPoints,
  evalRPN,
  reverseWords,
  maxProduct,
  minRotatedArray,
  minRotatedArray2,
  MinStack,
  upsideDownBinaryTree,
  /* 157_read_n_characters_given_read4 */
  /* 158_read_n_characters_given_read4_2 */
  longestWithTwoDistinct,
  getIntersectionNode,
  isOneEditDistance,
  findPeakElement,
  missingRanges,
  maximumGap,
  compareVersion,
  fractionToDecimal,
  twoSum2,
  convertToTitle,
  majorityElement,
  TwoSum3,
  titleToNumber,
  factorialTrailingZeroes,
  getBinarySearchTreeIterator,
  calculateMinimumHP,
  /* 175 - 178 */
  largestNumber,
  /* 180 - 185 */
  reverseWords2,
  findRepeatedDnaSequences,
  maxProfit4,
  rotateArray,
  reverseBits,
  hammingWeight,
  /* 192 - 197 */
  rob,
  rightSideView,
  numberOfIslands,
} from "../algorithms";

describe("Algorithm tests from 101 to 200", () => {
  // 101. Symmetric Tree
  it("Should check whether tree is a mirror", () => {
    expect(isSymmetricTree([1, 2, 2, 3, 4, 4, 3])).to.equal(true);
    expect(isSymmetricTree([1, 2, 2, null, 3, null, 3])).to.equal(false);
  });

  // 102. Binary Tree Level Order Traversal
  it("Should make level order traversal of the tree", () => {
    expect(binaryTreeLevelOrder([3, 9, 20, null, null, 15, 7])).to.deep.equal([
      [3],
      [9, 20],
      [15, 7],
    ]);
  });

  // 103. Binary Tree Zigzag Level Order Traversal
  it("Should make zigzag level order traversal of the tree", () => {
    expect(
      binaryTreeZigzagLevelOrder([3, 9, 20, null, null, 15, 7]),
    ).to.deep.equal([[3], [20, 9], [15, 7]]);
  });

  // 104. Maximum Depth of Binary Tree
  it("Should return maximum depth of binary tree", () => {
    expect(maxDepth([3, 9, 20, null, null, 15, 7])).to.equal(3);
  });

  // 105. Construct Binary Tree from Preorder and Inorder Traversal
  it("Should build tree from preorder and inorder traversal", () => {
    expect(
      treeFromPreorderInorder([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]),
    ).to.deep.equal([3, 9, 20, null, null, 15, 7]);
  });

  // 106. Construct Binary Tree from Inorder and Postorder Traversal
  it("Should build tree from inorder and postorder traversal", () => {
    expect(
      treeFromInorderPostorder([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]),
    ).to.deep.equal([3, 9, 20, null, null, 15, 7]);
  });

  // 107. Binary Tree Level Order Traversal II
  it("Should make bottom-up level order traversal of the tree", () => {
    expect(binaryTreeLevelOrder2([3, 9, 20, null, null, 15, 7])).to.deep.equal([
      [15, 7],
      [9, 20],
      [3],
    ]);
  });

  // 108. Convert Sorted Array to Binary Search Tree
  it("Should make BST from sorted array", () => {
    expect(sortedArrayToBST([-10, -3, 0, 5, 9])).to.deep.equal([
      0,
      -10,
      5,
      null,
      -3,
      null,
      9,
    ]);
  });

  // 109. Convert Sorted List to Binary Search Tree
  it("Should make BST from sorted list", () => {
    expect(sortedListToBST([-10, -3, 0, 5, 9])).to.deep.equal([
      0,
      -3,
      9,
      -10,
      null,
      5,
    ]);
  });

  // 110. Balanced Binary Tree
  it("Should check if binary tree is balanced", () => {
    expect(balancedBinaryTree([3, 9, 20, null, null, 15, 7])).to.equal(true);
    expect(balancedBinaryTree([1, 2, 2, 3, 3, null, null, 4, 4])).to.equal(
      false,
    );
  });

  // 111. Minimum Depth of Binary Tree
  it("Should return minimum depth of binary tree", () => {
    expect(treeMinDepth([3, 9, 20, null, null, 15, 7])).to.equal(2);
  });

  // 112. Path Sum
  it("Should find path equal to sum", () => {
    expect(
      hasPathSum(
        [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1],
        22,
      ),
    ).to.equal(true);
  });

  // 113. Path Sum II
  it("Should return paths equal to sum", () => {
    expect(
      hasPathSum2(
        [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, 5, 1],
        22,
      ),
    ).to.deep.equal([
      [5, 4, 11, 2],
      [5, 8, 4, 5],
    ]);
  });

  // 114. Flatten Binary Tree to Linked List.
  it("Should flatten binary tree to linked list", () => {
    expect(flattenTree([1, 2, 5, 3, 4, null, 6])).to.deep.equal([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  // 115. Distinct Subsequences
  it("Should return number of distinct subsequences for t out of s", () => {
    expect(distinctSubsequences("rabbbit", "rabbit")).to.equal(3);
    expect(distinctSubsequences("babgbag", "bag")).to.equal(5);
  });

  // 116. Populating Next Right Pointers in Each Node
  it("Should connect each node with right node (perfect binary tree)", () => {
    expect(populateNextRight([1, 2, 3, 4, 5, 6, 7])).to.deep.equal([
      [1],
      [2, 3],
      [4, 5, 6, 7],
    ]);
  });

  // 117. Populating Next Right Pointers in Each Node II.
  it("Should connect each node with right node", () => {
    expect(populateNextRight2([1, 2, 3, 4, 5, null, 7])).to.deep.equal([
      [1],
      [2, 3],
      [4, 5, 7],
    ]);
  });

  // 118. Pascal's Triangle
  it("Should return pascal's triangle", () => {
    expect(pascalTriangle(5)).to.deep.equal([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  // 119. Pascal's Triangle II
  it("Should return k-th index row of pascals triangle", () => {
    expect(pascalTriangle2(3)).to.deep.equal([1, 3, 3, 1]);
  });

  // 120. Triangle
  it("Should return minimum path from top to bottom of triangle", () => {
    expect(
      triangleMinimumPath([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]),
    ).to.equal(11);
  });

  // 121. Best Time to Buy and Sell Stock.
  it("Should return max profit for one buy and sell", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(5);
  });

  // 122. Best Time to Buy and Sell Stock II.
  it("Should return max profit for multiple buy and sell", () => {
    expect(maxProfit2([7, 1, 5, 3, 6, 4])).to.equal(7);
  });

  // 123. Best Time to Buy and Sell Stock III.
  it("Should return max profit for at most two buy and sell", () => {
    expect(maxProfit3([3, 3, 5, 0, 0, 3, 1, 4])).to.equal(6);
  });

  // 124. Binary Tree Maximum Path Sum
  it("Should return tree maximum path sum", () => {
    expect(maxPathSum([1, 2, 3])).to.equal(6);
    expect(maxPathSum([-10, 9, 20, null, null, 15, 7])).to.equal(42);
  });

  // 125. Valid Palindrome
  it("Should validate palindrome", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).to.equal(true);
    expect(isPalindrome("race a car")).to.equal(false);
  });

  // 126. Word Ladder II
  it("Should return shortest paths between words", () => {
    expect(
      wordLadder2("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
    ).to.deep.equal([
      ["hit", "hot", "dot", "dog", "cog"],
      ["hit", "hot", "lot", "log", "cog"],
    ]);
  });

  // 127. Word Ladder
  it("Should return length of shortest path between words", () => {
    expect(
      wordLadder("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
    ).to.equal(5);
  });

  // 128. Longest Consecutive Sequence
  it("Should return longest consecutive sequence", () => {
    expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).to.equal(4);
  });

  // 129. Sum Root to Leaf Numbers
  it("Should returm sum of root to leaf numbers", () => {
    expect(rootToLeafSum([1, 2, 3])).to.equal(25);
    expect(rootToLeafSum([4, 9, 0, 5, 1])).to.equal(1026);
  });

  // 130. Surrounded Regions
  it("Should replace 'O' to 'X' in surrounded regions", () => {
    let board = [
      ["X", "X", "X", "X"],
      ["X", "O", "O", "X"],
      ["X", "X", "O", "X"],
      ["X", "O", "X", "X"],
    ];
    surrondedRegions(board);
    expect(board).to.deep.equal([
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "X", "X", "X"],
      ["X", "O", "X", "X"],
    ]);
  });

  // 131. Palindrome Partitioning
  it("Should return all possible palindrome partitioning", () => {
    expect(palindromePartition("aab")).to.deep.equal([
      ["a", "a", "b"],
      ["aa", "b"],
    ]);
  });

  // 132. Palindrome Partitioning II
  it("Should return the minimum cuts", () => {
    expect(palindromePartition2("aab")).to.equal(1);
  });

  // 133. Clone Graph.
  it("Should clone graph", () => {
    let n0 = { label: 0 };
    let n1 = { label: 1 };
    let n2 = { label: 2 };
    /* @ts-ignore */
    n0.neighbors = [n1, n2];
    /* @ts-ignore */
    n1.neighbors = [n0, n2];
    /* @ts-ignore */
    n2.neighbors = [n0, n1, n2];

    /* @ts-ignore */
    expect(cloneGraph(n0)).to.deep.equal(n0);
  });

  // 134. Gas Station
  it("Should return starting gas station", () => {
    expect(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])).to.equal(3);
  });

  // 135. Candy
  it("Should return the minimum candies", () => {
    expect(candy([1, 0, 2])).to.equal(5);
    expect(candy([1, 2, 2])).to.equal(4);
  });

  // 136. Single Number
  it("Should return single number", () => {
    expect(singleNumber([2, 2, 1])).to.equal(1);
    expect(singleNumber([4, 1, 2, 1, 2])).to.equal(4);
  });

  // 137. Single Number II
  it("Should return single number for triples", () => {
    expect(singleNumber2([2, 2, 3, 2])).to.equal(3);
    expect(singleNumber2([0, 1, 0, 1, 0, 1, 99])).to.equal(99);
  });

  // 138. Copy List with Random Pointer
  it("Should copy the list with nodes with random pointers", () => {
    let head = copyRandomList.testList;
    expect(copyRandomList(head)).to.deep.equal(head);
  });

  // 139. Word Break
  it("Should return if can break word", () => {
    expect(wordBreak("leetcode", ["leet", "code"])).to.equal(true);
    expect(wordBreak("applepenapple", ["apple", "pen"])).to.equal(true);
    expect(
      wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
    ).to.equal(false);
  });

  // 140. Word Break II
  it("Should break word and return all possible sentences", () => {
    expect(
      wordBreak2("catsanddog", ["cats", "dog", "sand", "and", "cat"]),
    ).to.deep.equal(["cat sand dog", "cats and dog"]);
    expect(
      wordBreak2("pineapplepenapple", [
        "apple",
        "pen",
        "applepen",
        "pine",
        "pineapple",
      ]),
    ).to.deep.equal([
      "pine applepen apple",
      "pineapple pen apple",
      "pine apple pen apple",
    ]);
    expect(
      wordBreak2("catsandog", ["cats", "dog", "sand", "and", "cat"]),
    ).to.deep.equal([]);
  });

  // 141. Linked List Cycle
  it("Should determine circle", () => {
    expect(listCycle(listCycle.testList)).to.equal(true);
  });

  // 142. Linked List Cycle II
  it("Should determine cycle start point", () => {
    expect(listCycle2(listCycle2.testList)).to.equal(2);
  });

  // 143. Reorder List
  it("Should reorder list", () => {
    expect(reorderList([1, 2, 3, 4])).to.deep.equal([1, 4, 2, 3]);
    expect(reorderList([1, 2, 3, 4, 5])).to.deep.equal([1, 5, 2, 4, 3]);
  });

  // 144. Binary Tree Preorder Traversal
  it("Should return binary tree preorder traversal", () => {
    expect(treePreorderTraversal([1, null, 2, null, null, 3])).to.deep.equal([
      1, 2, 3,
    ]);
  });

  // 145. Binary Tree Postorder Traversal
  it("Should return binary tree postorder traversal", () => {
    expect(treePostorderTraversal([1, null, 2, null, null, 3])).to.deep.equal([
      3, 2, 1,
    ]);
  });

  // 146. LRU Cache
  it("Should implement LRU cache", () => {
    let cache = new LRUCache(2);
    cache.set(1, 1);
    cache.set(2, 2);
    expect(cache.get(1)).to.equal(1);
    cache.set(3, 3);
    expect(cache.get(2)).to.equal(-1);
    cache.set(4, 4);
    expect(cache.get(1)).to.equal(-1);
    expect(cache.get(3)).to.equal(3);
    expect(cache.get(4)).to.equal(4);
  });

  // 147. Insertion Sort List
  it("Should sort list with insertion sort", () => {
    expect(insertionSort([4, 2, 1, 3])).to.deep.equal([1, 2, 3, 4]);
    expect(insertionSort([-1, 5, 3, 4, 0])).to.deep.equal([-1, 0, 3, 4, 5]);
  });

  // 148. Sort List
  it("Should sort list with merge sort", () => {
    expect(sortList([4, 2, 1, 3])).to.deep.equal([1, 2, 3, 4]);
    expect(sortList([-1, 5, 3, 4, 0])).to.deep.equal([-1, 0, 3, 4, 5]);
  });

  // 149. Max Points on a Line
  it("Should find the maximum number of points", () => {
    expect(
      maxPoints([
        [1, 1],
        [2, 2],
        [3, 3],
      ]),
    ).to.equal(3);

    expect(
      maxPoints([
        [1, 1],
        [3, 2],
        [5, 3],
        [4, 1],
        [2, 3],
        [1, 4],
      ]),
    ).to.equal(4);
  });

  // 150. Evaluate Reverse Polish Notation
  it("Should evaluate reverse polish notation", () => {
    expect(evalRPN(["2", "1", "+", "3", "*"])).to.equal(9);
    expect(evalRPN(["4", "13", "5", "/", "+"])).to.equal(6);
    expect(
      evalRPN([
        "10",
        "6",
        "9",
        "3",
        "+",
        "-11",
        "*",
        "/",
        "*",
        "17",
        "+",
        "5",
        "+",
      ]),
    ).to.equal(22);
  });

  // 151. Reverse Words in a String
  it("Should reverse words in the string", () => {
    expect(reverseWords("the sky is blue")).to.equal("blue is sky the");
  });

  // 152. Maximum Product Subarray
  it("Should return maximum product subarray", () => {
    expect(maxProduct([2, 3, -2, 4])).to.equal(6);
    expect(maxProduct([-2, 0, -1])).to.equal(0);
  });

  // 153. Find Minimum in Rotated Sorted Array
  it("Should return minimum in rotated sorted array", () => {
    expect(minRotatedArray([3, 4, 5, 1, 2])).to.equal(1);
    expect(minRotatedArray([4, 5, 6, 7, 0, 1, 2])).to.equal(0);
  });

  // 154. Find Minimum in Rotated Sorted Array II
  it("Should return minimum in rotated sorted array with duplicates", () => {
    expect(minRotatedArray2([1, 3, 5])).to.equal(1);
    expect(minRotatedArray2([2, 2, 2, 0, 1])).to.equal(0);
  });

  // 155. Min Stack
  it("Should return stack and retrieving the minimum in constant time", () => {
    let stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.getMin()).to.equal(-3);
    stack.pop();
    expect(stack.top()).to.equal(0);
    expect(stack.getMin()).to.equal(-2);
  });

  // 156. Binary Tree Upside Down
  it("Should flip binary tree upside down", () => {
    expect(upsideDownBinaryTree([1, 2, 3, 4, 5])).to.deep.equal([
      4,
      5,
      2,
      null,
      null,
      3,
      1,
    ]);
  });

  // 157. Read N Characters Given Read4

  // 158. Read N Characters Given Read4 II - Call multiple times

  // 159. Longest Substring with At Most Two Distinct Characters.
  it("Should return length of longest substring with two distinct", () => {
    expect(longestWithTwoDistinct("eceba")).to.equal(3);
    expect(longestWithTwoDistinct("ccaabbb")).to.equal(5);
  });

  // 160. Intersection of Two Linked Lists
  it("Should find intersection node", () => {
    expect(getIntersectionNode([1, 2, 3, 4, 5, 6], [7, 8, 5, 6])).to.equal(5);
  });

  // 161. One Edit Distance
  it("Should return if it has one edit distance", () => {
    expect(isOneEditDistance("ab", "acb")).to.equal(true);
    expect(isOneEditDistance("cab", "ad")).to.equal(false);
    expect(isOneEditDistance("1203", "1213")).to.equal(true);
  });

  // 162. Find Peak Element
  it("Should return peak element", () => {
    expect(findPeakElement([1, 2, 3, 1])).to.equal(2);
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).to.be.oneOf([1, 5]);
  });

  // 163. Missing Ranges
  it("Should return missing ranges", () => {
    expect(missingRanges([0, 1, 3, 50, 75], 0, 99)).to.deep.equal([
      "2",
      "4->49",
      "51->74",
      "76->99",
    ]);
  });

  // 164. Maximum Gap
  it("Should return max gap in usorted array", () => {
    expect(maximumGap([3, 6, 9, 1])).to.equal(3);
    expect(maximumGap([10])).to.equal(0);
  });

  // 165. Compare Version Numbers
  it("Should compare versions", () => {
    expect(compareVersion("0.1", "1.1")).to.equal(-1);
    expect(compareVersion("1.0.1", "1")).to.equal(1);
    expect(compareVersion("7.5.2.4", "7.5.3")).to.equal(-1);
  });

  // 166. Fraction to Recurring Decimal.
  it("Should convert fraction to decimal", () => {
    expect(fractionToDecimal(1, 2)).to.equal("0.5");
    expect(fractionToDecimal(2, 1)).to.equal("2");
    expect(fractionToDecimal(2, 3)).to.equal("0.(6)");
  });

  // 167. Two Sum II - Input array is sorted
  it("Should return positions of numbers which sums up to target", () => {
    expect(twoSum2([2, 7, 11, 15], 9)).to.deep.equal([1, 2]);
  });

  // 168. Excel Sheet Column Title
  it("Should convert number to excel title", () => {
    expect(convertToTitle(1)).to.equal("A");
    expect(convertToTitle(28)).to.equal("AB");
    expect(convertToTitle(701)).to.equal("ZY");
  });

  // 169. Majority Element
  it("Should return majority element", () => {
    expect(majorityElement([3, 2, 3])).to.equal(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).to.equal(2);
  });

  // 170. Two Sum III - Data structure design
  it("Should design two sum class", () => {
    let twoSum = new TwoSum3();
    let { add, find } = twoSum;
    add(1);
    add(3);
    add(5);
    expect(find(4)).to.equal(true);
    expect(find(7)).to.equal(false);
    add(2);
    expect(find(3)).to.equal(true);
  });

  // 171. Excel Sheet Column Number
  it("Should convert excel title to number", () => {
    expect(titleToNumber("A")).to.equal(1);
    expect(titleToNumber("AB")).to.equal(28);
    expect(titleToNumber("ZY")).to.equal(701);
  });

  // 172. Factorial Trailing Zeroes
  it("Should return factorial trailing zeroes number", () => {
    expect(factorialTrailingZeroes(3)).to.equal(0);
    expect(factorialTrailingZeroes(5)).to.equal(1);
  });

  // 173. Binary Search Tree Iterator
  it("Should make BST iterator", () => {
    let iterator = getBinarySearchTreeIterator([5, 3, 7, 2, 4, 6, 8]);
    expect(iterator.next()).to.equal(2);
    expect(iterator.next()).to.equal(3);
    expect(iterator.next()).to.equal(4);
    expect(iterator.next()).to.equal(5);
    expect(iterator.next()).to.equal(6);
    expect(iterator.next()).to.equal(7);
    expect(iterator.hasNext()).to.equal(true);
    expect(iterator.next()).to.equal(8);
    expect(iterator.hasNext()).to.equal(false);
  });

  // 174. Dungeon  Game
  it("Should calculate minimum HP", () => {
    expect(
      calculateMinimumHP([
        [-2, -5, 10],
        [-3, -10, 30],
        [3, 1, -5],
      ]),
    ).to.equal(7);
  });

  // 179. Largest Number
  it("Should return largest number string", () => {
    expect(largestNumber([10, 2])).to.equal("210");
    expect(largestNumber([3, 30, 34, 5, 9])).to.equal("9534330");
  });

  // 186. Reverse Words in a String II
  it("Should reverse words in the string", () => {
    let words = [
      "t",
      "h",
      "e",
      " ",
      "s",
      "k",
      "y",
      " ",
      "i",
      "s",
      " ",
      "b",
      "l",
      "u",
      "e",
    ];
    reverseWords2(words);
    expect(words).to.deep.equal([
      "b",
      "l",
      "u",
      "e",
      " ",
      "i",
      "s",
      " ",
      "s",
      "k",
      "y",
      " ",
      "t",
      "h",
      "e",
    ]);
  });

  // 187. Repeated DNA Sequences.
  it("Should return repeated DNA sequences", () => {
    expect(
      findRepeatedDnaSequences("AAAAACCCCCAAAAATCCCCCAAAAACCCCC"),
    ).to.deep.equal(["CCCCCAAAAA", "AAAAACCCCC"]);
  });

  // 188. Best Time to Buy and Sell Stock IV
  it("Should return max profit for k transactions", () => {
    expect(maxProfit4(2, [2, 4, 1])).to.equal(2);
    expect(maxProfit4(2, [3, 2, 6, 5, 0, 3])).to.equal(7);
  });

  // 189. Rotate Array
  it("Should rotate array", () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).to.deep.equal([
      5, 6, 7, 1, 2, 3, 4,
    ]);
    expect(rotateArray([-1, 100, 3, 99], 2)).to.deep.equal([3, 99, -1, 100]);
  });

  // 190. Reverse Bits.
  it("Should reverse bits", () => {
    expect(reverseBits(43261596)).to.equal(964176192);
  });

  // 191. Number of 1 Bits
  it("Should return number of 1 bits", () => {
    expect(hammingWeight(11)).to.equal(3);
    expect(hammingWeight(128)).to.equal(1);
  });

  // 198. House Robber
  it("Should return the maximum amount to rob", () => {
    expect(rob([1, 2, 3, 1])).to.equal(4);
    expect(rob([2, 7, 9, 3, 1])).to.equal(12);
  });

  // 199. Binary Tree Right Side View
  it("Should return right side view", () => {
    expect(rightSideView([1, 2, 3, null, 5, null, 4])).to.deep.equal([1, 3, 4]);
  });

  // 200. Number of Islands.
  it("Should return number of islands", () => {
    expect(
      numberOfIslands([
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ]),
    ).to.equal(1);

    expect(
      numberOfIslands([
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1],
      ]),
    ).to.equal(3);
  });
});
