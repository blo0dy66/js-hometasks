// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.

const select = document.querySelector(".mySelect")
const button = document.querySelector(".btn")
const removedItems = document.querySelector(".removedItems");

button.addEventListener("click", removeSelect)

function removeSelect() {
    const selectedOption = select.options[select.selectedIndex];
    select.removeChild(selectedOption);
    const removedItemText = selectedOption.text;
    const removedItem = document.createElement("span");
    removedItem.textContent = removedItemText;
    removedItems.appendChild(removedItem);

    removedItem.addEventListener("click", () => {
        const newOption = document.createElement("option");
        newOption.value = removedItemText.toLowerCase();
        newOption.textContent = removedItemText;
        select.appendChild(newOption);
        removedItems.removeChild(removedItem);
    });
}
