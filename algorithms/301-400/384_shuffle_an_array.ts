/*
  384. Shuffle an Array.
  Shuffle a set of numbers without duplicates.
*/

export class ShuffleArray {
  array: number[];
  original: number[];

  constructor(nums: number[]) {
    this.array = [...nums];
    this.original = [...nums];
  }

  reset = () => {
    this.array = [...this.original];
    return this.array;
  };

  swapAt = (i: number, j: number) => {
    let temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;
  };

  shuffle = () => {
    let randRange = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min)) + min;
    };
    for (let i = 0; i < this.array.length; i++) {
      this.swapAt(i, randRange(i, this.array.length - 1));
    }
    return this.array;
  };
}
