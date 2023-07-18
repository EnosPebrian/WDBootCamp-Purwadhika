const {
  isWeekend,
  find_GCD,
  find_LCM,
  most_common_char,
  sorting,
  sort_withsort,
  minimum_date,
  sum_two_dimensional_array,
} = require("./exercise.js");

test("isWeekend", () => {
  expect(isWeekend(new Date())).toBe(false);
  expect(isWeekend(new Date(`2023-07-15`))).toBe(true);
  expect(isWeekend(new Date(`2023-02-04`))).toBe(true);
  expect(isWeekend(new Date(`2023-07-29`))).toBe(true);
  expect(isWeekend(new Date(`2023-07-28`))).toBe(false);
});

test(`find GCD`, () => {
  expect(find_GCD(36, 60)).toBe(12);
  expect(find_GCD(24, 30)).toBe(6);
  expect(find_GCD(24, 18)).toBe(6);
  expect(find_GCD(45, 30)).toBe(15);
  expect(find_GCD(14, 35)).toBe(7);
});

test(`find LCM`, () => {
  expect(find_LCM(60, 282)).toBe(2820);
  expect(find_LCM(48, 72)).toBe(144);
  expect(find_LCM(3, 2)).toBe(6);
  expect(find_LCM(33, 44)).toBe(132);
});

test(`find most common char`, () => {
  expect(
    most_common_char(
      `Write a code to find most common character from a string aaaaaaaaaaa`
    )
  ).toBe("a");

  expect(
    most_common_char(`Write a code to find most common character from a string`)
  ).toBe("o");
  expect(
    most_common_char(
      `zzzzzzzzzzzzzzzzzzzzzzzWrite a code to find most common zzzzzzzzzzzzz character from a string aaaaaaaaaaa`
    )
  ).toBe("z");
});

test(`sorting without sort`, () => {
  expect(
    sorting(
      "Write a code to sort a string alphabetically (with and without sort function)"
    )
  ).toBe("aaaaaabcccddeeefghhhiiiiiilllnnnnooooooprrrrsssttttttttttuuwwy");
});

test(`sorting with sort`, () => {
  expect(
    sort_withsort(
      "Write a code to sort a string alphabetically (with and without sort function)"
    )
  ).toBe("aaaaaabcccddeeefghhhiiiiiilllnnnnooooooprrrrsssttttttttttuuwwy");
});

test(`sum 2D array`, () => {
  expect(
    sum_two_dimensional_array([
      [1, 6],
      [2, 7],
      [3, 8],
      [4, 9],
      [2, 6],
    ])
  ).toBe(7 + 9 + 11 + 13 + 8);
  expect(
    sum_two_dimensional_array([[1, 1, 1, 1, 1], [2, 2, 7], [3, 8], [9], [2, 6]])
  ).toBe(5 + 11 + 11 + 9 + 8);
});

test("minimum date", () => {
  expect(
    minimum_date([
      new Date(`2023-07-14`),
      new Date(`2022-07-14`),
      new Date(`2021-07-14`),
      new Date(`2023-07-13`),
      new Date(`2023-07-12`),
    ])
  ).toStrictEqual(new Date(`2021-07-14`));
  expect(
    minimum_date([
      new Date(`2023-07-14`),
      new Date(`2022-07-14`),
      new Date(`2021-07-14`),
      new Date(`1999-07-13`),
      new Date(`2023-07-12`),
    ])
  ).toStrictEqual(new Date(`1999-07-13`));
});
