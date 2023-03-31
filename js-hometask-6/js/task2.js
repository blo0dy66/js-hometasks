const h1 = document.getElementsByTagName('h1')[0]
const header = h1.style.backgroundColor = 'green';


const myDiv = document.getElementById('myDiv')
const firstParagraph = myDiv.firstElementChild
firstParagraph.innerHTML = '<b>' + firstParagraph.innerHTML + '</b>';

const secondParagraph = myDiv.firstElementChild.nextElementSibling
secondParagraph.style.color = 'red'

const thirdParagraph = myDiv.children[2]
thirdParagraph.innerHTML = '<u>' + thirdParagraph.innerHTML + '</u>';

const fourthParagraph = myDiv.lastElementChild
fourthParagraph.innerHTML = '<i>' + fourthParagraph.innerHTML + '</i>'

const myList = document.querySelector('#myList')
const listItems = myList.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.display = 'inline-block'
}

const invisible = document.getElementsByTagName('span')
// invisible.style.display = 'none'

for (let i = 0; i < invisible.length; i++) {
    invisible[i].style.display = 'none'
}