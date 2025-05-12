// Find Median from Data Stream
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.
// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:
// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
// https://leetcode.com/problems/find-median-from-data-stream/
// connect: undefined


class NodeM {
  val: number;
  next: NodeM | null;

  constructor(val: number = 0, next: NodeM | null = null) {
    this.val = val;
    this.next = next;
  }
}

class MedianFinder {
  private head: NodeM | null;
  private len: number;

  constructor() {
    this.head = null;
    this.len = 0;
  }

  addNum(num: number): void {
    const node = new NodeM(num);
    if (!this.head) {
      this.head = node;
    } else if (this.head.val > num) {
      const temp = this.head;
      this.head = node;
      this.head.next = temp;
    } else {
      let cur = this.head;
      let prev: NodeM | null = null;
      while (cur && cur.val <= num) {
        prev = cur;
        cur = cur.next!;
      }
      if (prev) prev.next = node;
      node.next = cur;
    }
    this.len++;
  }

  findMedian(): number | null {
    if (this.len === 0) {
      return null;
    } else if (this.len === 1) {
      return this.head!.val;
    } else {
      const isEven = this.len % 2 === 0;
      let mid = Math.floor(this.len / 2);
      let cur = this.head;
      let prev: NodeM | null = null;
      while (mid > 0) {
        prev = cur;
        cur = cur!.next;
        mid--;
      }
      return isEven ? (prev!.val + cur!.val) / 2 : cur!.val;
    }
  }
}

describe('MedianFinder', () => {
  it('should find the median of a single element', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    expect(mf.findMedian()).toBe(1);
  });

  it('should find the median of two elements', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    expect(mf.findMedian()).toBe(1.5);
  });

  it('should find the median of multiple elements', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(2);
    mf.addNum(3);
    expect(mf.findMedian()).toBe(2);

    mf.addNum(4);
    expect(mf.findMedian()).toBe(2.5);
  });

  it('should handle negative numbers and zeros', () => {
    const mf = new MedianFinder();
    mf.addNum(-1);
    mf.addNum(0);
    mf.addNum(1);
    expect(mf.findMedian()).toBe(0);

    mf.addNum(-2);
    expect(mf.findMedian()).toBe(-0.5);
  });

  it('should handle repeated numbers', () => {
    const mf = new MedianFinder();
    mf.addNum(1);
    mf.addNum(1);
    mf.addNum(1);
    expect(mf.findMedian()).toBe(1);

    mf.addNum(2);
    expect(mf.findMedian()).toBe(1);
  });

  it('should return null for an empty list', () => {
    const mf = new MedianFinder();
    expect(mf.findMedian()).toBeNull();
  });
});