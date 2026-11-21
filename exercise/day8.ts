/*
No. 1
Create a function to merge two array of student data and remove duplicate data
Student data : name & email
Example : 
Array1 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  }
]
Array2 → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 3’, email : ‘student3@mail.com’  }
]
Result : 
ArrayResult → [
{ name: ‘Student 1’, email : ‘student1@mail.com’  }, 
{ name: ‘Student 2’, email : ‘student2@mail.com’  },
{ name: ‘Student 3’, email : ‘student3@mail.com’  }
]
*/

// Define struktur data Student
type Student = {
    name: string;
    email: string;
}

function mergeStudentData ( array1: Student[], array2: Student[] ): Student[] {
    
    const mergedArray: Student[] = [...array1, ...array2]; // Merge kedua array pakai spread operator
    const result: Student[] = []; // Buat array kosong untuk menyimpan unique data Student nanti

    for (const student of mergedArray) {

        let isDuplicate = false;

        for (const existingStudent of result) {
            if (student.email === existingStudent.email) { // Cek kalau emailnya ada yang sama sebagai unique identifier
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) { // Kalau gaada duplicate langsung tambah ke array student
            result.push(student);
        }
    }

    return result;
}

const array1: Student[] = [
    {
        name: "Asep",
        email: "asep@email.com"
    },
    {
        name: "Brandon",
        email: "brandon@email.com"
    }
];

const array2: Student[] = [
    {
        name: "Asep",
        email: "asep@email.com"
    },
    {
        name: "Chandra",
        email: "chandra@email.com"
    }
];

try {
    const arrayResult = mergeStudentData(array1, array2);
    console.log(arrayResult);
} catch {
    console.log("Something went wrong");
}


/*
No. 2
Create a function that can accept input as an array of objects and switch all values into property and property into value
Example : 
Input : [{ name: ‘David’, age: 20 }]
Output : [{ David: ‘name’, 20: ‘age’}]
*/

// Define struktur object
type DataObject = Record<string, string | number>;

function switchKeyValue( data: DataObject[] ): DataObject[] {
    const result: DataObject[] = []; // Buat array kosong untuk hasil nanti

    for (const obj of data) { // Loop tiap object di dalam array
        const newObject: DataObject = {}; // Buat object kosong

        for (const key in obj) { // Loop tiap property di dalam object
            const value = obj[key]; // Ambil value dari property nya

            newObject[value] = key; // Switch key dan value nya
        }

        result.push(newObject); // Tambah object baru ke hasil array
    }

    return result;
}

const data = [
    { name: "David", age: 20 }
];

console.log(switchKeyValue(data));


/*
No. 3
Create a function to find a factorial number using recursion
Example
Input :  5
Output: 5! = 5 x 4 x 3 x 2 x 1 = 120
*/

function factorial(n: number): number {

    // Validasi harus bilangan bulat non-negatif
    if ( n < 0 || !Number.isInteger(n)) {
        throw new Error("Input must be a non-negative integer");
    }

    if (n === 0 || n === 1) { // Stop recursion kalau n = 0 atau 1
        return 1;
    }

    return n * factorial(n - 1); // Recursive
}

const number: number = 5;

try {
    const result = factorial(number);
    const numbers: number[] = []; // Buat array untuk menyimpan urutan angka

    for (let i = number; i >= 1; i--) { // Loop angka sampai 1
        numbers.push(i);
    }

    const calculation = numbers.join(" x "); // Gabungin angka dengan kali " x "

    if (number === 0) {
        console.log("0! = 1")
    } else {
        console.log( `${number}! = ${calculation} = ${result}`);
    }

} catch (error) {
    console.error(error);
}