/*
  93. Restore IP Addresses
  Given a string containing only digits, restore it by returning all possible valid IP address combinations.
*/

function isValid(s: string): boolean {
  if ((s.startsWith("0") && s.length > 1) || Number(s) > 255) {
    return false;
  }
  return true;
}

function backtrack(s: string, dot: number, res: string[], ip: string) {
  if (dot == 0) {
    if (isValid(s)) {
      ip += s;
      res.push(ip);
    }
    return;
  }

  for (let i = 1; i < 4 && i < s.length; i++) {
    let pre = s.substring(0, i);
    if (!isValid(pre)) continue;
    backtrack(s.substring(i), dot - 1, res, ip + pre + ".");
  }
}

export function restoreIPAddresses(s: string): string[] {
  let res: string[] = [];
  if (s.length > 12) {
    return res;
  }

  backtrack(s, 3, res, "");

  return res;
}
