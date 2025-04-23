/*
  362. Design Hit Counter.
  Design a hit counter which counts the number of hits received in the past 5 minutes.
  Each function accepts a timestamp parameter (in seconds granularity)
  and you may assume that calls are being made to the system in chronological order
  (i.e, the timestamp is monotonically increasing).
  You may assume that the earliest timestamp starts at 1.
  It is possible that several hits arrive roughly at the same time.
*/

export class HitCounter {
  times: number[] = new Array(300).fill(0);
  hits: number[] = new Array(300).fill(0);

  hit = (timestamp: number) => {
    let index = timestamp % 300;
    if (this.times[index] != timestamp) {
      this.times[index] = timestamp;
      this.hits[index] = 1;
    } else {
      this.hits[index]++;
    }
  };

  getHits = (timestamp: number) => {
    let total = 0;
    for (let i = 0; i < 300; i++) {
      if (timestamp - this.times[i] < 300) {
        total += this.hits[i];
      }
    }
    return total;
  };
}
