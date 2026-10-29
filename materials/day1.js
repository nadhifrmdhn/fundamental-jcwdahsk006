// =========================================================================================================== //
/*
01. Intro to Software Development
27 October 2026

What?
- design
- create
- testing
- maintain

Why?
- Career growth
- Problem Solving
- Creativity
- Digital Literacy

Process:
1. Plan -> understand the problem
2. Design -> sketch out the solution
3. Build -> write the code
4. Test -> check for bugs
5. Deploy -> make it available to users
6. Maintain -> fix issues, new features

Web?
- World Wide Web = collection of the websites connected through the internet
Analogy:
The Web = A big city
Websites = House/Buildings 
Browser = Transportation

Algorithm?
Step by step set of instructions to solve a problem / complete a task

JavaScript?
Analogy:
HTML = structure of house
CSS =  design/decoration of the house
JS = electricity that makes things work
*/

// =========================================================================================================== //



console.log("Hello World!")

// ini adalah comment 1

/* 
ini
adalah 
comment 2 
*/


// ============================[ VARIABLE ]============================ //
/* 
storage / penampungan data
example: var, let, const
*/

var person = "Budi"; // var udah gakepake untuk hindarin hal duplicate, karena bisa pakai nama variable yang sama gak dijaga
console.log(person);

let person2 = "Siti"; // let bisa diubah/isi ulang datanya
person2 = "Amel"
console.log(person2);

const person3 = "Joko"; // const tidak bisa diubah/isi ulang datanya
// person3 = "Joni"; // kalao tambahin ini, ini bakal error
console.log(person3);


// ============================[ VARIABLE NAMING ]============================ //
/* 
    - must contain only letters, digit, or symbol "$"  and "_"
    - the first character must not a digit
    - case sensitive
*/

const companyName = "Purwadhika"; // camelCase (best practice in js)
const CompanyName = "Purwadhika"; // PascalCase (best practice in js oop class)
const company_name = "Purwadhika"; // snake_case


// ============================[ DATA TYPES ]============================ //
/*
    - primitive data types (5): string , number, boolean, null, undefined
    - non-primitive data types (2): object & array
*/

// string -> " " / ' ' / ` `
console.log("Hello World!");
console.log('Hello World!');
console.log(`Hello World!`);

// number -> integer 1 2 3 4 5 / float 1.5 2.5 3.5
console.log(1);
console.log(1.5);

// boolean -> true / false
console.log(true);
console.log(false);

// null -> value kosong, untuk kasih tau nanti bakal diisi valuenya
let orang = null;

// undefined -> js tidak tau value nya apa, karena nanti gabakal diisi valuenya
let orang2;
let orang3 = undefined;

/* 
optional: pake extension Quokka untuk nampilin console tanpa harus run
mac -> command + k  q
win -> ctrl + k  q
*/