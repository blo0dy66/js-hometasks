// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”


let str = 'Java Script'
let re  = /(\w+)\s+(\w+)/;
let newStr = str.replace(re, '$2, $1');
console.log(newStr); // "Script, Java"