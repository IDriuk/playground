// Kth Largest Element in an Array
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?
// https://leetcode.com/problems/kth-largest-element-in-an-array/
// connect: interesting, heap

class MinHeap {
  private heap: number[] = [];

  size() {
    return this.heap.length;
  }

  peek(): number | undefined {
    return this.heap[0];
  }

  push(val: number) {
    this.heap.push(val);
    this.bubbleUp();
  }

  pop(): number | undefined {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.bubbleDown();
    return top;
  }

  private bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parent]) break;
      [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
      index = parent;
    }
  }

  private bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let smallest = index;
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      if (left < length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest]) smallest = right;
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap();

  for (const num of nums) {
    minHeap.push(num);
    if (minHeap.size() > k) {
      minHeap.pop();
    }
  }

  return minHeap.peek()!;
}


test("find kth largest element without sorting", () => {
  expect(findKthLargest([3,2,1,5,6,4], 2)).toBe(5)
  expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toBe(4)
  expect(findKthLargest([7,6,5,4,3,2,1], 2)).toBe(6)
})