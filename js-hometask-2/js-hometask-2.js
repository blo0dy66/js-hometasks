// Task 1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
// a < b < c

let a = 1;
let b = 3
let c = 4;

result = (a < b && b < c ) ? "It`s true" : "It`s false";
console.log(result)


// Task 2.
// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

let x = 1;
let y = 2;

let res1 = "" + x + y // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = true + "" + x * y // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y // Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x + y / "WHAT?" // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""


// Task 3.

// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. 
// В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
// Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

let isAdult = parseInt(prompt("What is your age?"))
if (isAdult < 18) {
    alert("You are too young")
} else if (isNaN(isAdult)) {
    alert("Please enter a number")
} else {
    alert("You are adult")
}

// Task 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data = ... // 5
...
console.log(arr) // [4, 2, 1, 6, 3, 2]

// Task 5. 
// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
//     a) визначити і вивести в консоль площу трикутника 
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. 
// Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

let a = parseInt(prompt("Введи сторону a"))
let b = parseInt(prompt("Введи сторону b"))
let c = parseInt(prompt("Введи сторону c"))
if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    alert("Incorrect data");
} else {
    let p = (a + b + c) / 2 // половина периметру
    let triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3)
    alert("Triangle area is " + triangleArea)
    if (c ** 2 === a ** 2 + b ** 2 || a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2) {
        alert("This is a right-angled triangle")
    }
}

// Task 6.
// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи.
// Зробити 2 способами через 2 різних умовних оператора.

// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

const date = new Date()

let nowHour = date.getHours()
let nowMinutes = date.getMinutes()
let nowSecond = date.getSeconds()
alert("Time now: " + nowHour + ":" + nowMinutes + ":" + nowSecond)
let result

if (nowHour >= 23) {
    alert("Доброї ночі")
} else if (nowHour < 5) {
    alert("Доброї ночі")
} else if (nowHour < 11) {
    alert("Доброго ранку")
} else if (nowHour < 17) {
    alert("Доброго дня!")
} else if (nowHour < 23) {
    alert("Доброго вечора !")
}
