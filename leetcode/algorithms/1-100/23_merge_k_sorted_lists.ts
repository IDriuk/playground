/* 
  23. Merge k Sorted Lists
  Merge k sorted linked lists and return it as one sorted list. 
  Analyze and describe its complexity.
*/

import { Node } from "./2_add_two_numbers";

export function mergeKLists(lists: Node<number>[]): Node<number> | undefined {
  let ar: number[] = [];

  for (let list of lists) {
    while (true) {
      ar.push(list.val);
      if (list.next) {
        list = list.next;
      } else {
        break;
      }
    }
  }

  ar.sort();

  let head: Node<number> = { val: 0 };
  let p = head;
  for (let i = 0; i < ar.length; i++) {
    p.next = { val: ar[i] };
    p = p.next;
  }

  return head.next;
}
