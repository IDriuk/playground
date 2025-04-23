/*
  347. Top K Frequent Elements
  Given a non-empty array of integers, return the k most frequent elements.
*/

export function topKFrequent(nums: number[], k: number) {
  if (nums == null || nums.length == 0) {
    return [];
  }
  let frequencyMap = new Map<number, number>();
  for (let n of nums) {
    let frequency = frequencyMap.get(n);
    frequencyMap.set(n, frequency ? frequency + 1 : 1);
  }

  let lists: number[][] = new Array(nums.length + 1).fill(null).map((_) => []);
  for (let e of Array.from(frequencyMap.entries())) {
    lists[e[1]] = lists[e[1]] ? [e[0]] : [...lists[e[1]]!, e[0]];
  }

  let res: number[] = [];
  for (let i = lists.length - 1; i >= 0; i--) {
    if (lists[i] == null) {
      continue;
    }
    for (let j = 0; j < lists[i]?.length! && res.length < k; j++) {
      res.push(lists[i]![j]);
    }
  }
  return res;
}
