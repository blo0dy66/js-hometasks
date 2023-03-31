// 3. 
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   <main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body>

const body = document.querySelector('body')

const main = document.createElement('main')
main.setAttribute('class', 'mainClass check item')

const div = document.createElement('div')
div.setAttribute('id', 'myDiv')

const p = document.createElement('p')
const text = document.createTextNode('First paragraph')
p.appendChild(text);

// Додавання <p> в <div>, а <div> в <main>
div.appendChild(p);
main.appendChild(div);

// Додавання <main> в <body>
body.appendChild(main);