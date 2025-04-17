// connect: undefined

function quadratic(x1: number, x2: number) {
  return [1, -(x1 + x2), x1 * x2];
}

test('Get coefficients of the quadratic equation', () => {
  expect(quadratic(2, 3)).toEqual([1, -5, 6])
})