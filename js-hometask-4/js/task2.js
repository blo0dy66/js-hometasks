function checkAge() {
    try {
        const name = prompt("Введіть своє ім'я");
        const age = prompt("Введіть свій вік");
        const status = prompt("Введіть свій статус: admin, moderator or user");

        if (age === "" || name === "" || status === "") {
            throw new Error("The field is empty! Please enter your age");
        }

        const ageNum = Number(age);
        if (isNaN(ageNum)) {
            throw new TypeError("Age should be a number");
        }

        if (ageNum < 18 || ageNum > 70) {
            throw new RangeError("Age should be between 18 and 70");
        }

        if (status !== "admin" && status !== "moderator" && status !== "user") {
            throw new EvalError("Invalid status");
        }

        alert("Ви можете переглянути фільм!");
    } catch (error) {
        alert(`Помилка: ${error.name}. ${error.message}`);
    }
}
checkAge()