const list = document.getElementById('list')

const first = list.firstElementChild.innerHTML
const second = list.lastElementChild.innerHTML
const third = list.firstElementChild.nextElementSibling.innerHTML
const fourth = list.children[3].innerHTML
const fifth = list.children[2].innerHTML


alert(first + ', ' + second + ', ' + third + ', ' + fourth + ', ' + fifth);