// Task 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data // 5
let maxCount = 0
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++;
        }
    }
    if (count > maxCount) {
        maxCount = count;
        data = arr[i];
    }
}

arr = arr.filter(num => num !== data);

console.log(data); // 5
console.log(arr); // [4, 2, 1, 6, 3, 2]
