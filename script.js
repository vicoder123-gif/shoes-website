let cartCount = 0;

function addToCart(productName) {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    let li = document.createElement("li");
    li.innerText = productName;

    document.getElementById("cart-items").appendChild(li);
}
