// 1265. Print Immutable Linked List in Reverse (subscription) 
// You are given an immutable linked list,
// print out all values of each node in reverse with the help of the following interface:
// ImmutableListNode: An interface of immutable linked list, you are given the head of the list.
// You need to use the following functions to access the linked list (you can't access the ImmutableListNode directly):
// The input is only given to initialize the linked list internally. 
// You must solve this problem without modifying the linked list. 
// In other words, you must operate the linked list using only the mentioned APIs.
// connect: undefined

class ListNode5 {
  val: number = 0
  next: ListNode5 | null = null
}


function printLinkedListInReverse(head: ListNode5 | null, result: number[]) {
  if (head == null) return;

  printLinkedListInReverse(head.next, result);

  result.push(head.val);
  return result
}

test("print immutable linked list", () => {
  let head = new ListNode5()
  let cur = head
  for (let i = 1; i <= 5; i++) {
    let node = new ListNode5()
    node.val = i
    cur.next = node
    cur = cur.next
  }

  expect(printLinkedListInReverse(head, [])).toEqual([5, 4, 3, 2, 1, 0])
})