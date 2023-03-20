// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.


function randArray(k) {
    result = []
    for (let i = 0; i < k; i += 1) {
        result.push(Math.ceil(Math.random(k[i]) * 500))
    }
    return result
}



const randomArray = randArray(Math.ceil(Math.random() * 10))

console.log(randomArray)