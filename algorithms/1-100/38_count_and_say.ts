/*  
  38. Count and say
  Count and say sequence is the sequence of integers with the first five terms as following:
 
  1. 1
  2. 11
  3. 21
  4. 1211
  5. 111221

  1 is read off as "one 1" or 11.
  11 is read off as "two 1s" or 21.
  21 is read off as "one 2, then one 1" or 1211.

  Given an integer n where 1 <= n <= 30, generate the nth term of the count-and-say sequence.

  Note:
  Each term of the sequence of integers will be represented as a string.
*/

export function countSay(n: number): string {
  let res = [1];
  let i = 0;

  while (i < n - 1) {
    let tmp = res;
    res = [];

    let j = 0;
    while (j < tmp.length) {
      let k = j;
      let count = 0;

      while (tmp[j] == tmp[k]) {
        count++;
        k++;
      }

      res.push(count);
      res.push(tmp[j]);

      j = k;
    }

    i++;
  }

  return res.join("");
}
