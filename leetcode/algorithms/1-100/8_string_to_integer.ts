/* 
  8. String to integer
  Implement atoi, which converts a string to an integer
  The function first discards as many whitespace characters as necessary until the first non-witespace character is found.
  Then starting from this character, takes an optional initial plus on minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
  The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
  If the first sequence of non-whitespaces characters in str is not a valid integral number,
  or, if no such sequence exists because either str is empty or it contains only whitespace characters,
  no conversion is performed.
  If no  valid conversion could be performed, a zero value is returned.
  Note, only the space character ' ' is considerate as whitespace character.
  Assume we are dealins with an environment which could only store integers within the 32-bit signed integer range. 
  If the numerical value is out of the range of representable values, maximum or minimum is returned
*/
export function atoi(s: string): number {
  let neg = 1;
  let res = 0;
  let chars = s.split("");
  let started = false;
  for (let i = 0; i < chars.length; i++) {
    if (!started) {
      if (chars[i] == "+") {
        neg = 1;
        started = true;
      } else if (chars[i] == "-") {
        neg = -1;
        started = true;
      } else if (chars[i] <= "9" && chars[i] >= "0") {
        res = res * 10 + Number(chars[i]);
        started = true;
      } else if (chars[i] != " ") {
        break;
      }
    } else {
      if (chars[i] <= "9" && chars[i] >= "0") {
        res = res * 10 + Number(chars[i]);
      } else {
        break;
      }
    }
  }
  return res * neg;
}
