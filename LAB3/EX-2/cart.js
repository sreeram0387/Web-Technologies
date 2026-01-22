let cart = [];
let discount = 0;

// ===== Add Item =====
function addItem() {
    const name = document.getElementById("name").value;
    const price = Number(document.getElementById("price").value);
    const qty = Number(document.getElementById("qty").value);
    const category = document.getElementById("category").value;

    if (!name || price <= 0 || qty <= 0) return;

    cart.push({ name, price, qty, category });
    updateCart();
}

// ===== Remove Item =====
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// ===== Coupon Validation =====
function applyCoupon() {
    const code = document.getElementById("coupon").value.trim().toUpperCase();

    if (code.startsWith("SAVE10")) discount = 0.10;
    else if (code.includes("BIG")) discount = 0.20;
    else discount = 0;

    updateCart();
}

// ===== Discount Logic =====
function calculateDiscount(item) {
    let itemTotal = item.price * item.qty;

    // Bulk discount
    if (item.qty >= 5) itemTotal *= 0.9;

    // Category discount
    if (item.category === "electronics") itemTotal *= 0.95;

    return itemTotal;
}

// ===== Update Cart UI =====
function updateCart() {
    let cartDiv = document.getElementById("cartItems");
    let total = 0;
    cartDiv.innerHTML = "";

    cart.forEach((item, index) => {
        let itemPrice = calculateDiscount(item);
        total += itemPrice;

        cartDiv.innerHTML += `
            <div class="item">
                ${item.name} (${item.qty}) - ₹${itemPrice.toFixed(2)}
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    // Apply coupon discount
    total = total - total * discount;

    // Time-based discount (evening)
    const hour = new Date().getHours();
    if (hour >= 18 && hour <= 21) total *= 0.95;

    document.getElementById("totalPrice").innerText =
        "Total: ₹" + total.toFixed(2);
}
