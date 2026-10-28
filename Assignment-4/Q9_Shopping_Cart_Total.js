// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity = 1) {
        if (typeof name !== "string" || name.trim() === "") {
            throw new TypeError("Item name is required.");
        }
        if (!Number.isFinite(price) || price < 0) {
            throw new RangeError("Price must be a non-negative number.");
        }
        if (!Number.isInteger(quantity) || quantity < 1) {
            throw new RangeError("Quantity must be a positive integer.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(couponCode) {
        // Accepted examples: SAVE20 and DISC10. Number is interpreted as percentage.
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(couponCode.trim().toUpperCase());
        if (!match) {
            throw new Error("Invalid coupon format. Use a code like SAVE20 or DISC10.");
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1% and 100%.");
        }

        const subtotal = this.getTotal();
        const discount = subtotal * (discountPercent / 100);
        return {
            subtotal,
            coupon: couponCode.toUpperCase(),
            discountPercent,
            discount,
            finalTotal: subtotal - discount
        };
    }
}

const cart = new Cart();
cart.addItem("Wireless Headphones", 2499, 1);
cart.addItem("Notebook", 120, 3);
cart.addItem("Keyboard", 1599, 1);

console.log("Shopping Cart");
console.log("-------------");
cart.items.forEach(item => {
    console.log(`${item.name}: ₹${item.price.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`);
});
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);

const couponCode = "SAVE20"; // Try DISC10 or an invalid code to test validation.
try {
    const summary = cart.applyCoupon(couponCode);
    console.log(`Coupon: ${summary.coupon} (${summary.discountPercent}% off)`);
    console.log(`Discount: ₹${summary.discount.toFixed(2)}`);
    console.log(`Final total: ₹${summary.finalTotal.toFixed(2)}`);
} catch (error) {
    console.log(`Coupon error: ${error.message}`);
}
