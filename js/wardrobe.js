// Wardrobe.js - Calvero Mc

const wardrobePanel = document.getElementById("panel-wardrobe");

// Example clothing items
const clothingItems = [
  { name: "black Tees", type: "top", price: "$3,00", image: "images/blackTees.png" },
  { name: "Black Jacket", type: "top", price: "$5,000", image: "images/BlackJacket.png" },
  { name: "tees", type: "top", price: "$3,000", image: "images/tees.png" },
  { name: " Hoodie", type: "top", price: "$4,500", image: "images/hoodie.png" },
  { name: "Chic Skirt", type: "top", price: "$3,000", image: "images/skirt1.png" },
  { name: "vintage Tees", type: "top", price: "$3,000", image: "images/vintageTees.png" }
];

// Build Wardrobe Grid
function buildWardrobe() {
  const grid = document.createElement("div");
  grid.classList.add("wardrobe-grid");

  clothingItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("clothing-card");

    // Image
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    card.appendChild(img);

    // Name & Price
    const name = document.createElement("p");
    name.innerText = item.name;
    name.classList.add("clothing-name");
    card.appendChild(name);

    const price = document.createElement("p");
    price.innerText = item.price;
    price.classList.add("clothing-price");
    card.appendChild(price);

    // Add to Avatar button
    const addBtn = document.createElement("button");
    addBtn.innerText = "Add to Avatar";
    addBtn.classList.add("add-btn");
    addBtn.onclick = () => addToAvatar(item);
    card.appendChild(addBtn);

    grid.appendChild(card);
  });

  wardrobePanel.appendChild(grid);
}

// Demo function for adding clothes
function addToAvatar(item) {
  alert(`${item.name} added to your avatar!`);
  // Later: integrate with 3D avatar clothing
}

// Initialize Wardrobe
document.addEventListener("DOMContentLoaded", buildWardrobe);
