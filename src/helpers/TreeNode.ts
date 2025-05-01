export default class TreeNode {
  data: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data: number) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new TreeNode(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new TreeNode(data);
    }
  }

  contains(data: number): TreeNode | null {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}