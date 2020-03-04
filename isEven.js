class DiscreteIntegral {
  constructor(exp, intervals) {
    this.exponent = exp;
    this.intervals = intervals;
  }

  f(n) {
    let fApplied = Math.pow(n, this.exponent);
    if (!fApplied) return 0;

    return fApplied;
  }

  calculate(a, b) {
    let coefficient = (b - a) / this.intervals;
    let startingPoint = this.f(a) / 2;
    let endingPoint = this.f(b) / 2;
    let sum = 0;

    for (let i = 1; i <= this.intervals - 1; i++) {
      sum += this.f(a + (i * coefficient));
    }

    return coefficient * (startingPoint + sum + endingPoint);
  }
}

function isEven(n) {
  integral = new DiscreteIntegral(n, 100);
  let left = integral.calculate(-1, 0).toPrecision(5);
  let right = integral.calculate(0, 1).toPrecision(5);

  return left == right;
}

module.exports = isEven;
