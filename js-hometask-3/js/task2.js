let arr = createArray(2, 9);

function createArray(start, end) {
    result = []
    for (let i = start; i <= end; i++) {
        result.push(i)
    }
    return result
}

console.log(arr); // [2,3,4,5,6,7,8,9]

