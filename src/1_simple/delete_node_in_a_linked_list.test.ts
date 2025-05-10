// Delete node
// connect: undefined

/* public void deleteNode(ListNode node) {
  node.val = node.next.val;
  node.next = node.next.next;
} */

// Define the ListNode class
// @ts-ignore
class ListNode2 {
  val: number;
  next: ListNode2 | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Deletes a node from a singly linked list.
 * Note: This function assumes that:
 * 1. The node to delete is not the tail node
 * 2. The node to delete exists in the linked list
 * @param node The node to be deleted
 */
function deleteNode(node: ListNode2): void {
  let cur = node;
  
  while (true) {
    // Copy the value from the next node
    cur.val = cur.next!.val;
    
    // If the next node is the tail, remove it and return
    if (!cur.next!.next) {
      cur.next = null;
      return;
    }
    
    // Move to the next node
    cur = cur.next!;
  }
}

// Helper function to convert linked list to array
function linkedListToArray(head: ListNode2 | null): number[] {
  const result: number[] = [];
  let current = head;
  
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  
  return result;
}

// Helper function to create a linked list from array
function createLinkedList(values: number[]): ListNode2 | null {
  if (values.length === 0) return null;
  
  const head = new ListNode2(values[0]);
  let current = head;
  
  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode2(values[i]);
    current = current.next;
  }
  
  return head;
}

describe('LinkedList Node Deletion', () => {
  test('deletes a node in the middle of the list', () => {
    // Create a linked list: 4 -> 5 -> 1 -> 9
    const head = createLinkedList([4, 5, 1, 9]);
    
    // Get node with value 5
    const nodeToDelete = head!.next;
    
    // Delete the node
    deleteNode(nodeToDelete!);
    
    // Expected: 4 -> 1 -> 9
    expect(linkedListToArray(head)).toEqual([4, 1, 9]);
  });
  
  test('deletes a node right before the tail', () => {
    // Create a linked list: 4 -> 5 -> 1 -> 9
    const head = createLinkedList([4, 5, 1, 9]);
    
    // Get node with value 1
    const nodeToDelete = head!.next!.next;
    
    // Delete the node
    deleteNode(nodeToDelete!);
    
    // Expected: 4 -> 5 -> 9
    expect(linkedListToArray(head)).toEqual([4, 5, 9]);
  });
  
  test('works with a list of only two nodes', () => {
    // Create a linked list: 1 -> 2
    const head = createLinkedList([1, 2]);
    
    // Delete the first node
    deleteNode(head!);
    
    // Expected: 2
    expect(linkedListToArray(head)).toEqual([2]);
  });
  
  test('works with longer lists', () => {
    // Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    const head = createLinkedList([1, 2, 3, 4, 5, 6]);
    
    // Delete the node with value 3
    const nodeToDelete = head!.next!.next;
    
    // Delete the node
    deleteNode(nodeToDelete!);
    
    // Expected: 1 -> 2 -> 4 -> 5 -> 6
    expect(linkedListToArray(head)).toEqual([1, 2, 4, 5, 6]);
  });
});