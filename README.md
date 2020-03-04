# isEven

This is a function made only for fun.\
It uses Quadrature rules based on interpolating functions with 100 subintervals and 5 decimals points.

It creates a function based on the number, and calculate its definite integral from -1 to 0 and from 0 to 1.
Then it compares if the left definite integral equals the right definite integral. If so, returns true.

## To run tests:
```bash
npm run test
```

## Time complexity:
DiscreteIntegral's calculate: O(intervals).\
isEven: O(intervals) + O(1).
