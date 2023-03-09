// 2 task:
console.log("Protsiv");

// 3 task:
let myAge = 20
let myNextAge = 21
console.log("My age is " + myAge);
console.log("My next age is " + myNextAge);
let myAgeCopy = myAge;
console.log("Copy: " + myAgeCopy);

// 4 task:

let myObject = {
    String: "Source 2", // рядок
    Number: 2023, // число
    Boolean: true, // булеве значення true false 
    Undefined: undefined, // не визначено
    Null: null, // порожнє значення
}

// 5 task:
let isAdult = confirm("Are you adult?");
console.log(isAdult);

// 6 task:
let myName = "Andrew";
let mySurname = "Protsiv";
let myStudyGroup = 749;
let myBirthYear = "2003";
let isMarried = false;
console.log(typeof myName, typeof mySurname, typeof myStudyGroup, typeof myBirthYear, typeof isMarried);
let hasJob = null;
let myUndefined;
console.log("Null type is " + typeof hasJob, ", undefined type is " + typeof myUndefined)

// 7 task:

let yourLogin = prompt("Write your login there")
let yourMail= prompt("Write your mail there")
let yourPassword = prompt("Write your password there")
alert("Dear " + yourLogin + ", your mail is " + yourMail + " and your password is " + yourPassword )

// 8 task:
// Кількість секунд в годині = 60 хв * 60, в одному дні = 1 годину * 24, в місяці = 1 день * 31

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInMonth = 31;

const secondsInHour = secondsInMinute * minutesInHour;
const secondsInDay = secondsInHour * hoursInDay;
const secondsInMonth = hoursInDay * daysInMonth;
alert("Hello. You have " + secondsInHour + " seconds in hour, " + secondsInDay + " seconds in day and " + secondsInMonth + " seconds in month(31 days)")

// 9 task


