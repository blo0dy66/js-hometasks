
const date = new Date()
let nowHour = date.getHours()
let nowMinutes = date.getMinutes()
let nowSecond = date.getSeconds()
alert("Time now: " + nowHour + ":" + nowMinutes + ":" + nowSecond)


if (nowHour >= 23) {
    alert("Доброї ночі")
} else if (nowHour < 5) {
    alert("Доброї ночі")
} else if (nowHour < 11) {
    alert("Доброго ранку")
} else if (nowHour < 17) {
    alert("Доброго дня!")
} else if (nowHour < 23) {
    alert("Доброго вечора !")
}


// 2nd

// switch (true) {
//     case (nowHour >= 23):
//         alert("Доброї ночі");
//         break;
//     case (nowHour < 5):
//         alert("Доброї ночі");
//         break;
//     case (nowHour < 11):
//         alert("Доброго ранку");
//         break;
//     case (nowHour < 17):
//         alert("Доброго дня!");
//         break;
//     case (nowHour < 23):
//         alert("Доброго вечора !");
//         break;
//     default:
//         alert("Невірний час доби");
// }