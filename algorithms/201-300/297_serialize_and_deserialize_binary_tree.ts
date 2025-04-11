/*  
  297. Serialize and Deserialize Binary Tree
  Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, 
  or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

  Design an algorithm to serialize and deserialize a binary tree.
  There is no restriction on how your serialization/deserialization algorithm should work.
  You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
*/

import { TreeNode } from "../1-100";

export class Serialize {
  serialize(root: TreeNode, str = ""): string {
    if (root == null) {
      str += "null,";
    } else {
      str += `${root.val},`;
      str = this.serialize(root.left!, str);
      str = this.serialize(root.right!, str);
    }
    return str;
  }

  deserialize(s: string) {
    let a = s.split(",");

    let d = (a: string[]) => {
      if (a.length == 0) {
        return null;
      }
      let el = a.shift()!;
      if (el == "null") {
        return null;
      }

      let root = new TreeNode(+el);
      root.left = d(a)!;
      root.right = d(a)!;

      return root;
    };

    return d(a);
  }
}
