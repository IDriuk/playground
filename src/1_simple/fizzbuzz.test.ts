// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz
// connect: undefined

/* 
var fizzBuzz = function(n) {
  let result = []
  let i = 1
  
  while ( i <= n ) {
      let val = ""
      if (!(i % 3)) {
          val += "Fizz"
      }
      if (!(i % 5)) {
          val += "Buzz"
      }

      result.push(val || "" + i)
      
      i++
  }
  
  return result
};
*/

import { vi, MockInstance } from 'vitest';

function fizzBuzz(n: number) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

let consoleLogMock: MockInstance<Parameters<typeof console.log>, ReturnType<typeof console.log>>;

beforeEach(() => {
  consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  consoleLogMock.mockRestore();
});

test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  fizzBuzz(5);

  expect(consoleLogMock.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  fizzBuzz(15);

  expect(consoleLogMock.mock.calls[0][0]).toEqual(1);
  expect(consoleLogMock.mock.calls[1][0]).toEqual(2);
  expect(consoleLogMock.mock.calls[2][0]).toEqual('fizz');
  expect(consoleLogMock.mock.calls[3][0]).toEqual(4);
  expect(consoleLogMock.mock.calls[4][0]).toEqual('buzz');
  expect(consoleLogMock.mock.calls[5][0]).toEqual('fizz');
  expect(consoleLogMock.mock.calls[6][0]).toEqual(7);
  expect(consoleLogMock.mock.calls[7][0]).toEqual(8);
  expect(consoleLogMock.mock.calls[8][0]).toEqual('fizz');
  expect(consoleLogMock.mock.calls[9][0]).toEqual('buzz');
  expect(consoleLogMock.mock.calls[10][0]).toEqual(11);
  expect(consoleLogMock.mock.calls[11][0]).toEqual('fizz');
  expect(consoleLogMock.mock.calls[12][0]).toEqual(13);
  expect(consoleLogMock.mock.calls[13][0]).toEqual(14);
  expect(consoleLogMock.mock.calls[14][0]).toEqual('fizzbuzz');
});


