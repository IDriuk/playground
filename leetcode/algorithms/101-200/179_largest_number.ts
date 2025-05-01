/*
  179. Largest Number
  Given a list of non negative integers, 
  arrange them such that they form the largest number.

  Note: 
  The result may be very large, so you need to return a string instead of an integer.
*/

export function largestNumber(nums: number[]): string {
  let asStrs: string[] = new Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    asStrs[i] = `${nums[i]}`;
  }

  asStrs.sort((a, b) => {
    let ab = +a + b;
    let ba = +b + a;
    return ab > ba ? -1 : 1;
  });

  if (asStrs[0] == "0") {
    return "0";
  }

  let largestNumber = "";

  for (let numAsStr of asStrs) {
    largestNumber += numAsStr;
  }

  return largestNumber;
}
