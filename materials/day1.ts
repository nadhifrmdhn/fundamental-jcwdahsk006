// =========================================================================================================== //
/*
01. Intro to Software Development
27 October 2026
*/
// =========================================================================================================== //

// versi JS
const messageJS = "Hello";

// versi TS
const messageTS: string = "Hello"; // wajib isinya sesuai tipe data, karena TS punya fitur type safety


// ============================[ STRING BUILT IN METHOD ]============================ //

const name: string = "John Doe";
const name2: string = "Jessica";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("J", "K"));
console.log(name.replaceAll("o", "a"));
console.log(name.concat(" ").concat(name2));
console.log(name + " " + name2);
console.log(name.slice(0, 2));
console.log(name.split("")); // split every string
console.log(name.split(" ")); // split by space


// ============================[ TEMPLATE LITERALS / TEMPLATE STRINGS ]============================ //

const welcome: string = "Welcome";
const name3: string = "Jack";

console.log(welcome + ", " + name3); // normal string concatenation

console.log(`${welcome}, ${name3}`); // template literal


// ============================[ NUMBER BUILT IN METHOD ]============================ //

const angka: string = "4000";

console.log(angka); // masih bentuk string ada petik

console.log(Number(angka)); // cara 1 convert string to number
console.log(parseInt(angka)); // cara 2 convert string to number


// ============================[ STRING CONVERSION ]============================ //

const angka2: number = 4000;

console.log(angka2); // masih bentuk number

console.log(String(angka2)); // cara 1 convert number to string
console.log(angka2.toString()); // cara 2 convert number to string


// ============================[ BOOLEAN CONVERSION ]============================ //

console.log(Boolean(300)); // true
console.log(Boolean(-300)); // true
console.log(Boolean(0)); // false, pokoknya semua angka selain 0 itu true
console.log(Boolean("Budi")); // true
console.log(Boolean("")); // false, pokoknya semua string yang ada isinya selain "" itu true
console.log(Boolean(" ")); // true, karena ada isi spasi
console.log(Boolean(null)); // false
console.log(Boolean("false")); // true
console.log(Boolean("0")); // true


// ============================[ DATE ]============================ //

const now: Date = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1); // karena month disini mulai dari 0, jadi harus ditambah 1
console.log(now.getDate());
console.log(now.getDay()); // hari dimulai dari 0 (minggu) sampai 6 (sabtu)
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());


// ============================[ BASIC OPERATORS ]============================ //
/*
    + -> penjumlahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulus atau modulo (sisa bagi)
    ** -> pangkat
*/

console.log(2 + 1);
console.log(3 - 1);
console.log(3 * 3);
console.log(4 / 2);
console.log(11 % 2);
console.log(5 ** 2);


// ============================[ MODIFY IN PLACE ]============================ //

let n: number = 5;

n+= 5; // sama aja kaya n = n + 5

console.log(n);


// ============================[ INCREMENT & DECREMENT ]============================ //

let counter: number = 1;

counter++; // increment,sama aja kaya counter = counter + 1
console.log(counter);

counter--; // decrement, sama aja kaya counter = counter - 1
console.log(counter);


// ============================[ COMPARISON OPERATOR ]============================ //
/*
    == -> sama dengan valuenya aja
    === -> value dan tipe datanya sama
    > -> lebih besar dari
    < -> lebih kecil dari
    >= -> lebih besar dari atau sama dengan
    <= -> lebih kecil dari atau sama dengan
*/


//console.log(5 == "5"); // true, karena cuma ngecek valuenya aja
//console.log(5 === "5"); // false, karena ngecek value dan tipe datanya, jadi beda tipe data (lebih sering dipake)

console.log(2 < 5);
console.log(5 < 5);


// ============================[ MATH ]============================ //

console.log(Math.ceil(4.2)); // pembulatan ke atas
console.log(Math.floor(4.7)); // pembulatan ke bawah

console.log(Math.round(4.5)); // pembulatan ke atas jika >= 0.5
console.log(Math.round(4.4)); // pembulatan ke bawah jika < 0.5

console.log(Math.max(4, 150, 4000, 21, 37, 500)); // cari nilai max
console.log(Math.min(4, 150, 4000, 21, 37, 500)); // cari nilai min

console.log(Math.abs(-100)); // absolute value menghasilkan nilai positif, jadi hasilnya 100

console.log(Math.random()); // random number antara 0 - 1

console.log(Math.floor(Math.random() * 100 + 1)); // random number antara 1 - 100

const min: number = 12;
const max: number = 30;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // random number antara 1 - 100