let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];



function funcName(arr) {
    let strings = []
    let numbers = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "string") {
            strings.push(arr[i])
        } else if (typeof (arr[i]) === "number") {
            numbers.push(arr[i])
        } else if (Array.isArray(arr[i])) {
            let subArrays = funcName(arr[i]);
            numbers.push(...subArrays[0]);
            strings.push(...subArrays[1]);
        }
    }
    return [numbers, strings]
}

let arrNew = funcName(arr);
console.log(arrNew)