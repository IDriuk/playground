/*
  346. Moving Average from Data Stream
  Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.
*/

export class MovingAverage {
  window: number[];
  n: number = 0;
  insert: number = 0;
  sum: number = 0;

  constructor(size: number) {
    this.window = new Array(size).fill(0);
  }

  next = (val: number) => {
    if (this.n < this.window.length) {
      this.n++;
    }
    this.sum -= this.window[this.insert];
    this.sum += val;
    this.window[this.insert] = val;
    this.insert = (this.insert + 1) % this.window.length;
    return this.sum / this.n;
  };
}
