// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.


const div = document.querySelector('.main');
const firstButton = document.querySelector('.makeblue');
const secondButton = document.querySelector('.makepink');
const thirdButton = document.querySelector('.makebrown');
const link = document.querySelector("a");

firstButton.addEventListener("click", makeBlue);
secondButton.addEventListener("dblclick", makePink);
thirdButton.addEventListener("mousedown", makeBrown);
thirdButton.addEventListener("mouseup", makeWhite);
link.addEventListener("mouseover", makeYellow);
link.addEventListener("mouseout", makeWhite);

function makeBlue() {
    div.style.backgroundColor = '#0000FF';
}

function makePink() {
    div.style.backgroundColor = "#FFC0CB";
}

function makeBrown() {
    div.style.backgroundColor = "#A52A2A";
    div.style.color = "#FFFFFF";
}

function makeWhite() {
    div.style.backgroundColor = "#FFFFFF";
    div.style.color = "#000000";
}

function makeYellow() {
    div.style.backgroundColor = "#FFFF00";
}