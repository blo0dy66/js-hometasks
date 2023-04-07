// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 

function upperCase(str) {
    let regExp = /^[A-Z]/
    if (regExp.test(str)) {
        return "String's starts with uppercase character"
    } else {
        return "String's not starts with uppercase character"
    }
}






console.log(upperCase('regexp')); 
console.log(upperCase('Regexp')); 

