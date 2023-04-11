// Get DOM elements
const itemList = document.querySelector(".item-list");
const createNewItemButton = document.querySelector('.header__create-page-modal')
const searchInput = document.querySelector('.header__search-input')
const searchButton = document.querySelector('.header__search-btn')
const cancelButton = document.querySelector('.header__search-cancel-btn')
const countVolumeButton = document.querySelector('.manage-count-btn')
const createItem = document.getElementById('create-modal');
// const editItem


// DOM 
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const itemImageInput = document.getElementById("item-image-input");

// DOM MODAL
const closeModalButton = document.querySelector('.modal__close-btn')

createNewItemButton.addEventListener('click', (event) => {
  event.preventDefault();
  createItem.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  createItem.style.display = 'none';
});

document.addEventListener('mousedown', (event) => {
  if (event.target === createItem) {
    createItem.style.display = 'none';
  }
});