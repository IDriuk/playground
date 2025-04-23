/*
  271. Encode and Decode Strings
  Design an algorithm to encode a list of strings to a string.
  The encoded string is then sent over the network and is decoded back to the original list of strings.
  Implement the encode and decode methods.
  Note:
  The string may contain any possible characters out of 256 valid ascii characters.
  Your algorithm should be generalized enough to work on any possible characters.
  Do not use class member/global/static variables to store states. 
  Your encode and decode algorithms should be stateless.
  Do not rely on any library method such as eval or serialize methods.
  You should implement your own encode/decode algorithm.
*/

export class Codec {
  encode = (strs: string[]) => {
    let s = "";
    for (let str of strs) {
      s = `${s}${str.length}/${str}`;
    }
    return s;
  };

  decode = (s: string) => {
    let ret = Array<string>();
    let i: number = 0;
    while (i < s.length) {
      let slash = s.indexOf("/", i);
      let size = parseInt(s.substring(i, slash));
      i = slash + size + 1;
      ret.push(s.substring(slash + 1, i));
    }
    return ret;
  };
}
