// Jaden Casing Strings
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/javascript
// connect: declare, prototype

export {}; 
declare global {
  interface String {
    toJadenCase(): string;
  }
}

String.prototype.toJadenCase = function (): string {
  return this.split(' ').map( w => {
    const letters = w.split('')
    letters[0] = letters[0].toUpperCase()
    return letters.join('')
  }).join(' ')
};

/* 
  String.prototype.toJadenCase = function() {
    return this.replace(/(^|\s)[a-z]/g, function(s){ return s.toUpperCase() });
  };
*/

test("should return jaden casing strings", () => {
  expect("How can mirrors be real if our eyes aren't real".toJadenCase()).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")   
})