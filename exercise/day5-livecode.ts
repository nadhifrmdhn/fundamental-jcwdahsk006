/*
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
   a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xx}
*/
function getArrayStatsWithSort(arr: number[]) {
  const sorted = [...arr].sort((a, b) => a - b); // [...arr] membuat salinan array dan .sort((a, b) => a - b) mengurutkan dari terkecil ke terbesar

  const lowest = sorted[0]; // Dari hasil urutan, elemen pertama adalah nilai terendah
  const highest = sorted[sorted.length - 1]; // Elemen terakhir adalah nilai tertinggi
  let total = 0;
  for (let i = 0; i < sorted.length; i++) { // Loop untuk menghitung total semua angka dalam array
    total = total + sorted[i]; // Tambahkan angka saat ini ke total
  }
  const average = total / sorted.length; // Hitung rata-rata

  return {
    lowest: lowest,
    highest: highest,
    average: average
  };
}

const arr1 = [12, 5, 23, 18, 4, 45, 32];
console.log(getArrayStatsWithSort(arr1));

function getStatsWithoutSort(arr: number[]) {
  let lowest = arr[0]; // Inisialisasi nilai terendah dengan elemen pertama dari array
  let highest = arr[0]; // Inisialisasi nilai tertinggi dengan elemen pertama dari array
  let total = 0; // Inisialisasi total untuk menghitung jumlah semua elemen dalam array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < lowest) { // Jika elemen saat ini lebih kecil dari nilai terendah saat ini, perbarui nilai terendah
      lowest = arr[i]; // Perbarui nilai terendah
    }

    if (arr[i] > highest) { // Jika elemen saat ini lebih besar dari nilai tertinggi saat ini, perbarui nilai tertinggi
      highest = arr[i]; // Perbarui nilai tertinggi
    }

    total += arr[i]; // Tambahkan elemen saat ini ke total
  }

  const average = total / arr.length; // Hitung rata-rata dengan membagi total dengan panjang array

  return {
    lowest: lowest,
    highest: highest,
    average: average
  };
}

const arr2 = [12, 5, 23, 18, 4, 45, 32];
console.log(getStatsWithoutSort(arr2));


/*
2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
   a. Example : arr = ["apple", "banana", "cherry", "date"] → "apple, banana, cherry, and date"
*/
function joinWords(arr: string[]) {
  let result = ""; // Inisialisasi string kosong untuk menyimpan hasil

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) { // Jika ini adalah elemen pertama, tambahkan langsung ke hasil
      result = arr[i]; // Tidak perlu koma di awal
    } else if (i === arr.length - 1) {
      if (arr.length === 2) { // Jika hanya ada dua elemen, gunakan "and" tanpa koma
        result = result + " and " + arr[i];
      } else { // Jika ada lebih dari dua elemen, gunakan koma sebelum "and"
        result = result + ", and " + arr[i];
      }
    } else {
      result = result + ", " + arr[i]; // Tambahkan koma dan spasi sebelum elemen berikutnya
    }
  }

  return result;
}

const words = ["apple", "banana", "cherry", "date"];
console.log(joinWords(words));


/*
3. Write a function from a given array of numbers and return the second smallest number
   a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
*/
function getSecondSmallest(numbers: number[]): number | undefined { // Number | undefined berarti fungsi ini dapat mengembalikan angka atau undefined jika tidak ada elemen kedua terkecil
  
    if (numbers.length < 2) { // Jika panjang array kurang dari 2, tidak ada elemen kedua terkecil
    return undefined;
  }

  const sortedNumbers = [...numbers].sort((a, b) => a - b); // Buat salinan array dan urutkan dari terkecil ke terbesar
  return sortedNumbers[1];
}

const numbers = [5, 3, 1, 7, 2, 6];
console.log(getSecondSmallest(numbers));


/*
4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
   a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/
function addMatchingPositions(firstArray: number[], secondArray: number[]): number[] {
  const result: number[] = []; // Inisialisasi array kosong untuk menyimpan hasil penjumlahan

  for (let i = 0; i < firstArray.length; i++) { // Loop melalui setiap indeks dari firstArray
    result.push(firstArray[i] + secondArray[i]); // Tambahkan elemen dari firstArray dan secondArray pada indeks yang sama, lalu tambahkan hasilnya ke array result
  }

  return result;
}

const firstArray = [1, 2, 3];
const secondArray = [3, 2, 1];
console.log(addMatchingPositions(firstArray, secondArray));


/*
5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
   a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
   b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
*/
function addIfNotPresent(arr: number[], newElement: number): number[] {
  let alreadyExists = false; // Inisialisasi variabel untuk melacak apakah elemen sudah ada dalam array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === newElement) { // Jika elemen saat ini sama dengan newElement, berarti sudah ada dalam array
      alreadyExists = true;
    }
  }

  if (alreadyExists === false) { // Jika elemen tidak ada dalam array, tambahkan ke array
    arr.push(newElement); // Tambahkan newElement ke akhir array
  }

  return arr;
}

const numbersWithoutDuplicate = [1, 2, 3, 4];
console.log(addIfNotPresent(numbersWithoutDuplicate, 4));

const numbersWithNewElement = [1, 2, 3, 4];
console.log(addIfNotPresent(numbersWithNewElement, 7));
