fetch("http://localhost:5000/api/products")
.then(res => res.json())
.then(data => {
    let container = document.getElementById("products");

    data.forEach(p => {
        container.innerHTML += `
            <div>
                <h3>${p.name}</h3>
                <p>${p.price} EGP</p>
                <img src="${p.image}" width="100"/>
                <button onclick="addToCart('${p._id}')">Add to Cart</button>
            </div>
        `;
    });
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}
