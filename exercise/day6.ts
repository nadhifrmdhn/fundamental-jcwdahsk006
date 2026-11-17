///////// PR /////////

/*
Exercise 1
Create a function to calculate array of student data
The object has the following properties : name, email, age, and score
Parameters: array of student
Return values: object with the following properties : average score, highest score, lowest score, average age, highest age, and lowest age
*/

// Buat struktur dari Student
type Student = {
  name: string;
  email: string;
  age: number;
  score: number;
};

// Buat struktur hasil
type Statistics = {
  highest: number;
  lowest: number;
  average: number;
};

type StudentResult = {
  score: Statistics;
  age: Statistics;
};

// Buat array object dari student
const students: Student[] = [
  {
    name: "Aan",
    email: "aan@gmail.com",
    age: 25,
    score: 85
  },
  {
    name: "Bowo",
    email: "bowo@gmail.com",
    age: 26,
    score: 90
  },
  {
    name: "Cokro",
    email: "cokro@gmail.com",
    age: 27,
    score: 75
  }
];

// Buat fungsi kalkulasinya
function calculateStudents( students: Student[] ): StudentResult {

  let highestScore = students[0].score;
  let lowestScore = students[0].score;

  let highestAge = students[0].age;
  let lowestAge = students[0].age;

  let totalScore = 0;
  let totalAge = 0;

  for (const student of students) {

    totalScore = totalScore + student.score;
    totalAge = totalAge + student.age;

    if (student.score > highestScore) {
      highestScore = student.score;
    }
    else if (student.score < lowestScore) {
      lowestScore = student.score;
    }
    else if (student.age > highestAge) {
      highestAge = student.age;
    }
    else if (student.age < lowestAge) {
      lowestAge = student.age;
    }
  }

  const averageScore = totalScore / students.length;
  const averageAge = totalAge / students.length;

  return {
    score: {
      highest: highestScore,
      lowest: lowestScore,
      average: averageScore
    },
    age: {
      highest: highestAge,
      lowest: lowestAge,
      average: averageAge
    }
  };
}

console.log(calculateStudents(students));


/*
Exercise 2
Create a program to create transaction
Product class properties : name, price
Transaction class properties: total, product (All product data, Qty)
Add to cart method -> Add product to transaction
Show total method -> Show total current transaction
Checkout method -> Finalize transaction, return transaction data
*/

// Buat product
class Product {
  name: string;
  price: number;

  // Pakai Constructor, akan jalan tiap new product
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

// Buat struktur cart item 
type CartItem = {
  product: Product;
  qty: number;
};

// Buat transaksi
class Transaction {
  total: number;
  products: CartItem[];
  private isCheckedOut: boolean;

  constructor() {

    this.total = 0; // Transaksi baru mulai dari total 0
    this.products = []; // Inisialisasi cartnya kosong

    this.isCheckedOut = false; // Transaksi belum di finalisasi
  }

  // Tambah product ke cart
  addToCart(product: Product, qty: number): void {

    if (!Number.isInteger(qty) || qty <= 0) {
      throw new Error("Quantity must be a positive integer"); // Validasi kuantitasnya harus nilai positif
    }

    this.products.push({ // Tambahin product dan quantity ke array
      product: product,
      qty: qty
    });

    const subtotal = product.price * qty; // Hitung subtotal dulu

    this.total = this.total + subtotal; // Update totalnya
  }

  // Tampilkan transaksi total
  showTotal(): number {
    return this.total;
  }

  // Finalisasi transaksi
  checkout() {
    if (this.isCheckedOut) {
      throw new Error("Transaction already checked out");
    }

    this.isCheckedOut = true;

    return {
      products: this.products.map(item => ({
        product: {
          name: item.product.name,
          price: item.product.price
        },
        qty: item.qty
      })),
      total: this.total
    };
  }
}

const coffee = new Product("Coffee", 25000);
const tea = new Product("Tea", 15000);
const matcha = new Product("Matcha", 20000);

const transaction = new Transaction();

transaction.addToCart(coffee, 2);
transaction.addToCart(tea, 1);
transaction.addToCart(matcha, 3);

console.log("Current total:", transaction.showTotal());

const result = transaction.checkout();

console.log("Checkout result:", result);
