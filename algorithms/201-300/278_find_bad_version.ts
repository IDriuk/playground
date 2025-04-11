/*
  278. Find Bad Version
  You are a product manager and currently leading a team to develop a new product.
  Unfortunately, the latest version of your product fails the quality check.
  Since each version is developed based on the previous version, 
  all the versions after a bad version are also bad.

  Suppose you have n vesions [1, 2, ..., n] and you want to find out the first bad one,
  which causes all the following ones to be bad.

  You are given an API bool isBadVersion(version) which will return whether version is bad.
  Implement a function to find the first bad version.
  You should minimize the number of calls to the API.
*/

let isBadVersion = (x: number) => {
  return x > 10;
};

export function firstBadVersion(n: number) {
  let left = 1;
  let right = n;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
