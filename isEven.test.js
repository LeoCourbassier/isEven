const isEven = require('./isEven');

const notFunIsEven = n => n % 2 == 0 && n >= 0;

describe('isEven function', () => {
  describe('Tests for the positive integers', () => {
    for (let i = 0; i < 100; i++) {
      let random = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
      let ans = notFunIsEven(random);
      it('isEven returns ' + ans + ' for ' + random, () => {
        expect(isEven(random)).toBe(ans);
      });
    }
  });

  describe('Tests for the negative integers', () => {
    for (let i = 0; i < 100; i++) {
      let random = -Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
      let ans = notFunIsEven(random);
      it('isEven returns ' + ans + ' for ' + random, () => {
        expect(isEven(random)).toBe(ans);
      });
    }
  });

  describe('Tests for the fractionals numbers', () => {
    for (let i = 0; i < 100; i++) {
      let random = Math.random();
      let ans = notFunIsEven(random);
      it('isEven returns ' + ans + ' for ' + random, () => {
        expect(isEven(random)).toBe(ans);
      });
    }
  });
});

