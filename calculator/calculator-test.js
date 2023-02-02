
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 7700,
    years: 5,
    rate: 0.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('129.97')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10000,
    years: 10,
    rate: 5.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('108.53')
});

/// etc
