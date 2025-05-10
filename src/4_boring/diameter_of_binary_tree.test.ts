// Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
// This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.
// https://leetcode.com/problems/diameter-of-binary-tree/submissions/
// connect: undefined

 // @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val ?? 0;
      this.left = left ?? null;
      this.right = right ?? null;
  }
}

var diameterOfBinaryTree = function(root: TreeNode) {
  if (!root) { return 0 }
  if (!root.left && !root.right) { return 0 }
  
  let diameter = 0
  
  function countSides(node: TreeNode) {
      let increment = 1
      let leftChildInc = 0
      let rightChildInc = 0
      
      if (node.left) {
          leftChildInc = countSides(node.left)
      }
      
      if (node.right) {
          rightChildInc = countSides(node.right)
      }
      
      let subDiameter = leftChildInc + rightChildInc
      if (subDiameter > diameter) { diameter = subDiameter }
      
      return increment + Math.max(leftChildInc, rightChildInc)
  }
  
  let countLeft = 0
  let countRight = 0
  if (root.left) {
      countLeft = countSides(root.left)
  }
  if (root.right) {
      countRight = countSides(root.right) 
  }
  let rootDiameter = countLeft + countRight
  
  return Math.max(diameter, rootDiameter) 
};


describe('Binary Tree Diameter', () => {
  test('returns 0 for null tree', () => {
    // @ts-expect-error
    expect(diameterOfBinaryTree(null)).toBe(0);
  });

  test('returns 0 for single node tree', () => {
    const root = new TreeNode(1);
    expect(diameterOfBinaryTree(root)).toBe(0);
  });

  test('calculates diameter for a simple balanced tree', () => {
    //      1
    //     / \
    //    2   3
    const root = new TreeNode(1, 
      new TreeNode(2), 
      new TreeNode(3)
    );
    expect(diameterOfBinaryTree(root)).toBe(2);
  });

  test('calculates diameter for a left-skewed tree', () => {
    //      1
    //     /
    //    2
    //   /
    //  3
    // /
    //4
    const root = new TreeNode(1, 
      new TreeNode(2, 
        new TreeNode(3,
          new TreeNode(4)
        )
      )
    );
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test('calculates diameter for a right-skewed tree', () => {
    //  1
    //   \
    //    2
    //     \
    //      3
    //       \
    //        4
    const root = new TreeNode(1, 
      null,
      new TreeNode(2, 
        null,
        new TreeNode(3,
          null,
          new TreeNode(4)
        )
      )
    );
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  test('calculates diameter for a complex tree', () => {
    //          1
    //         / \
    //        2   3
    //       / \   \
    //      4   5   6
    //         /     \
    //        7       8
    //       /
    //      9
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5,
          new TreeNode(7,
            new TreeNode(9)
          ),
          null
        )
      ),
      new TreeNode(3,
        null,
        new TreeNode(6,
          null,
          new TreeNode(8)
        )
      )
    );
    expect(diameterOfBinaryTree(root)).toBe(7);
  });

  test('calculates diameter when path doesn\'t pass through root', () => {
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    //     / \
    //    6   7
    // Longest path is 4 -> 2 -> 5 -> 7 (or 4 -> 2 -> 5 -> 6)
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5,
          new TreeNode(6),
          new TreeNode(7)
        )
      ),
      new TreeNode(3)
    );
    expect(diameterOfBinaryTree(root)).toBe(4);
  });

  test('calculates diameter for a wide tree', () => {
    //          1
    //         / \
    //        2   3
    //       /|   |\
    //      4 5   6 7
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(3,
        new TreeNode(6),
        new TreeNode(7)
      )
    );
    expect(diameterOfBinaryTree(root)).toBe(4);
  });

  test('calculates diameter for the example from LeetCode', () => {
    //      1
    //     / \
    //    2   3
    //   / \
    //  4   5
    // LeetCode states this should have diameter 3 (path: 4 -> 2 -> 1 -> 3)
    const root = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
      ),
      new TreeNode(3)
    );
    expect(diameterOfBinaryTree(root)).toBe(3);
  });
});