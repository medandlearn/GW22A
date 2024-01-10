const cartLink = document.getElementById("cart-link");
const productContainers = document.querySelectorAll(".product");
const cartItems = [];

// hier wird der Inhalt für den Warenkorb vorbereitet.
function addToCart(productName, productPrice) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <p>${productName}</p>
        <p class="price">$${productPrice.toFixed(2)}</p>
    `;
    // cartContainer.appendChild(cartItem);

    cartItems.push({ name: productName, price: productPrice });
}

productContainers.forEach(productContainer => {
    const addToCartButton = productContainer.querySelector(".add-to-cart");
    const productName = productContainer.getAttribute("data-name");
    const productPrice = parseFloat(productContainer.getAttribute("data-price"));

    addToCartButton.addEventListener("click", () => {
        addToCart(productName, productPrice);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        const cartItemCount = cartItems.length;
        cartLink.textContent = `Warenkorb (${cartItemCount})`;
    });
});

// Folgender Code bezieht sich auf den Kontext Warenkorb HTML

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.href.indexOf('Warenkorb.html') !== -1) {
        console.log("Dies ist die Seite Warenkorb.html");
        const cartContainer = document.querySelector(".cart-items");

        // Warenkorbinhalte aus dem localStorage abrufen
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Überprüfen, ob Warenkorb-Elemente vorhanden sind
        if (savedCartItems.length > 0) {
            savedCartItems.forEach(item => {
                const cartItemElement = document.createElement("div");
                cartItemElement.classList.add("cart-item");
                cartItemElement.innerHTML = `
                    <p>${item.name}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                `;
                cartContainer.appendChild(cartItemElement);
            });
        } else {
            cartContainer.innerHTML = "<p>Der Warenkorb ist leer.</p>";
        }
    }
});












