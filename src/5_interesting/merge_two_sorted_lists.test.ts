// Merge Two Sorted Lists
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
// https://leetcode.com/problems/merge-two-sorted-lists/
// connect: interesting, list

// @ts-ignore
class ListNode2 {
  val: number = 0
  next: ListNode2 | null = null

  constructor(val?: number, next?: ListNode2 | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

/* // Helper function: build a linked list from an array
function buildList(arr: number[]): ListNode2 | null {
  if (arr.length === 0) return null
  const head = new ListNode2(arr[0])
  let current = head
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode2(arr[i])
    current = current.next
  }
  return head
}

// Helper function: convert a linked list to an array
function listToArray(head: ListNode2 | null): number[] {
  const result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
} */

describe('mergeTwoLists', () => {
  it('merges two sorted lists', () => {
    // const l1 = buildList([1, 2, 4])
    // const l2 = buildList([1, 3, 4])
    // const merged = mergeTwoLists(l1, l2)
    // expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 4])
  })

  // it('returns the non-null list when one is null', () => {
  //   const l1 = buildList([])
  //   const l2 = buildList([0])
  //   const merged = mergeTwoLists(l1, l2)
  //   expect(listToArray(merged)).toEqual([0])
  // })

  // it('returns null when both lists are null', () => {
  //   const merged = mergeTwoLists(null, null)
  //   expect(listToArray(merged)).toEqual([])
  // })

  // it('handles lists with duplicate values', () => {
  //   const l1 = buildList([2, 2, 2])
  //   const l2 = buildList([2, 2])
  //   const merged = mergeTwoLists(l1, l2)
  //   expect(listToArray(merged)).toEqual([2, 2, 2, 2, 2])
  // })

  // it('handles disjoint lists', () => {
  //   const l1 = buildList([1, 2, 3])
  //   const l2 = buildList([10, 20, 30])
  //   const merged = mergeTwoLists(l1, l2)
  //   expect(listToArray(merged)).toEqual([1, 2, 3, 10, 20, 30])
  // })
})
