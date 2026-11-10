// =========================================================================================================== //
/*
03. Conditional and Loop Statements
3 November 2026


if Statement
- Untuk mengecek kondisi tertentu, jika kondisi tersebut benar maka akan mengeksekusi blok kode tertentu (belum tau value yang mau dicek)
- Syntax:
  if (condition) {
    // code to be executed if condition is true
  }


else Statement
- Untuk mengeksekusi blok kode tertentu jika kondisi pada if statement salah
- Syntax:
  if (condition) {
    // code to be executed if condition is true
  } else {
    // code to be executed if condition is false
  }


if else Statement
- Untuk mengeksekusi blok kode tertentu jika kondisi pada if statement salah, dan mengecek kondisi lain
- Syntax:
  if (condition1) {
    // code to be executed if condition1 is true
  } else if (condition2) {
    // code to be executed if condition2 is true
  } else {
    // code to be executed if both conditions are false
  }
    

switch Statement
- Untuk mengeksekusi sesuai dengan kondisi2 yang ada, seperti mengkategorikan kondisi2 yang ada (kalau sudah tau value yang mau dicek)
- Syntax:
  switch (expression) {
    case value1:
      // code to be executed if expression === value1
      break;
    case value2:
      // code to be executed if expression === value2
      break;
    default:
      // code to be executed if expression doesn't match any case
  }


falsy
- Nilai yang dianggap false dalam konteks boolean
- Nilai yang dianggap falsy: 
    false
    0
    -0
    0n
    ""
    null
    undefined
    NaN 

truthy
- Nilai yang dianggap true dalam konteks boolean
- Nilai yang dianggap truthy: 
    Semua nilai selain falsy
    -1
    1
    5


Logical Operators
- Digunakan untuk menggabungkan beberapa kondisi dalam pernyataan if atau switch
- Operator logika yang umum digunakan:
    && (AND): Mengembalikan true jika kedua kondisi bernilai true
    || (OR): Mengembalikan true jika salah satu kondisi bernilai true
    ! (NOT): Membalikkan nilai boolean dari kondisi


Short-Circuiting
- Teknik untuk pengecekan ditengah jalan kondisi tanpa harus mengecek semua kondisi dengan if else statement


Ternary Operator
- Operator yang digunakan untuk menulis pernyataan if else dalam satu baris kode
- Syntax:
  condition ? expression1 : expression2
  - Jika kondisi bernilai true, maka expression1 akan dieksekusi
  - Jika kondisi bernilai false, maka expression2 akan dieksekusi

/// Loop Statements
For Loop
- Untuk mengeksekusi kalau sudah tau jumlah iterasi yang akan dilakukan
- Syntax:
  for (initialization; condition; increment/decrement) {
    // code to be executed
  }
- Sample:
for (let i = 0; i < 5; i++) {
  console.log(i);               // Output: 0, 1, 2, 3, 4
}

While Loop
- Untuk mengeksekusi kalau belum tau jumlah iterasi yang akan dilakukan
- Syntax:
  while (condition) {
    // code to be executed
  }
- Sample:
let i: number = 0;
while (i < 5) {
  console.log(i);               // Output: 0, 1, 2, 3, 4
  i++;
}

*/


let angka: number = 5;

switch (angka) {
    case 5:
        console.log("lima");
        break;      // harus ada break biar ga lanjut ke case berikutnya
    case 10:
        console.log("sepuluh");
}

