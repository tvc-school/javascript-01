const { sum1, sum2, multiply1 } = require('./trial01');

test('sum1: adds 1 + 2 to equal 3', () => {
  expect(sum1(1, 2)).toBe(3);
})

test('sum2: adds 1 + 2 + 3 to equal 6', () => {
  expect(sum2(1, 2, 3)).toBe(6);
})

test('multiply1: 2 * 10 + 3 * 10 = 50', () => {
  expect(multiply1(2, 3)).toBe(50);
})
