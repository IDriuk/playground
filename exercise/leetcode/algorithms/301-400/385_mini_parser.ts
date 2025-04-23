/*
  385. Mini Parser.
  Given a nested list of integers represented as a string, implement a parser to deserialize it.
  Each element is either an integer, or a list -- whose elements may also be integers or other lists.
  Note:
  You may assume that the string is well-formed.
*/

type NestedInteger = number | NestedInteger[];

export function miniParser(s: string) {
  if (!s.startsWith("[")) {
    return parseInt(s);
  }

  let stack: NestedInteger = [];
  let res: NestedInteger = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c == "[") {
      stack.push([]);
    } else if (c == "-" || Number.isInteger(+c)) {
      let j = i + 1;
      while (j < s.length && Number.isInteger(+s.charAt(j))) {
        j++;
      }
      let val = parseInt(s.substring(i, j));
      // @ts-ignore
      stack[stack.length - 1].push(val);
      i = j - 1;
    } else if (c == "]") {
      res = stack.pop()!;
      if (stack.length) {
        // @ts-ignore
        stack[stack.length - 1].push(res);
      }
    }
  }
  return res;
}
