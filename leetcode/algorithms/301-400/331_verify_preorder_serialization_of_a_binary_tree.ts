/*
  331. Verify Preorder Serialization of a Binary Tree
  One way to serialize a binary tree is to use pre-order traversal.
  When we encounter a non-null node, we record the node's value.
  If it is null node, we record using a sentinel value such as #.
  For example , the above binary tree can be serialized to the string "9,3,4,#,#,1,#,#,2,#,6,#,#",
  where # represents a null node.
  Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree.
  Find an algorithm without reconstructing the tree.
  Each comma separated value in the string must be either an integer or a character '#' representing null pointer.
  You may assume that the input format is always valid,
  for example it could never contain two consecutive commas such as "1,,3".
*/

export function isValidSerialization(preorder: string) {
  let stack: string[] = [];
  let nodes = preorder.split(",");
  for (let i = 0; i < nodes.length; i++) {
    let curr = nodes[i];
    while (curr == "#" && stack.length && stack.at(-1) == "#") {
      stack.pop();
      if (!stack.length) {
        return false;
      }
      stack.pop();
    }
    stack.push(curr);
  }
  return stack.length == 1 && stack[0] == "#";
}
