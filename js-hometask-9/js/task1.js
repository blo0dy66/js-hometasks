// 9-1.
// Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, 
// потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.

$(document).ready(function () {
    $('h2.head').css('background-color', 'green');
    $('h2.head .inner').css('font-size', '35px');
});