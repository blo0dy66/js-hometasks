// 11-1.
// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і цілочисельне значення затримки delay (в мс) і 
// повертає Promise, який чекає задану кількість часу (використовуючи аргумент delay) і завершується повідомленням message.
// Приклад застосування функції:
// getPromise("test promise", 2000).then(function(data) {
//     console.log(data);        
// });

async function getPromise(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    return message;
}


async function testPromise() {
    const data = await getPromise("test promise", 5000);
    console.log(data);
}

testPromise();