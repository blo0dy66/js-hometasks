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
    let p = (a + b + c) / 2 // half of perimeter
    let triangleArea = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3)
    alert("Triangle area is " + triangleArea)
    if (c ** 2 === a ** 2 + b ** 2 || a ** 2 === b ** 2 + c ** 2 || b ** 2 === a ** 2 + c ** 2) {
        alert("This is a right-angled triangle")
    }
}