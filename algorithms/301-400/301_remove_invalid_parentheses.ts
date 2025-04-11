/*
  301. Remove Invalid Parentheses
  Remove the minimum number of invalid parentheses in order to make the input string valid.
  Return all possible results.
  Note: The input string may contain letters other than the parentheses ( and ) .
*/

export function removeInvalidParentheses(s: string) {
  if (s == null) {
    return [];
  }

  let res: string[] = [];
  let queue: string[] = [];
  let visited: Set<string> = new Set();
  queue.push(s);
  visited.add(s);
  let found = false;

  while (queue.length > 0) {
    let cur = queue.shift()!;
    if (isValid(cur)) {
      res.push(cur);
      found = true;
    }
    if (found) {
      continue;
    }
    for (let i = 0; i < cur.length; i++) {
      if (cur.charAt(i) != "(" && cur.charAt(i) != ")") {
        continue;
      }
      let next = cur.substring(0, i) + cur.substring(i + 1);
      if (!visited.has(next)) {
        queue.push(next);
        visited.add(next);
      }
    }
  }

  return res;
}

function isValid(s: string) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c == "(") {
      count++;
    } else if (c == ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count == 0;
}
