import {
  convertToHex,
  fizzBuzz,
  frogJump,
  longestPalindrome,
  readBinaryWatch,
  reconstructQueue,
  removeKdigits,
  splitArrayLongestSum,
  sumOfLeftLeaves,
  trapRainWater2,
  validWordAbbreviation,
} from "../../../algorithms";

describe("Algorithm tests form 301 to 400", () => {
  // 401. Binary Watch
  it("Should return times", () => {
    expect(readBinaryWatch(1)).to.deep.equal([
      "0:01",
      "0:02",
      "0:04",
      "0:08",
      "0:16",
      "0:32",
      "1:00",
      "2:00",
      "4:00",
      "8:00",
    ]);
  });

  // 402. Remove K Digits
  it("Should remove K Digits", () => {
    expect(removeKdigits("1432219", 3)).to.equal("1219");
    expect(removeKdigits("10200", 1)).to.equal("200");
    expect(removeKdigits("10", 2)).to.equal("0");
  });

  // 403. Frog Jump
  it("Should find out if frog can jump", () => {
    expect(frogJump([0, 1, 3, 5, 6, 8, 12, 17])).to.be.true;
    expect(frogJump([0, 1, 2, 3, 4, 8, 9, 11])).to.be.false;
  });

  // 404. Sum of Left Leaves
  it("Should return sum of left leaves", () => {
    expect(sumOfLeftLeaves([3, 9, 20, null, null, 15, 7])).to.equal(24);
  });

  // 405. Convert a Number to Hexadecimal
  it("Should convert a number to hexadecimal", () => {
    expect(convertToHex(26)).to.equal("1a");
    expect(convertToHex(-1)).to.equal("ffffffff");
  });

  // 406. Queue Reconstruction by Height
  it("Should reconstruct queue", () => {
    expect(
      reconstructQueue([
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ]),
    ).to.deep.equal([
      [5, 0],
      [7, 0],
      [5, 2],
      [6, 1],
      [4, 4],
      [7, 1],
    ]);
  });

  // 407. Trapping Rain Water 2
  it("Should trap rain water", () => {
    expect(
      trapRainWater2([
        [1, 4, 3, 1, 3, 2],
        [3, 2, 1, 3, 2, 4],
        [2, 3, 3, 2, 3, 1],
      ]),
    ).to.equal(4);
  });

  // 408. Valid Word Abbreviation
  it("Should validate abbreviation", () => {
    expect(validWordAbbreviation("internationalization", "i12iz4n")).to.be.true;
    expect(validWordAbbreviation("apple", "a2e")).to.be.false;
  });

  // 409. Longest Palindrome
  it("Should return longest palindrome length", () => {
    expect(longestPalindrome("abccccdd")).to.equal(7);
  });

  // 410. Split Array Largest Sum
  it("Should find largest sum", () => {
    expect(splitArrayLongestSum([7, 2, 5, 10, 8], 2)).to.deep.equal(18);
  });

  // 412. Fizz Buzz
  it("Should output numbers or fizzbuzz", () => {
    expect(fizzBuzz(15)).to.deep.equal([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });
});
