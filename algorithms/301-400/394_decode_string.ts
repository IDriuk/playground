/*
  394. Decode String
  Given an encoded string, return it's decoded string.
  The encoding rule is:
  k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
  Note that k is guaranteed to be a positive integer.
  You may assume that the input string is always valid;
  No extra white spaces, square brackets are well-formed , etc.
  Furthermore, you may assume that the original data does not contain any digits and that digits are only for those
  repeat numbers, k.
  For example there won't be input like 3a or 2[4].
*/

export function decodeString(s: string) {
  let res: string[] = [];
  let count: number[] = [];
  let decode = "";
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (!Number.isNaN(+c)) {
      num = 10 * num + +c;
    } else if (c == "[") {
      count.push(num);
      num = 0;
      res.push(decode);
      decode = "";
    } else if (c == "]") {
      let tmp = decode;
      decode = res.pop()!;
      for (let j = count.pop()!; j > 0; j--) {
        decode += tmp;
      }
    } else {
      decode += c;
    }
  }
  return decode;
}
