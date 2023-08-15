const {
  longest_common_prefix,
  half_array,
  days_in_a_month,
  days_ytd,
  calculate_age,
} = require(`./exercise2`);

test("longest common prefix", () => {
  expect(
    longest_common_prefix([`geeksforgeeks`, `geeks`, `geek`, `geezer`])
  ).toBe(`gee`);
  expect(
    longest_common_prefix([
      `geeksforgeeks`,
      `geeks`,
      `geek`,
      `geezer`,
      `bab`,
      `ba`,
      `boo`,
      `bee`,
      `bii`,
    ])
  ).toBe(`b`);
  expect(longest_common_prefix([`apple`, `ape`, `april`])).toBe(`ap`);
});

test("count the number of days", () => {
  expect(days_ytd(new Date(`2023-07-19`))).toBe(200);
  expect(days_ytd(new Date(`2023-01-31`))).toBe(31);
  expect(days_ytd(new Date(`2023-02-28`))).toBe(59);
});

test("half array", () => {
  expect(half_array([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([
    1, 2, 3, 4, 5,
  ]);
  expect(half_array([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([1, 2, 3, 4]);
});

test(`number of days in a month`, () => {
  expect(days_in_a_month(2, 2020)).toBe(29);
  expect(days_in_a_month(2, 2021)).toBe(28);
  expect(days_in_a_month(8, 2021)).toBe(31);
});

test("calculate_age", () => {
  expect(calculate_age(new Date(`1999-02-25`))).toBe(`24 years 5 months`);
  expect(calculate_age(new Date(`2023-07-16`))).toBe(`0 years 0 months`);
});
