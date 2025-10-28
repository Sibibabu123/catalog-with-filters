const products = [
  { id: 1, name: "Smartphone", category: "electronics", price: 699, image: "https://via.placeholder.com/250x150?text=Smartphone" },
  { id: 2, name: "Laptop", category: "electronics", price: 999, image: "https://via.placeholder.com/250x150?text=Laptop" },
  { id: 3, name: "T-shirt", category: "fashion", price: 29, image: "https://via.placeholder.com/250x150?text=T-shirt" },
  { id: 4, name: "Sofa", category: "home", price: 499, image: "https://via.placeholder.com/250x150?text=Sofa" },
  { id: 5, name: "Headphones", category: "electronics", price: 199, image: "https://via.placeholder.com/250x150?text=Headphones" },
  { id: 6, name: "Dress", category: "fashion", price: 89, image: "https://via.placeholder.com/250x150?text=Dress" },
  { id: 7, name: "Microwave", category: "home", price: 250, image: "https://via.placeholder.com/250x150?text=Microwave" },
];

const productList = document.getElementById("product-list");
const categorySelect = document.getElementById("category");
const priceRange = document.getElementById("price");
const priceValue = document.getElementById("priceValue");

function displayProducts(filteredProducts) {
  productList.innerHTML = "";
  if (filteredProducts.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filteredProducts.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p class="price">₹${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

function filterProducts() {
  const selectedCategory = categorySelect.value;
  const selectedPrice = parseInt(priceRange.value);

  const filtered = products.filter(p => {
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchPrice = p.price <= selectedPrice;
    return matchCategory && matchPrice;
  });

  displayProducts(filtered);
}

priceRange.addEventListener("input", () => {
  priceValue.textContent = `₹${priceRange.value}`;
  filterProducts();
});

categorySelect.addEventListener("change", filterProducts);

displayProducts(products);
