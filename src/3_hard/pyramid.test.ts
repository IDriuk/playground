// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// connect: recursion, interesting

//
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//
//     console.log(level);
//   }
// }

import { vi, MockInstance } from 'vitest';


function pyramid(n: number, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

let consoleLogMock: MockInstance<Parameters<typeof console.log>, ReturnType<typeof console.log>>;

beforeEach(() => {
  consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  consoleLogMock.mockRestore();
});

test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function');
});

test('prints a pryamid for n = 2', () => {
  pyramid(2);
  expect(consoleLogMock.mock.calls[0][0]).toEqual(' # ');
  expect(consoleLogMock.mock.calls[1][0]).toEqual('###');
  expect(consoleLogMock.mock.calls.length).toEqual(2);
});

test('prints a pryamid for n = 3', () => {
  pyramid(3);
  expect(consoleLogMock.mock.calls[0][0]).toEqual('  #  ');
  expect(consoleLogMock.mock.calls[1][0]).toEqual(' ### ');
  expect(consoleLogMock.mock.calls[2][0]).toEqual('#####');
  expect(consoleLogMock.mock.calls.length).toEqual(3);
});

test('prints a pryamid for n = 4', () => {
  pyramid(4);
  expect(consoleLogMock.mock.calls[0][0]).toEqual('   #   ');
  expect(consoleLogMock.mock.calls[1][0]).toEqual('  ###  ');
  expect(consoleLogMock.mock.calls[2][0]).toEqual(' ##### ');
  expect(consoleLogMock.mock.calls[3][0]).toEqual('#######');
  expect(consoleLogMock.mock.calls.length).toEqual(4);
});
