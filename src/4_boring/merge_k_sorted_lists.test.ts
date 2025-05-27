// Merge k Sorted Lists
// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.
// https://leetcode.com/problems/merge-k-sorted-lists/
// connect: undefined

// @ts-ignore
class ListNode2 {
  val: number;
  next: ListNode2 | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

var mergeKLists = function(ls: ListNode2[]) {
  let head = new ListNode2(0)
  let node = head
  
  let lists = ls.filter( l => l != null)
  
  while (lists.length) {
      let min = Infinity
      for (let list of lists) {
          if (list.val < min) {
              min = list.val
          }
      }
      
      for (let i = 0; i < lists.length; i++) {
          if (lists[i].val == min) {
              node.next = lists[i]
              lists[i] = lists[i].next!
              node = node.next
              node.next = null
          }
      }
      
      lists = lists.filter( l => l )
  }
  
  return head.next
};

import { expect } from 'chai';

describe('mergeKLists', () => {
  // Helper function to create a linked list from an array
  function createList(arr: number[]): ListNode2 | null {
    if (arr.length === 0) return null;
    const head = new ListNode2(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode2(arr[i]);
      current = current.next;
    }
    return head;
  }

  // Helper function to convert linked list to array
  function listToArray(head: ListNode2 | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  it('should merge multiple sorted lists', () => {
    const lists = [
      createList([1, 4, 5]),
      createList([1, 3, 4]),
      createList([2, 6])
    ];
    const expected = [1, 1, 2, 3, 4, 4, 5, 6];
    const result = mergeKLists(lists as ListNode2[]);
    expect(listToArray(result)).to.eql(expected);
  });

  it('should handle empty input array', () => {
    const lists: ListNode2[] = [];
    const result = mergeKLists(lists);
    expect(result).to.be.null;
  });

  it('should handle lists with null values', () => {
    const lists = [
      createList([1, 2]),
      null,
      createList([3, 4])
    ];
    const expected = [1, 2, 3, 4];
    const result = mergeKLists(lists as ListNode2[]);
    expect(listToArray(result)).to.eql(expected);
  });

  it('should handle single list', () => {
    const lists = [createList([1, 2, 3])];
    const expected = [1, 2, 3];
    const result = mergeKLists(lists as ListNode2[]);
    expect(listToArray(result)).to.eql(expected);
  });

  it('should handle lists with duplicate values', () => {
    const lists = [
      createList([1, 1, 1]),
      createList([1, 1, 1]),
      createList([1, 1, 1])
    ];
    const expected = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const result = mergeKLists(lists as ListNode2[]);
    expect(listToArray(result)).to.eql(expected);
  });

  it('should handle lists with negative numbers', () => {
    const lists = [
      createList([-5, -2, 0]),
      createList([-3, -1, 4]),
      createList([-4, 1, 2])
    ];
    const expected = [-5, -4, -3, -2, -1, 0, 1, 2, 4];
    const result = mergeKLists(lists as ListNode2[]);
    expect(listToArray(result)).to.eql(expected);
  });

  it('should handle when all lists are null', () => {
    const lists = [null, null, null];
    const result = mergeKLists(lists as unknown as ListNode2[]);
    expect(result).to.be.null;
  });
});