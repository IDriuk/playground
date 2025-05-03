// Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// https://leetcode.com/problems/add-two-numbers/
// connect: list, interesting

class ListNode1 {
  val: number = 0
  next: ListNode1 | null = null
}

var addTwoNumbers = function(l1: ListNode1, l2: ListNode1) {
  if (!l1) { return l2 }
  if (!l2) { return l1 }
  
  let cur1 = l1
  let cur2 = l2
  let over = 0
  
  let sum = new ListNode1()
  let curs = sum
  
  while (true) {
      let val1 = cur1 ? cur1.val : 0
      let val2 = cur2 ? cur2.val : 0
  
      let val = val1 + val2 + over
      
      if (val >= 10) {
          val = val - 10
          over = 1
      } else {
          over = 0
      }
      
      curs.val = val
      
      if (cur1) { cur1 = cur1.next! }
      if (cur2) { cur2 = cur2.next! }
  
      if (cur1 || cur2 || over) {
          curs.next = new ListNode1()  
          curs = curs.next
      } else {
          return sum
      }
  }
};

test("add two numbers", () => {
  let l1 = {val: 3, next: { val: 4, next: {val: 2}}}
  let l2 = {val: 4, next: { val: 6, next: {val: 5}}}
  let sum = {val: 7, next: { val: 0, next: {val: 8, next: null}}}
  expect(addTwoNumbers(l1 as ListNode1, l2 as ListNode1)).toEqual(sum)
})