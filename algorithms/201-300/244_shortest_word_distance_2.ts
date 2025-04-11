/*
  244. Shortest Word Distance II
  Design a class which receives a list of words in the constructor,
  and implements a method that takes two words word1 and word2 
  and return the shortest distance between these two words in the list.
  Your method will be called repeatedly many times with differenct parameters.
*/

export class WordDistance2 {
  locs: Map<string, number[]> = new Map();

  constructor(public words: string[]) {
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (!this.locs.has(word)) {
        this.locs.set(word, []);
      }
      let lock = this.locs.get(word)!;
      lock.push(i);
      this.locs.set(word, lock);
    }
  }

  shortest = (word1: string, word2: string) => {
    let indices1 = this.locs.get(word1)!;
    let indices2 = this.locs.get(word2)!;
    let shortest = Infinity;
    for (let i = 0, j = 0; i < indices1.length && j < indices2.length; ) {
      let index1 = indices1[i];
      let index2 = indices2[j];
      if (index1 > index2) {
        shortest = Math.min(shortest, index1 - index2);
        j++;
      } else {
        shortest = Math.min(shortest, index2 - index1);
        i++;
      }
    }

    return shortest;
  };
}
