/*
  94. Binary Tree Inorder Traversal
  Given a binary tree, return the inorder traversal of its nodes' vals.
  Follow up: Recursive solution is trivial, could you do it iteratively?
*/

export function binaryTreeInorderTraversal(tree: (number | null)[]): number[] {
  let root = arrayToTree(tree);
  let res: number[] = [];
  let stack: TreeNode[] = [];
  let curr = root;

  while (curr != null || stack.length > 0) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop()!;
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export function arrayToTree(arr: (number | null)[]): TreeNode | null {
  // Helper function to recursively construct the tree
  function buildTree(index: number): TreeNode | null {
    // If index is out of bounds or the element at index is null, return null
    if (index >= arr.length || arr[index] === null) {
      return null;
    }

    // Create a TreeNode for the current element
    const node = new TreeNode(arr[index] as number);

    // Recursively build left and right subtrees
    node.left = buildTree(2 * index + 1);
    node.right = buildTree(2 * index + 2);

    return node;
  }

  // Start constructing the tree from the root (index 0)
  return buildTree(0);
}

export function treeToArray(root: TreeNode | null): (number | null)[] {
  const result: (number | null)[] = [];
  const queue: (TreeNode | null)[] = []; // Queue to perform level-order traversal

  if (root !== null) {
    queue.push(root); // Enqueue the root node
  }

  while (queue.length > 0) {
    const node = queue.shift(); // Dequeue a node from the front of the queue

    if (node !== null) {
      result.push(node!.val); // Add the node's val to the result array

      // Enqueue the left and right child nodes
      queue.push(node!.left);
      queue.push(node!.right);
    } else {
      result.push(null); // Add null to represent the absence of a node
    }
  }

  // Trim trailing null vals
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }

  return result;
}

// Example usage:
// const arr = [1, 2, 3, 4, null, null, 5, 6, null, null, null, null, null, null, 7];
// const root = arrayToTree(arr);
// console.log(root);

// const newArray = treeToArray(root);
// console.log(newArray);
