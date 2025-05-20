// Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: 
// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T 
// that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// connect: tree

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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return null;

  const pPath: TreeNode[] = [];
  const qPath: TreeNode[] = [];
  let hasP = false;
  let hasQ = false;

  search(root, [], p.val, q.val);

  let i = 0;
  while (pPath[i] && qPath[i] && pPath[i].val === qPath[i].val) {
    i++;
  }

  return qPath[i - 1] || null;

  function search(node: TreeNode | null, path: TreeNode[], pVal: number, qVal: number): void {
    if (hasP && hasQ || !node) {
      return;
    }

    const currentPath = [...path, node];

    if (node.val === pVal) {
      pPath.push(...currentPath);
      hasP = true;
    }

    if (node.val === qVal) {
      qPath.push(...currentPath);
      hasQ = true;
    }

    search(node.left, currentPath, pVal, qVal);
    search(node.right, currentPath, pVal, qVal);
  }
}

// Tests
describe('lowestCommonAncestor', () => {
  // Helper function to create a tree from an array
  function createTree(arr: (number | null)[], index = 0): TreeNode | null {
    if (index >= arr.length || arr[index] === null) return null;
    const node = new TreeNode(arr[index] as number);
    node.left = createTree(arr, 2 * index + 1);
    node.right = createTree(arr, 2 * index + 2);
    return node;
  }

  // Helper function to find a node by value
  function findNode(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
  }

  it('should find LCA for simple binary tree', () => {
    /*
          3
         / \
        5   1
       / \ / \
      6  2 0 8
        / \
       7   4
    */
    const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const p = findNode(tree, 5);
    const q = findNode(tree, 1);
    const lca = lowestCommonAncestor(tree, p, q);
    expect(lca?.val).toBe(3);
  });

  it('should find LCA when one node is ancestor of another', () => {
    const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const p = findNode(tree, 5);
    const q = findNode(tree, 4);
    const lca = lowestCommonAncestor(tree, p, q);
    expect(lca?.val).toBe(5);
  });

  it('should find LCA for nodes in left subtree', () => {
    const tree = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
    const p = findNode(tree, 6);
    const q = findNode(tree, 7);
    const lca = lowestCommonAncestor(tree, p, q);
    expect(lca?.val).toBe(5);
  });

  it('should return null when root is null', () => {
    const lca = lowestCommonAncestor(null, new TreeNode(1), new TreeNode(2));
    expect(lca).toBeNull();
  });

  it('should return null when p or q is null', () => {
    const tree = createTree([1, 2]);
    const p = findNode(tree, 1);
    const lca1 = lowestCommonAncestor(tree, p, null);
    const lca2 = lowestCommonAncestor(tree, null, p);
    expect(lca1).toBeNull();
    expect(lca2).toBeNull();
  });

  it('should work when p equals q', () => {
    const tree = createTree([1, 2, 3]);
    const p = findNode(tree, 2);
    const lca = lowestCommonAncestor(tree, p, p);
    expect(lca?.val).toBe(2);
  });
});