const isEven = require('./isEven');

const notFunIsEven = n => n % 2 == 0;

for (let i = 0; i < 100; i++) {
  test('isEven returns the same as notFunIsEven for ' + i, () => {
    expect(isEven(i)).toBe(notFunIsEven(i));
  });
}
