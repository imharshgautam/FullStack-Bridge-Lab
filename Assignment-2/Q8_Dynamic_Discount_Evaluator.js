// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

console.log("Cart Summary");
console.log("------------");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discount = product.price * discountRate;
    const finalPrice = product.price - discount;
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: ₹${product.price.toFixed(2)} | ` +
        `Discount: ${(discountRate * 100).toFixed(0)}% | ` +
        `Price after discount: ₹${finalPrice.toFixed(2)}`
    );
}

// Apply an additional 5% discount if the original cart value exceeds ₹50,000.
let extraDiscount = 0;
if (originalTotal > 50000) {
    extraDiscount = discountedTotal * 0.05;
    discountedTotal -= extraDiscount;
}

console.log(`Original cart total: ₹${originalTotal.toFixed(2)}`);
console.log(`Extra overall discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final total: ₹${discountedTotal.toFixed(2)}`);
