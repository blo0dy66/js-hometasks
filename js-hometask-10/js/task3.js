// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.

function mul(...numbers) {
    let result = 0;
    for (let num of numbers) {
        if (typeof num === 'number') {
            if (result === 0) {
                result = 1;
            }
            result *= num;
        }
    }
    return result;
}



console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0