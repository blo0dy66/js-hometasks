// Get DOM elements
const itemList = document.getElementById("item-list");
const addItemForm = document.getElementById("add-item-form");
const itemNameInput = document.getElementById("item-name-input");
const itemPriceInput = document.getElementById("item-price-input");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const itemImageInput = document.getElementById("item-image-input");


addItemForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('image', event.target['item-image-input'].files[0]);

  const response = await fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: "Client-ID d71a53405a310f0",
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload image to Imgur.");
  }

  // Handle response from server here
});

// Initialize items array
let items = [];

// Add item event listener
addItemForm.addEventListener("submit", addItem);

// Search input event listener
searchInput.addEventListener("input", searchItems);

// Sort select event listener
sortSelect.addEventListener("change", sortItems);

// Load items from localStorage
loadItems();

// Render items list
renderItems();

async function addItem(event) {
  event.preventDefault();

  // Get item values from form inputs
  const itemName = itemNameInput.value;
  const itemPrice = parseFloat(itemPriceInput.value);
  const itemImage = itemImageInput.files[0];

  // Validate item name and price
  if (!itemName || isNaN(itemPrice) || itemPrice <= 0) {
    alert("Please enter a valid name and price for the item.");
    return;
  }

  // Validate item image
  if (!(itemImage instanceof File) || itemImage.size > 5000000) {
    alert("Please upload a valid image that is less than 5MB in size.");
    return;
  }

  try {
    // Upload image to Imgur
    const formData = new FormData();
    formData.append("image", itemImage);
    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: "Client-ID d71a53405a310f0",
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image to Imgur.");
    }

    const result = await response.json();
    const imageUrl = result.data.link;

    // Create new item object
    const newItem = { name: itemName, price: itemPrice, image: imageUrl };

    // Add new item to items array
    items.push(newItem);

    // Save items to localStorage
    saveItems();

    // Clear form inputs
    itemNameInput.value = "";
    itemPriceInput.value = "";
    itemImageInput.value = null;

    // Render updated items list
    renderItems();
  } catch (error) {
    console.error(error);
    alert("An error occurred while adding the item. Please try again later.");
  }
}

function searchItems() {
  // Get search query from input
  const searchQuery = searchInput.value.trim().toLowerCase();

  // Filter items by search query
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery)
  );

  // Render filtered items list
  renderItems(filteredItems);
}

function sortItems() {
  // Get sort option from select
  const sortOption = sortSelect.value;

  // Sort items array by sort option
  items.sort((a, b) => (a[sortOption] > b[sortOption] ? 1 : -1));

  // Render sorted items list
  renderItems();
}

function renderItems(filteredItems = items) {
  // Clear items list
  itemList.innerHTML = "";

  // Render each item as a card
  filteredItems.forEach(item => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const nameElement = document.createElement("h3");
    nameElement.innerText = item.name;
    cardElement.appendChild(nameElement);

    const priceElement = document.createElement("p");
    priceElement.innerText = `$${item.price}`;
    cardElement.appendChild(priceElement);

    const imgElement = document.createElement("img");
    if (item.image instanceof Blob) {
      imgElement.src = URL.createObjectURL(item.image);
    } else {
      imgElement.src = item.image;
    }
    imgElement.alt = item.name;
    cardElement.appendChild(imgElement);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => deleteItem(item));
    cardElement.appendChild(deleteButton);

    itemList.appendChild(cardElement);
  });
}

function saveItems() {
  localStorage.setItem("items", JSON.stringify(items));
}

function loadItems() {
  const storedItems = localStorage.getItem("items");
  if (storedItems) {
    items = JSON.parse(storedItems);
  }
}

function deleteItem(item) {
  // Find index of item to remove
  const index = items.findIndex(i => i.name === item.name && i.price === item.price);

  // Revoke temporary URL created for image
  URL.revokeObjectURL(item.image);

  // Remove item from items array
  items.splice(index, 1);

  // Save items to localStorage
  saveItems();

  // Re-render items list
  renderItems();
}
