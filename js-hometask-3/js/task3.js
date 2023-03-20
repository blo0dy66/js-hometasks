// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
function view(a, b) {
    for (let i = a; i < b; i++) {
        console.log(String(i).repeat(i - a + 1))
    }

}

view(3, 15)
