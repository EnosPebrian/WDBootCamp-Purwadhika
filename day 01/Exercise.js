// Write a code to find area of rectangle.
// get variable panjang
let p = 2;
// get variable lebar
let l = 3;
// luas = panjang dikali lebar
let area = p * l;
console.log(`The area of the rectangle is ${area} m2`);

// ● Write a code to find perimeter of rectangle.
// get variable panjang (from previous lines)
// get variable lebar (from previous lines)
// perimeter = (panjang ditambah lebar) dikali 2
let perimeter = (p + l) * 2;
console.log(`The perimeter of this rectangle is ${perimeter} m`);
console.log("");

// ● Write a code to find diameter, circumference and area of a circle.
//get diameter
let r = 10;
//calculate the diameter
let diameter = r * 2;
//calculate circumference
let circumference = (Math.PI * 2 * r).toFixed(2);
// calculate the area
// Math.PI
let areaofcircle = (Math.PI * r ** 2).toFixed(2);
console.log(
  `The diameter of this circle is ${diameter} circumference of this circle is ${circumference}, while the areaofcircle is ${areaofcircle}`
);

// ● Write a code to find angles of triangle if two angles are given.
//get the first angle
let angle1 = 60;
//get the second angle
let angle2 = 50;
//calculate the third angle 180-angle1-angle2
let angle3 = 180 - angle1 - angle2;
console.log(`the other angles of the triangle has ${angle3} degree`);
console.log(""); // adding new line for better output

// ● Write a code to get difference between dates in days.
//get the dates
const date1 = new Date("2023-05-06");
const date2 = new Date("2020-06-06");
//calculate the difference in mili second
let milisecs = date1 - date2;
//convert milisecs to days
let days = Math.abs(milisecs / 1000 / 3600 / 24);
console.log(`The difference between these days are ${days} days`);

// ● Write a code to convert days to years, months and days.
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ 1 year : 365 days, 1 month : 30 days
//get the difference days from the previous calculation
//calculte the year difference

days = 396;
let year_diff = Math.floor(days / 365);
//calculate the month difference from the rest of the month
let month_diff = Math.floor((days % 365) / 30);
//calculate the day difference
let day_diff = (days % 365) % 30;
//print the difference
console.log(
  `${days} days = ${year_diff} year, ${month_diff} month, ${day_diff} days`
);
