/*
No. 1
Write a code to check whether the number is odd or even
Example: 25 → odd number, 2 → even number
*/
let angka: number = 25;
if (angka % 2 === 0) {
    console.log(`${angka} = even number`)
} else {
    console.log(`${angka} = odd number`)
}


/*
No. 2
Write a code to check whether the number is prime number or not
Example: 7 → 7 is a prime number
Example: 6 → 6 is not a prime number
*/
let angkaPrima: number = 7;
let isPrime: boolean = true;
if (angkaPrima <= 1) {
    isPrime = false;
} else {
    let i = 2;
    while (i * i <= angkaPrima) {
        if (angkaPrima % i === 0) {
            isPrime = false;
            break;
        }
        i++;
    }
}
console.log(`${angkaPrima} is ${isPrime ? "a prime number" : "not a prime number"}`);


/*
No. 3
Write a code to find the sum of the numbers 1 to N
Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
Example: 3 → 1 + 2 + 3 = 6
*/
let N: number = 5;
let sum: number = 0;
let sequence: string = "";

for (let i = 1; i<= N; i++) {
    sum += i;
    if (i === 1) {
        sequence += i;
    } else {
        sequence += " + " + i;
    }
}
console.log(`Sum dari1 sampai ${N} -> ${sequence} = ${sum}`);


/* 
No. 4
Write a code to find factorial of a number
Example: 4! → 4 x 3 x 2 x 1 = 24
Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
let n: number = 4;

if (n < 0) {
    console.log("Factorial is not defined for negative numbers");
} else {
    let factorial: number = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log(`${n}! = ${factorial}`);
}


/*
No. 5
Write a code to print the first N fibonacci numbers
Example: 15 → 610
*/
let Nfibonacci: number = 15;
// Initialize first two Fibonacci numbers
let a: number = 0;
let b: number = 1;

// Print the first Fibonacci number if N >= 1
if (Nfibonacci >= 1) {
    console.log(a);
}
// Print the second Fibonacci number if N >= 2
if (Nfibonacci >= 2) {
    console.log(b);
}
// Generate and print remaining Fibonacci numbers
for (let i: number = 2; i < Nfibonacci; i++) {
    const next: number = a + b;
    console.log(next);
    // Update values for next iteration
    a = b;
    b = next;
}

console.log("\nNth Fibonacci number (where N =", Nfibonacci, "):");
console.log(b);

