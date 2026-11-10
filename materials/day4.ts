let letters = ["a", "b", "c", "d", "e"];

console.log(letters[4]);
console.log(letters.length);
console.log(letters.length - 1);


// setiap 'letter' di dalam 'letters', tampilkan 'letter' tersebut
for (let letter of letters) {
    console.log(letter);
}

letters.forEach(
    (letter) => {
        console.log(letter);
    }
)


// function biasa
function hello() {
    return "Hola!";
}
console.log(hello());

// arrow function, langsung mengeluarkan nilainya
const helloArrow = () => "Hola!";
console.log(helloArrow());