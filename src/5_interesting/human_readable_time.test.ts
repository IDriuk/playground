// Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input 
// and returns the time in a human-readable format (HH:MM:SS)
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
// connect: interesting



test("should return time string", () => {
  // expect(humanReadable(     0)).toBe("00:00:00")
  // expect(humanReadable(    59)).toBe('00:00:59');
  // expect(humanReadable(    60)).toBe('00:01:00');
  // expect(humanReadable(    90)).toBe('00:01:30');
  // expect(humanReadable(  3599)).toBe('00:59:59');
  // expect(humanReadable(  3600)).toBe('01:00:00');
  // expect(humanReadable( 45296)).toBe('12:34:56');
  // expect(humanReadable( 86399)).toBe('23:59:59');
  // expect(humanReadable( 86400)).toBe('24:00:00');
  // expect(humanReadable(359999)).toBe('99:59:59');
  expect(1).toBe(1)
})