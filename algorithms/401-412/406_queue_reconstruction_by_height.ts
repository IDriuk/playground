/* 
  406. Queue Reconstruction by Height
  Suppose you have a random list of people standing in a queue.
  Each person is described by a pair of integers (h, k),
  where h is the height of the person and k is the number of people in front of this person
  who have a height greater than or equal to h.
  Write an algorithm to reconstruct the queue.
*/

export function reconstructQueue(people: number[][]) {
  people.sort((p1, p2) => (p2[0] - p1[0] == 0 ? p1[1] - p2[1] : p2[0] - p1[0]));
  let res: number[][] = [];
  for (let p of people) {
    res.splice(p[1], 0, p);
  }
  return res;
}
