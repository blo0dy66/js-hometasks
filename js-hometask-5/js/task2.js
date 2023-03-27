function propsCount(currentObject) {
    // Отримуємо ключі об'єкту і повертаємо їх кількість
    return Object.keys(currentObject).length;
}


let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
};

console.log(propsCount(mentor)); // виведе 3