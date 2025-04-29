// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// connect: undefined


// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair);
//   }
// }

import { vi, MockInstance } from 'vitest';

function steps(n: number, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

let consoleLogMock: MockInstance<Parameters<typeof console.log>, ReturnType<typeof console.log>>;

beforeEach(() => {
  consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  consoleLogMock.mockRestore();
});

test('steps is a function', () => {
  expect(typeof steps).toEqual('function');
});

test('steps called with n = 1', () => {
  steps(1);
  expect(consoleLogMock.mock.calls[0][0]).toEqual('#');
  expect(consoleLogMock.mock.calls.length).toEqual(1);
});

test('steps called with n = 2', () => {
  steps(2);
  expect(consoleLogMock.mock.calls[0][0]).toEqual('# ');
  expect(consoleLogMock.mock.calls[1][0]).toEqual('##');
  expect(consoleLogMock.mock.calls.length).toEqual(2);
});

test('steps called with n = 3', () => {
  steps(3);
  expect(consoleLogMock.mock.calls[0][0]).toEqual('#  ');
  expect(consoleLogMock.mock.calls[1][0]).toEqual('## ');
  expect(consoleLogMock.mock.calls[2][0]).toEqual('###');
  expect(consoleLogMock.mock.calls.length).toEqual(3);
});
