// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

const button = document.querySelector('.btn');
const buttonClear = document.querySelector('.btnclear');
const actionDiv = document.querySelector('.action');


button.addEventListener('click', () => setText('I was pressed!'));
button.addEventListener('mouseover', () => setText('Mouse on me!'));
button.addEventListener('mouseout', () => setText('Mouse is not on me!'));
buttonClear.addEventListener('click', clearFunc);

function setText(text) {
    actionDiv.innerHTML += `${text}<br>`;
}

function clearFunc() {
    actionDiv.innerHTML = ''
}