/*
  138. Copy List with Random Pointer
  A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
*/

class RandomNode<T> {
  public next?: RandomNode<T> | undefined = undefined;
  public random?: RandomNode<T> | undefined = undefined;
  constructor(public label: T) {}
}

type ListRandomNode = RandomNode<number> | undefined;

let visitedHash = new Map<ListRandomNode, ListRandomNode>();

export function copyRandomList(
  head: ListRandomNode,
): ListRandomNode | undefined {
  if (head == null) {
    return undefined;
  }

  if (visitedHash.has(head)) {
    return visitedHash.get(head);
  }

  let node = new RandomNode(head.label);
  visitedHash.set(head, node);

  node.next = copyRandomList(head.next);
  node.random = copyRandomList(head.random);

  return node;
}

let n0 = new RandomNode(0);
let n1 = new RandomNode(1);
let n2 = new RandomNode(2);

n0.next = n1;
n1.next = n2;
n2.random = n0;

copyRandomList.testList = n0;
