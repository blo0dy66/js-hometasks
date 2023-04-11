// 10. ECMASCRIPT 2015 (ES6)
// 📀💿📀💿

// 10-1.
// Напишіть код в /* Ваш код */, щоб він працював

let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = 'name №5'} = names;

console.log(f); // "Tom"
console.log(x); // "Ray"

console.log(fifth); // "Name №5"