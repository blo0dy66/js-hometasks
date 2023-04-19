// 11-2.
// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. 
// Функція повинна повернути Promise, робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers, або повідомленням "Error! Incorrect array!" у випадку, 
// якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:
// calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
// calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"

async function calcArrProduct(arr) {
    let result = 1
    await new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) {
                reject(new Error('Error! Incorrect array!'))
            }
            result *= arr[i]
        }
        resolve()

    })
    return result;
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7, 12]).then(result => console.log(result));
// // "Error! Incorrect array!"
