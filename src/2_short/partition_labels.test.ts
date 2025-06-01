// Partition Labels
// You are given a string s. We want to partition the string into as many parts as possible 
// so that each letter appears in at most one part. For example, 
// the string "ababcc" can be partitioned into ["abab", "cc"], 
// but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.
// https://leetcode.com/problems/partition-labels/
// connect: intervals, interesting


function partitionLabels(S: string) {
    let last: number[] = [];
    for (let i = 0; i < S.length; ++i) {
      last[S.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
    }
        
    let j = 0, anchor = 0;
    let ans: number[] = [];
    for (let i = 0; i < S.length; ++i) {
        j = Math.max(j, last[S.charCodeAt(i) - 'a'.charCodeAt(0)]);
        if (i == j) {
            ans.push(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return ans;
}

test("partition labels", () => {
  expect(partitionLabels("ababcbacadefegdehijhklij")).toEqual([9,7,8])
  expect(partitionLabels("eccbbbbdec")).toEqual([10])
})