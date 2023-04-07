// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true


function checkEmail(email) {
    re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

console.log(checkEmail("Qmail2@gmail.com")); // true