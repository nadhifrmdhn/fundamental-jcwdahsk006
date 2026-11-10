// // create a function that can create a triangle pattern example:
// // 1
// // 1 2
// // 1 2 3
// // 1 2 3 4
// // 1 2 3 4 5

// function trianglePattern(height: number) {
//     for (let i = 1; i <= height; i++) {
//         let pattern = "";
//         for (let j = 1; j <= i; j++) {
//             pattern += j + " ";
//         }
//         console.log(pattern);
//     }
// }

// let angka = 5;

// trianglePattern(angka);


///////// PR /////////

/*
No. 1
Create a function that can create a triangle pattern according to the height we provide like the following :
01
02  03
04  05  06
07  08  09  10
Parameters : height → triangle height
*/
function trianglePattern(height: number) {
    let number = 1; // Initialize the starting number to avoid repeating numbers in the triangle pattern
    let result = "";  // Initialize an empty string to store the entire pattern
    // Make a loop for each row of the triangle
    for (let i = 1; i <= height; i++) {
        let pattern = "";  // Initialize an empty string for the current row
        // Make a loop for each number in the current row
        for (let j = 1; j <= i; j++) {
            pattern += number.toString().padStart(2, "0");  // Make the number into string so it can be added to the pattern, also make it two digits with leading zeros
            // Add a space after each number except the last one in the row
            if (j < i) {
                pattern += "  ";  // Add spaces between numbers
            }
            number++; // Increment the number for the next iteration
        }
        result += pattern; // Add current row to result
        if (i < height) {  // Don't add newline after last row
            result += "\n"; // Add newline after each row except the last one
        }
    }
    return result;
}
let height = 4;
console.log(trianglePattern(height));


/*
No. 2
Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
Parameters : n → total looping
Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 
*/
function fizzBuzz(n: number) {
    let result = ""; // Initialize empty string to store output
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // If divisible by both 3 and 5
            result += "FizzBuzz "; 
        } else if (i % 3 === 0) { // If divisible by 3: change to "Fizz"
            result += "Fizz ";
        } else if (i % 5 === 0) { // If divisible by 5: change to "Buzz"
            result += "Buzz ";
        } else {
            result += i.toString() + " "; // Add space after each number or word
        }
    }
    return result.trim();  // Remove trailing space
}
let n = 15;
console.log(fizzBuzz(n));


/*
No. 3
Create a function to calculate Body Mass Index (BMI)
Formula : BMI = weight (kg) / (height (meter))²
Parameters : weight & height
Return values :
< 18.5 return “less weight”
18.5 - 24.9 return “ideal”
25.0 - 29.9 return “overweight”
30.0 - 39.9 return “very overweight”
> 39.9 return “obesity”
*/
function calculateBMI(weight: number, height: number): string {
    if (height <= 0 || weight <= 0) {
        throw new Error("Weight and height must be positive numbers");
    }
    const bmi = weight / (height * height); // Declare the BMI formula
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}
let bb = 68.5;
let tb = 1.70;
console.log(calculateBMI(bb, tb));


/*
No. 4
Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/
function removeOddNumbers(inputNumbers: number[]): number[] { // Function receives an array of numbers
    const evenNumbers: number[] = []; // Make an empty array to put the even numbers in the array
    for (let i = 0; i < inputNumbers.length; i++) {
        const currentNumber = inputNumbers[i]; // Loop through each the input number
        // Check if the current number is even or not
        if (currentNumber % 2 === 0) {
            evenNumbers.push(currentNumber); // Add even numbers to the new array 
        }
    }
    return evenNumbers;
}
const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeOddNumbers(inputNumbers));


/*
No. 5
Write a function to split a string and convert it into an array of words
Example : “Hello World” → [“Hello”, “World”]
*/
function splitStringToArray(inputString: string): string[] { // Function to convert a string into an array of words
    return inputString.split(" "); // Split by the space between the words
}
console.log(splitStringToArray("Hello World"));