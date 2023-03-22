function sumSliceArray(arr, first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
        throw new Error("Введіть числові значення")
    }

    if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
        throw new Error("Індекс виходить за межі масиву");
    }

    let sum = 0
    for (let i = first; i <= second; i++) {
        sum += arr[i]
    }
    return sum
}


const arr = [1, 2, 3, 4, 5];
try {
    const result = sumSliceArray(arr, 1, 3); // повинно повернути 9 (2 + 3 + 4)
    console.log(result);
} catch (e) {
    console.error(e.message);
}