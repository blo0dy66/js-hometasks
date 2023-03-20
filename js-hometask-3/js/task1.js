const array = [5, 3, 4, 5, 6, 7, 3];

const result = compact(array);
console.log(result);

function compact(arr) {
    // debugger
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }

    }
    return result
}



