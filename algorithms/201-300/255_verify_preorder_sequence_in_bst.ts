/*
  255. Verify Preorder Sequence in Binary Search Tree.
  Given an array of numbers,
  verify whether it is the correct preorder traversal siquence of a binary search tree.
  
  You may assume each number in the sequence is unique.

  Consider the following binary search tree:
     5
    / \
   2   6
  /\
 1  3
*/

export function verifyPreorderBST(preorder: number[]) {
  let low = -Infinity;
  let path = Array<number>();
  for (let p of preorder) {
    if (p < low) {
      return false;
    }
    while (path.length && p > path.at(-1)!) {
      low = path.pop()!;
    }
    path.push(p);
  }
  return true;
}
