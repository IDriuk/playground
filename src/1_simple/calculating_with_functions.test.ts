// Calculating with Functions
// This time we want to write calculations using functions and get the results. 
// Let's have a look at some examples:
// Requirements:
// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
// connect: closure

// type Operation = {op: '+' | '-' | '*' | '/', d: number}
// type MaybeOperation = Operation | undefined;

// function applyMath(ld: number, s:Operation) {
//   let { op, d } = s
  
//   switch (op) {
//       case '+': return ld + d 
//       case '-': return ld - d
//       case '*': return ld * d
//       case '/': return Math.floor(ld / d)
//   }
// }

// function zero(s?: MaybeOperation) {
//   if(!s) return 0
  
//   return applyMath(0, s)
// }
// function one(s?: MaybeOperation) {
//   if(!s) return 1
//   return applyMath(1, s)
// }
// function two(s?: MaybeOperation) {
//   if(!s) return 2
//   return applyMath(2, s)
// }
// function three(s?: MaybeOperation) {
//   if(!s) return 3
//   return applyMath(3, s)
// }
// function four(s?: MaybeOperation) {
//   if(!s) return 4
//   return applyMath(4, s)
// }
// function five(s?: MaybeOperation) {
//   if(!s) return 5
//   return applyMath(5, s)
// }
// function six(s?: MaybeOperation) {
//   if(!s) return 6
//   return applyMath(6, s)
// }
// function seven(s?: MaybeOperation) {
//   if(!s) return 7
//   return applyMath(7, s)
// }
// function eight(s?: MaybeOperation) {
//   if(!s) return 8
//   return applyMath(8, s)
// }
// function nine(s?: MaybeOperation) {
//   if(!s) return 9
//   return applyMath(9, s)
// }

// function plus(d:number): Operation {
//   return {op: '+', d}
// }
// function minus(d:number): Operation {
//   return {op: '-', d}
// }
// function times(d:number): Operation {
//   return {op: '*', d}
// }
// function dividedBy(d:number): Operation {
//   return {op: '/', d}
// }

type OperationFunc = (a: number) => number;

function zero(func?: OperationFunc)   { return func ? func(0) : 0; };
function one(func?: OperationFunc)    { return func ? func(1) : 1; };
function two(func?: OperationFunc)    { return func ? func(2) : 2; };
function three(func?: OperationFunc)  { return func ? func(3) : 3; };
function four(func?: OperationFunc)   { return func ? func(4) : 4; };
function five(func?: OperationFunc)   { return func ? func(5) : 5; };
function six(func?: OperationFunc)    { return func ? func(6) : 6; };
function seven(func?: OperationFunc)  { return func ? func(7) : 7; };
function eight(func?: OperationFunc)  { return func ? func(8) : 8; };
function nine(func?: OperationFunc)   { return func ? func(9) : 9; };

function plus( b: number ): OperationFunc      { return function( a: number ) { return a + b; }; };
function minus( b: number ): OperationFunc     { return function( a: number ) { return a - b; }; };
function times( b: number ): OperationFunc     { return function( a: number ) { return a * b; }; };
function dividedBy( b: number ): OperationFunc { return function( a: number ) { return a / b; }; };

test("should calculating with functions", () => {
  expect(seven(times(five()))).toBe(35)
  expect(four(plus(nine()))).toBe(13)
  expect(eight(minus(three()))).toBe(5)
  expect(six(dividedBy(two()))).toBe(3)
})