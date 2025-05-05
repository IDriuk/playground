// Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
// connect: interesting, stack, tree

// var inorderTraversal = function(root) {
//     let res = []
//     function trav(node) {
//         if (!node) { 
//             return 
//         } else {
//             trav(node.left)
//             res.push(node.val)
//             trav(node.right)
//         }    
//     }
//     trav(root)
//     return res
// };

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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  let cur: TreeNode | null = root;

  while (cur || stack.length > 0) {
      while (cur) {
          stack.push(cur);
          cur = cur.left;
      }
      cur = stack.pop()!;
      res.push(cur.val);
      cur = cur.right;
  }

  return res;
}

describe('inorderTraversal', () => {
    it('should return an empty array for an empty tree', () => {
        expect(inorderTraversal(null)).toEqual([]);
    });

    it('should return correct inorder traversal for a single node', () => {
        const root = new TreeNode(1);
        expect(inorderTraversal(root)).toEqual([1]);
    });

    it('should return correct inorder traversal for a balanced tree', () => {
        //      1
        //       \
        //        2
        //       /
        //      3
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.left = new TreeNode(3);

        expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    });

    it('should return correct inorder traversal for a complete binary tree', () => {
        //       4
        //      / \
        //     2   5
        //    / \
        //   1   3
        const root = new TreeNode(4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(5)
        );

        expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5]);
    });
});
