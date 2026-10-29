/*
Write a code to find area of rectangle.
Example : length = 5, width = 3
Output : 15
*/
let length: number = 5;
let width: number = 3;

let area: number = length * width;
console.log(area);


/*
Write a code to find perimeter of rectangle.
Example : length = 5, width = 3
Output : 16
*/
let perimeter: number = 2 * (length + width);
console.log(perimeter);


/*
Write a code to find diameter, circumference and area of a circle.
Example : radius = 5
Output : diameter = 10, circumference = 31.4159, area = 78.539
*/
let radius: number = 5;
console.log({Diameter: 2 * radius});
console.log({Circumference: 2 * Math.PI * radius});
console.log({Area: Math.PI * radius ** 2});


/*
Write a code to find angles of triangle if two angles are given.
Example : a = 80, b = 65
Output : 35
*/
let a: number = 80;
let b: number = 65;
let c: number = 180 - (a + b);
console.log(c);


/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
Example : 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, 0 month, 1 day
*/
let totalDays: number = 400;


/*
Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
Example : 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, 0 month, 1 day
*/



/*
Write a code to get difference between dates in days.
Example : date1 = 2022-01-20, date2 = 2022-01-22
Output : 2
*/