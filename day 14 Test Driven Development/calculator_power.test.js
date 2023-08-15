const { Power, Add } = require("./calculator_power");

test("Testing power1", () => {
  expect(Power(2, 2)).toBe(4);
  expect(Power(2, 3)).toBe(8);
  expect(Power(2, 4)).toBe(16);
});

test("Testing sum", () => {
  expect(Add(2, 2)).toBe(4);
  expect(Add(2, 3)).toBe(5);
  expect(Add(2, 4)).toBe(6);
});

test("Combination", () => {
  expect(Add(Power(3, 3), 3)).toBe(30);
});
