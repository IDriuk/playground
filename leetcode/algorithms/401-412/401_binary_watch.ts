/* 
  401. Binary Watch
  A binary watch has 4 LEDs on the top which represent the hours (0 - 11), 
  and the 6 LEDs on the bottom represent the minutes (0-59)
  Each LED represents a zero or one ,
  with the least significant bin on the right.
  For example , the above binary watch reads "3:25".
  Given a non-negative integer n which represents the number of LEDs that are currently on,
  return all possible times the watch could represent.
*/

export function readBinaryWatch(num: number) {
  let times: string[] = [];
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (countSetBits(h * 64 + m) == num) {
        times.push(`${h}:${m < 10 ? `0${m}` : m}`);
      }
    }
  }
  return times;
}

function countSetBits(n: number) {
  return n.toString(2).split("0").join("").length;
}
