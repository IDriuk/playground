// Binary Tree Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/
// connect: interesting, stack, tree

describe('inorderTraversal', () => {
    it('should return an empty array for an empty tree', () => {
        // expect(inorderTraversal(null)).toEqual([]);
    });

    // it('should return correct inorder traversal for a single node', () => {
    //     const root = new TreeNode(1);
    //     expect(inorderTraversal(root)).toEqual([1]);
    // });

    // it('should return correct inorder traversal for a balanced tree', () => {
    //     //      1
    //     //       \
    //     //        2
    //     //       /
    //     //      3
    //     const root = new TreeNode(1);
    //     root.right = new TreeNode(2);
    //     root.right.left = new TreeNode(3);

    //     expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    // });

    // it('should return correct inorder traversal for a complete binary tree', () => {
    //     //       4
    //     //      / \
    //     //     2   5
    //     //    / \
    //     //   1   3
    //     const root = new TreeNode(4,
    //         new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    //         new TreeNode(5)
    //     );

    //     expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5]);
    // });
});
