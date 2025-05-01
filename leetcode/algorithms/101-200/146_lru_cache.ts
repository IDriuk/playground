/*
  146. LRU Cache
  Design and implement a data structure for Least Recently Used (LRU) cache.
  It should support the following operations: get and put.

  get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
  put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
  
  Follow up:
  Could you do both operations in O(1) time complexity?
*/

class Node<T> {
  public next?: Node<T> | undefined = undefined;
  public prev?: Node<T> | undefined = undefined;
  constructor(
    public key: T,
    public val: T,
  ) {}
}

export class LRUCache {
  public head = new Node(0, 0);
  public tail = new Node(0, 0);
  public cache: Map<number, Node<number>> = new Map();
  constructor(public capacity: number) {
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.moveToHead = this.moveToHead.bind(this);
    this.removeNode = this.removeNode.bind(this);
    this.addNode = this.addNode.bind(this);
  }

  get(key: number): number {
    if (!this.cache?.has(key)) {
      return -1;
    }
    let node = this.cache.get(key);
    this.moveToHead(node!);
    return node!.val;
  }

  set(key: number, value: number) {
    let { cache, tail, capacity, moveToHead, addNode, removeNode } = this;
    if (cache.has(key)) {
      let node = cache.get(key);
      node!.val = value;
      moveToHead(node!);
    } else {
      let newNode = new Node(key, value);
      addNode(newNode);
      cache.set(key, newNode);
      if (cache.size > capacity) {
        let last = tail.prev;
        removeNode(last!);
        cache.delete(last!.key);
      }
    }
  }

  moveToHead(node: Node<number>) {
    this.removeNode(node);
    this.addNode(node);
  }

  removeNode(node: Node<number>) {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  addNode(node: Node<number>) {
    let head = this.head;
    node.prev = head;
    node.next = head?.next;
    head!.next!.prev = node;
    head!.next = node;
  }
}
