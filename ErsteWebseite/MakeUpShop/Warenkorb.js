const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const cartItemsContainer = document.querySelector(".cart-items");

cartItems.forEach(item => {
    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
        <p>${item.name}</p>
        <p class="price">$${item.price.toFixed(2)}</p>
    `;
    cartItemsContainer.appendChild(itemElement);
});

const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
const totalPriceElement = document.createElement("p");
totalPriceElement.classList.add("total-price");
totalPriceElement.textContent = `Gesamtpreis: $${totalPrice.toFixed(2)}`;
cartItemsContainer.appendChild(totalPriceElement);