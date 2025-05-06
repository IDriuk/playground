// Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// https://leetcode.com/problems/binary-tree-level-order-traversal/submissions/
// connect: tree

// Define the TreeNode class
// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

/**
* Performs a level order traversal of a binary tree
* @param root - The root node of the binary tree
* @returns An array of arrays where each inner array contains the values of nodes at a level
*/
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
      return [];
  }

  const result: number[][] = [];
  const queue: (TreeNode | 'separator')[] = [root, 'separator'];
  let currentLevel: number[] = [];

  while (queue.length > 0) {
      const node = queue.shift();

      if (node === 'separator') {
          result.push(currentLevel);
          currentLevel = [];
          
          if (queue.length > 0) {
              queue.push('separator');
          } else {
              break;
          }
      } else {
          currentLevel.push(node!.val);
          
          if (node!.left !== null) {
              queue.push(node!.left);
          }
          
          if (node!.right !== null) {
              queue.push(node!.right);
          }
      }
  }

  return result;
}

describe('Binary Tree Level Order Traversal', () => {
    test('Should return empty array for null input', () => {
        expect(levelOrder(null)).toEqual([]);
    });

    test('Should handle single node tree', () => {
        const root = new TreeNode(1);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    test('Should handle tree with multiple levels', () => {
        // Tree structure:
        //     3
        //    / \
        //   9  20
        //     /  \
        //    15   7
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    test('Should handle unbalanced tree', () => {
        // Tree structure:
        //     1
        //      \
        //       2
        //        \
        //         3
        //          \
        //           4
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        root.right.right.right = new TreeNode(4);

        expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
    });

    test('Should handle tree with null nodes', () => {
        // Tree structure:
        //     1
        //    / \
        //   2   null
        //  / \
        // 3  null
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);

        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('Should handle tree with isolated nodes', () => {
        // Tree structure:
        //     1
        //    / \
        //  null 2
        //      / \
        //    null 3
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);

        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test('Should handle complex tree', () => {
        // Tree structure:
        //       1
        //      / \
        //     2   3
        //    / \ / \
        //   4  5 6  7
        //  /         \
        // 8           9
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        root.left.left.left = new TreeNode(8);
        root.right.right.right = new TreeNode(9);

        expect(levelOrder(root)).toEqual([[1], [2, 3], [4, 5, 6, 7], [8, 9]]);
    });
});
