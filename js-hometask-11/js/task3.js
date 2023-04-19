// Створіть наступний асинхронний ланцюжок promise:
// new Promise(function (resolve, reject) {
//    // Запитуємо у користувача number за допомогою prompt()
//    // Якщо користувач ввів не число - викликаємо reject()
//    // Якщо користувач ввів число- викликаємо resolve(number)
// }).catch(function (error) {
//    return new Promise(function (resolve, reject) {
//       // Запитуємо у користувача number, до тих пір, поки він його не введе
//       // Після вводу числа - викликаємо resolve(number)
//    });
// }).then(function (result) {
//    // Вивід number у консоль
// });

new Promise(function (resolve, reject) {
    let number = prompt("Please enter a number");
    if (isNaN(number)) {
        reject(new Error("Invalid input. Please enter a number"));
    } else {
        resolve(parseInt(number));
    }
}).catch(function (error) {
    console.log(error.message);
    return new Promise(function (resolve, reject) {
        let number = prompt("Please enter a number");
        while (isNaN(number)) {
            number = prompt("Invalid input. Please enter a number");
        }
        resolve(parseInt(number));
    });
}).then(function (result) {
    console.log(result);
});