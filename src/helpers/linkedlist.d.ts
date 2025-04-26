/**
 * TypeScript declaration file for LinkedList module
 */

/**
 * Represents a node in a linked list
 */
export declare class ListNode<T = any> {
  /**
   * The data stored in the node
   */
  data: T;
  
  /**
   * Reference to the next node in the list
   */
  next: ListNode<T> | null;
  
  /**
   * Creates a new list node
   * @param data The data to store in the node
   * @param next Optional reference to the next node
   */
  constructor(data: T, next?: ListNode<T> | null);
}

/**
 * A singly linked list implementation
 */
export declare class LinkedList<T = any> {
  /**
   * The first node in the list
   */
  head: ListNode<T> | null;
  
  /**
   * Creates a new empty linked list
   */
  constructor();
  
  /**
   * Inserts a new node at the beginning of the list
   * @param data The data to store in the new node
   */
  insertFirst(data: T): void;
  
  /**
   * Returns the number of nodes in the list
   */
  size(): number;
  
  /**
   * Returns the first node in the list
   */
  getFirst(): ListNode<T> | null;
  
  /**
   * Returns the last node in the list
   */
  getLast(): ListNode<T> | null;
  
  /**
   * Removes all nodes from the list
   */
  clear(): void;
  
  /**
   * Removes the first node from the list
   */
  removeFirst(): void;
  
  /**
   * Removes the last node from the list
   */
  removeLast(): void;
  
  /**
   * Adds a new node to the end of the list
   * @param data The data to store in the new node
   */
  insertLast(data: T): void;
  
  /**
   * Returns the node at the specified index
   * @param index The zero-based index of the node to retrieve
   */
  getAt(index: number): ListNode<T> | null;
  
  /**
   * Removes the node at the specified index
   * @param index The zero-based index of the node to remove
   */
  removeAt(index: number): void;
  
  /**
   * Inserts a new node at the specified index
   * @param data The data to store in the new node
   * @param index The zero-based index at which to insert the new node
   */
  insertAt(data: T, index: number): void;
  
  /**
   * Executes a provided function once for each node in the list
   * @param fn Function to execute for each node
   */
  forEach(fn: (node: ListNode<T>, index: number) => void): void;
  
  /**
   * Makes the linked list iterable
   */
  [Symbol.iterator](): IterableIterator<ListNode<T>>;
}