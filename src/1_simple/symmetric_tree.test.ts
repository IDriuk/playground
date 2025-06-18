// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// https://leetcode.com/problems/symmetric-tree/submissions/
// connect: tree

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  let isSym = true;

  function checkSym(nl: TreeNode | null, nr: TreeNode | null): void {
    if (!nl && !nr) return;

    if (
      (nl && !nr) ||
      (!nl && nr) ||
      (nl && nr && nl.val !== nr.val)
    ) {
      isSym = false;
      return;
    }

    checkSym(nl!.left, nr!.right);
    checkSym(nl!.right, nr!.left);
  }

  checkSym(root.left, root.right);
  return isSym;
}


describe('isSymmetric', () => {
  it('returns true for a symmetric tree', () => {
    const root = new TreeNode(1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    );
    expect(isSymmetric(root)).toBe(true);
  });

  it('returns false for an asymmetric tree', () => {
    const root = new TreeNode(1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3))
    );
    expect(isSymmetric(root)).toBe(false);
  });

  it('returns true for a single-node tree', () => {
    const root = new TreeNode(1);
    expect(isSymmetric(root)).toBe(true);
  });

  it('returns true for an empty tree', () => {
    expect(isSymmetric(null)).toBe(true);
  });

  it('returns false for tree with root and only one child', () => {
    const root = new TreeNode(1, new TreeNode(2), null);
    expect(isSymmetric(root)).toBe(false);
  });
});


