// No. 1 Create a function to convert Excel sheet column title -> column number
function titleToNumber(columnTitle: string): number {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const charValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;

        result = result * 26 + charValue;
    }
    return result;
}

console.log(titleToNumber("AB"));


// No. 2 Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
function singleNumber(nums: number[]): number {
    let result = 0;

    for (let i =0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));


// No. 3 Given two strings s and t, return true if t is on anagram of s, and false otherwise.
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));


// No. 4 You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
function nSteps(n: number): number {
    // Handle edge case
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;

    let oneStepBack = 1;
    let twoStepsBack = 2;
    let currentWays = 0;

    for (let i = 3; i<= n; i++) {
        currentWays = oneStepBack + twoStepsBack;
        twoStepsBack = oneStepBack;
        oneStepBack = currentWays;
    }
    return currentWays;
}

console.log(nSteps(5))


////// PR //////
/*
No. 5
Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:
Input: nums = [3,2,3]
Output: 3
Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/
function majorityElement(nums: number[]): number {

  const n = nums.length;
  const half = Math.floor(n / 2); // Hitung setengah panjang dari array nya

  for (const num of nums) {
    let count = 0;

    for (const element of nums) {
      if (num === element) { // Cek jika kedua angka sama
        count++;
      }
    }

    if (count > half) { // Cek apakah termasuk majority element
      return num;
    }
  }

  throw new Error("Majority element not found");
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));


/*
No. 6
Create a function to convert roman numeral to integer.
Example 1:
Input: s = "III”
Output: 3
Explanation: III = 3.
Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
function romanToInt(s: string): number {

  const roman: Record<string, number> = { // Buat object untuk menyimpan nilai numeral
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {

    const current = roman[s[i]]; // Ambil nilai dari angka Romawi
    const next = roman[s[i + 1]] ?? 0; // Cek ambil nilai kalau ada angka Romawi lagi setelahnya

    if (current < next) { // Compare nilai sekarang dan nilai setelahnya
      total = total - current; // Kalau nilai sekarang lebih kecil dari setelahnya, jadi dikurangi
    } else {
      total = total + current; // Sebaliknya, kalau nilainya lebih besar, jadi ditambah
    }
  }
  return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));


/*
No. 7
Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:
Input: numRows = 1
Output: [[1]]
*/
function generate(numRows: number): number[][] {

  const triangle: number[][] = []; // Buat empty array untuk segitiga kosong

  // Loop outer untuk buat row
  for (let i = 0; i < numRows; i++) { 

    const row: number[] = []; // Buat segitiga kosong untuk current row

     // Loop inner untuk buat kolom
    for (let j = 0; j <= i; j++) { 

      if (j === 0 || j === i) { // Cek apakah ini first atau last element di row ini
        row.push(1); // Kalau first dan last selalu 1
      } else {

        // Ambil 2 angka diatas dari row sebelumnya
        const left = triangle[i - 1][j - 1];
        const right = triangle[i - 1][j];

        const value = left + right; // Hitung totalnya

        row.push(value); // Tambahin nilai yang sudah dihitung ke row
      }
    }

    triangle.push(row); // Tambahin row yang sudah complete ke array segitiga tadi
  }

  return triangle;
}

console.log(generate(5));
console.log(generate(1));


/*
No. 8
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/
function maxProfit(prices: number[]): number {

  if (prices.length < 2) { // Butuh setidaknya 2 hari untuk beli dan jual
    return 0;
  }

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) { // Loop sisa hari

    const currentPrice = prices[i]; // Ambil harga stok hari ini

    const profit = currentPrice - minPrice; // Hitung profit yang memungkinkan kalau jual hari ini

    if (profit > maxProfit) { // Cek apakah bisa cari profit yang lebih bagus
      maxProfit = profit;
    }

    if (currentPrice < minPrice) { // Cek apakah harga hari ini lebih murah dari harga beli minmum sebelumnya
      minPrice = currentPrice;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
