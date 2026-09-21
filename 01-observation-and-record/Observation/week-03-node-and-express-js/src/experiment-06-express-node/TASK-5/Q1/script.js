// Get HTML elements
const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

// Function to calculate total price
function calculateTotal() {
    const product = productName.value;
    const qty = Number(quantity.value);
    const itemPrice = Number(price.value);

    // Validation
    if (product.trim() === "") {
        result.textContent = "Please enter a product name.";
        return;
    }

    if (qty <= 0 || itemPrice < 0) {
        result.textContent = "Please enter valid quantity and price.";
        return;
    }

    // Calculate total
    const total = qty * itemPrice;

    // Display result
    result.textContent = `Total Price of ${product}: ₹${total.toFixed(2)}`;
}

// Button click event
calculateBtn.addEventListener("click", calculateTotal);

// Update total when quantity changes
quantity.addEventListener("input", calculateTotal);

// Update total when price changes
price.addEventListener("input", calculateTotal);
