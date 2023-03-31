const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const priceOutput = document.getElementById("outprice");
const shoeImage = document.querySelectorAll('.shoe')

function updatePrice() {
    const selectedSize = document.querySelector(".size.active");
    const selectedColor = document.querySelector(".color.active");
    const price = parseInt(selectedColor.getAttribute("data-price")) + parseInt(selectedSize.getAttribute("data-price"));
    priceOutput.textContent = '$' + price;
    priceOutput.setAttribute("data-price", price);
}

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", () => {
        for (let j = 0; j < colors.length; j++) {
            colors[j].classList.remove("active");
        }
        colors[i].classList.add("active");
        shoeImage.forEach((img) => {
            if (img.getAttribute('color') === colors[i].getAttribute('color')) {
                img.classList.add('show');
            } else {
                img.classList.remove('show');
            }
        });
        updatePrice();
    });
}

sizes.forEach((size) => {
    size.addEventListener("click", () => {
        sizes.forEach((s) => s.classList.remove("active"));
        size.classList.add("active");
        updatePrice();
    });
});

const quantityInput = document.querySelector('#quantity-input');


function updatePriceQuant() {
    const selectedSize = document.querySelector(".size.active");
    const selectedColor = document.querySelector(".color.active");
    const price = parseInt(selectedColor.getAttribute("data-price")) + parseInt(selectedSize.getAttribute("data-price"));
    const quantity = parseInt(quantityInput.value);
    const totalPrice = quantity * price;
    priceOutput.textContent = '$' + totalPrice;
    if (quantity === 0) {
        priceOutput.textContent = '$' + price;
    } else {
        priceOutput.textContent = '$' + totalPrice;
    }
}

quantityInput.addEventListener('input', () => {
    updatePriceQuant();
});