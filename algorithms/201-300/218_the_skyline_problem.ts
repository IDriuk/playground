/*
  218. The Skyline Problem
  A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance.
  Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A),
  write a program to output the skyline formed by these buildings collectively (Figure B).

  The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi],
  where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively,
  and Hi is its height.
  It is guaranteed that 0 <= Li, Ri <= INT_MAX, 0 < Hi <= INT_MAX, and Ri - Li > 0.
  You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.
  
  For instance, the dimensions of all buildings in Figure A are recorded as:
  [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]

  The output is a list of "key points" (red dots in Figure B) in the format of [[x1, y1], [x2, y2], [x3, y3], ...] 
  that uniquely defines a skyline.
  A key point is the left endpoint of a horizontal line segment.
  Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline,
  and always has zero height. 
  Also, the ground in between any two adjacent buildings should be  considered part of the skyline contour.

  For instance, the skyline in Figure B should be represented as:
  [[2,10], [3,15], [7,12], [12, 0], [15,10], [20,8], [24,0]]

  Notes:
  The number of buildings in any input list is guaranteed to be in the range [0, 10000].
  The input list is already sorted in ascending order by the left x position Li.
  The output list must be sorted by the x position.
*/

type Comparator<T> = (a: T, b: T) => boolean;

const defaultComparator: Comparator<any> = (a, b) => a < b;

export default class FastPriorityQueue<T> {
  private array: T[];
  private size: number;
  private compare: Comparator<T>;

  constructor(comparator?: Comparator<T>) {
    this.array = [];
    this.size = 0;
    this.compare = comparator || defaultComparator;
  }

  clone(): FastPriorityQueue<T> {
    const fpq = new FastPriorityQueue<T>(this.compare);
    fpq.size = this.size;
    fpq.array = this.array.slice(0, this.size);
    return fpq;
  }

  add(myval: T): void {
    let i = this.size;
    this.array[this.size] = myval;
    this.size += 1;
    let p: number;
    let ap: T;
    while (i > 0) {
      p = (i - 1) >> 1;
      ap = this.array[p];
      if (!this.compare(myval, ap)) {
        break;
      }
      this.array[i] = ap;
      i = p;
    }
    this.array[i] = myval;
  }

  heapify(arr: T[]): void {
    this.array = arr;
    this.size = arr.length;
    let i: number;
    for (i = this.size >> 1; i >= 0; i--) {
      this._percolateDown(i);
    }
  }

  private _percolateUp(i: number, force?: boolean): void {
    const myval = this.array[i];
    let p: number;
    let ap: T;
    while (i > 0) {
      p = (i - 1) >> 1;
      ap = this.array[p];
      if (!force && !this.compare(myval, ap)) {
        break;
      }
      this.array[i] = ap;
      i = p;
    }
    this.array[i] = myval;
  }

  private _percolateDown(i: number): void {
    const size = this.size;
    const hsize = this.size >>> 1;
    const ai = this.array[i];
    let l: number;
    let r: number;
    let bestc: T;
    while (i < hsize) {
      l = (i << 1) + 1;
      r = l + 1;
      bestc = this.array[l];
      if (r < size) {
        if (this.compare(this.array[r], bestc)) {
          l = r;
          bestc = this.array[r];
        }
      }
      if (!this.compare(bestc, ai)) {
        break;
      }
      this.array[i] = bestc;
      i = l;
    }
    this.array[i] = ai;
  }

  private _removeAt(index: number): T | undefined {
    if (index > this.size - 1 || index < 0) return undefined;
    this._percolateUp(index, true);
    return this.poll();
  }

  remove(myval: T): boolean {
    for (let i = 0; i < this.size; i++) {
      if (
        !this.compare(this.array[i], myval) &&
        !this.compare(myval, this.array[i])
      ) {
        this._removeAt(i);
        return true;
      }
    }
    return false;
  }

  removeOne(callback: (val: T) => boolean): T | undefined {
    if (typeof callback !== "function") {
      return undefined;
    }
    for (let i = 0; i < this.size; i++) {
      if (callback(this.array[i])) {
        return this._removeAt(i);
      }
    }
  }

  removeMany(callback: (val: T) => boolean, limit?: number): T[] {
    if (typeof callback !== "function" || this.size < 1) {
      return [];
    }
    limit = limit ? Math.min(limit, this.size) : this.size;
    let resultSize = 0;
    const result: T[] = new Array(limit);
    let tmpSize = 0;
    const tmp: T[] = new Array(this.size);
    while (resultSize < limit && !this.isEmpty()) {
      const item = this.poll();
      if (callback(item!)) {
        result[resultSize++] = item!;
      } else {
        tmp[tmpSize++] = item!;
      }
    }
    result.length = resultSize;
    let i = 0;
    while (i < tmpSize) {
      this.add(tmp[i++]);
    }
    return result;
  }

  peek(): T | undefined {
    if (this.size === 0) return undefined;
    return this.array[0];
  }

  poll(): T | undefined {
    if (this.size === 0) return undefined;
    const ans = this.array[0];
    if (this.size > 1) {
      this.array[0] = this.array[--this.size];
      this._percolateDown(0);
    } else {
      this.size -= 1;
    }
    return ans;
  }

  replaceTop(myval: T): T | undefined {
    if (this.size === 0) return undefined;
    const ans = this.array[0];
    this.array[0] = myval;
    this._percolateDown(0);
    return ans;
  }

  trim(): void {
    this.array = this.array.slice(0, this.size);
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  forEach(callback: (val: T, index: number) => void): void {
    if (this.isEmpty() || typeof callback !== "function") return;
    let i = 0;
    const fpq = this.clone();
    while (!fpq.isEmpty()) {
      callback(fpq.poll()!, i++);
    }
  }

  kSmallest(k: number): T[] {
    if (this.size === 0) return [];
    k = Math.min(this.size, k);
    const fpq = new FastPriorityQueue<T>(this.compare);
    const newSize = Math.min((k > 0 ? Math.pow(2, k - 1) : 0) + 1, this.size);
    fpq.size = newSize;
    fpq.array = this.array.slice(0, newSize);
    const smallest: T[] = new Array(k);
    for (let i = 0; i < k; i++) {
      smallest[i] = fpq.poll()!;
    }
    return smallest;
  }
}

export function getSkyline(buildings: number[][]) {
  let corners: number[][] = [];

  for (let b of buildings) {
    corners.push([b[0], b[2]]);
    corners.push([b[1], -b[2]]);
  }

  corners.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));

  let pq = new FastPriorityQueue<number>((a, b) => a > b);
  pq.add(0);
  let keyPoints = [];
  let height = 0;

  for (let c of corners) {
    if (c[1] > 0) {
      pq.add(c[1]);
    } else {
      pq.remove(-c[1]);
    }
    if (pq.peek() != height) {
      keyPoints.push([c[0], pq.peek()]);
      height = pq.peek()!;
    }
  }

  return keyPoints;
}
