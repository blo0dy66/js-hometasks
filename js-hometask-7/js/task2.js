// Для заданої HTML-сторінки:

// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: 
// колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

const button = document.querySelector('.btn')
const buttonClear = document.querySelector('.btnclear')
const p = document.querySelector('#text')
button.addEventListener('click', changeCSS)
buttonClear.addEventListener('click', styleClear)

function changeCSS() {
    p.style.color = 'orange'
    p.style.fontSize = '20px'
    p.style.fontFamily = 'Comic Sans MS'
}

function styleClear() {
    p.style.cssText = '';

}