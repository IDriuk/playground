/*
  412. Fizz Buzz
  Write a program that outputs the string representation of numbers from 1 to n.
  But for multiples of three it should ouput "Fizz" instead of the number and for the multiples of five output "Buzz".
  For numbers which are multiples of both three and five output "FizzBuzz".
*/

export function fizzBuzz(n: number) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let s = "";
    if (i % 3 == 0) {
      s += "Fizz";
    }
    if (i % 5 == 0) {
      s += "Buzz";
    }
    if (s.length == 0) {
      s = `${i}`;
    }
    res.push(s);
  }
  return res;
}
