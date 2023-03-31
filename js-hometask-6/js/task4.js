// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock


const button = document.querySelector('.btn');
const out = document.querySelector('.out');
const arr = document.querySelectorAll('.arr');

button.addEventListener('click', function () {
    const arrData = [];

    for (let i = 0; i < arr.length; i++) {
        const name = arr[i].getAttribute('name');
        const value = arr[i].value;
        arrData.push(`${name}: ${value}`);
    }

    out.textContent = arrData.join('\n');
});