let products = JSON.parse(localStorage.getItem("produceList")) || [];
let cart = [];

const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

products.forEach((prod, index) => {
  let div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${prod.img}" alt="${prod.name}">
    <h3>${prod.name}</h3>
    <p>₹${prod.price} per kg</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  productList.appendChild(div);
});

function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += parseFloat(item.price);
  });
  totalPrice.textContent = total.toFixed(2);
}
