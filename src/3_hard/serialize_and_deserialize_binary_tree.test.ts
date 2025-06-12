// Serialize and Deserialize Binary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits 
// so that it can be stored in a file or memory buffer, 
// or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
// Design an algorithm to serialize and deserialize a binary tree. 
// There is no restriction on how your serialization/deserialization algorithm should work. 
// You just need to ensure that a binary tree can be serialized to a string 
// and this string can be deserialized to the original tree structure.
// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. 
// You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/
// connect: tree

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

export function serialize(root: TreeNode | null): string {
  if (!root) return '';

  const res: string[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) {
      res.push('null');
    } else {
      res.push(String(node.val));
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Trim trailing 'null's
  while (res[res.length - 1] === 'null') {
    res.pop();
  }

  return res.join(',');
}

export function deserialize(data: string): TreeNode | null {
  if (!data) return null;

  const values = data.split(',');
  const root = new TreeNode(Number(values.shift()));
  const queue: TreeNode[] = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) continue;

    const leftVal = values.shift();
    if (leftVal !== undefined && leftVal !== 'null') {
      node.left = new TreeNode(Number(leftVal));
      queue.push(node.left);
    }

    const rightVal = values.shift();
    if (rightVal !== undefined && rightVal !== 'null') {
      node.right = new TreeNode(Number(rightVal));
      queue.push(node.right);
    }
  }

  return root;
}

function buildTree(): TreeNode {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.right.left = new TreeNode(4);
  root.right.right = new TreeNode(5);
  return root;
}

function areTreesEqual(a: TreeNode | null, b: TreeNode | null): boolean {
  if (!a && !b) return true;
  if (!a || !b || a.val !== b.val) return false;
  return areTreesEqual(a.left, b.left) && areTreesEqual(a.right, b.right);
}

describe('serialize and deserialize binary tree', () => {
  it('should serialize and deserialize correctly', () => {
    const originalTree = buildTree();
    const serialized = serialize(originalTree);
    const deserialized = deserialize(serialized);
    expect(areTreesEqual(originalTree, deserialized)).toBe(true);
  });

  it('should handle null root', () => {
    const serialized = serialize(null);
    expect(serialized).toBe('');
    const deserialized = deserialize('');
    expect(deserialized).toBeNull();
  });

  it('should handle single node tree', () => {
    const root = new TreeNode(42);
    const serialized = serialize(root);
    expect(serialized).toBe('42');
    const deserialized = deserialize(serialized);
    expect(deserialized?.val).toBe(42);
    expect(deserialized?.left).toBeNull();
    expect(deserialized?.right).toBeNull();
  });
});
