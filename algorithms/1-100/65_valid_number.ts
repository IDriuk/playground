/* 
  65. Valid Number
  Validate if a given string can be interpreted as a decimal number.
  Note: it is intended for the problem statement to be ambiguous.
  You should gather all requirements upfront before implementing one.
  However, here is a list of characters that can be in a valid decimal number.
  Of course, the context of these characters also matters in the input.
*/

export function validNumber(s: string): boolean {
  s = s.trim();
  let hasDot = false;
  let hasExp = false;
  let hasNum = false;

  let num = s.split("");

  for (let i = 0; i < num.length; i++) {
    if ("0" <= num[i] && num[i] <= "9") {
      hasNum = true;
    } else if (num[i] == ".") {
      if (hasExp || hasDot) {
        return false;
      }
      hasDot = true;
    } else if (num[i] == "e") {
      if (hasExp || !hasNum) {
        return false;
      }
      hasNum = false;
      hasExp = true;
    } else if (num[i] == "-" || num[i] == "+") {
      if (i != 0 && num[i - 1] != "e") {
        return false;
      }
    } else {
      return false;
    }
  }

  return hasNum;
}
