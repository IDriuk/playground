/*
  164. Maximum Gap
  Given an unsorted array, find the maximum dirrerence between the successive elements in its sorted form.
*/

export function maximumGap(nums: number[]): number {
  if (nums == null || nums.length < 2) {
    return 0;
  }

  let mini: number = Infinity;
  let maxi: number = -Infinity;

  for (let num of nums) {
    if (num > maxi) {
      maxi = num;
    }
    if (num < mini) {
      mini = num;
    }
  }

  let bucketSize = Math.floor((maxi - mini) / (nums.length - 1));
  let bucketNum = Math.floor((maxi - mini) / bucketSize) + 1;
  let buckets = new Array(bucketNum)
    .fill(null)
    .map((_) => ({ used: false, minval: Infinity, maxval: -Infinity }));

  for (let num of nums) {
    let bucketIdx = Math.floor((num - mini) / bucketSize);
    buckets[bucketIdx].used = true;
    buckets[bucketIdx].minval = Math.min(num, buckets[bucketIdx].minval);
    buckets[bucketIdx].maxval = Math.max(num, buckets[bucketIdx].maxval);
  }

  let prevBucketMax = mini;
  let maxGap = 0;

  for (let bucket of buckets) {
    if (!bucket.used) {
      continue;
    }
    maxGap = Math.max(maxGap, bucket.minval - prevBucketMax);
    prevBucketMax = bucket.maxval;
  }

  return maxGap;
}
