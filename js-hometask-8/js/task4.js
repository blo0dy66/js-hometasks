// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function validateCardNumber(cardNumber) {
    const regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
}

console.log(validateCardNumber("9999-9999-9999-9999"));
console.log(validateCardNumber("1233-456-789")); 