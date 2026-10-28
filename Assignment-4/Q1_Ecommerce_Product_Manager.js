// Q1: E-Commerce Product Manager (Classes + Objects)
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100.");
        }
        this.price -= this.price * (percent / 100);
    }

    displayDetails() {
        return `#${this.id} | ${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(1, "Wireless Headphones", 2499, "Electronics"),
    new Product(2, "Notebook", 120, "Stationery"),
    new Product(3, "Keyboard", 1599, "Electronics"),
    new Product(4, "Water Bottle", 799, "Lifestyle")
];

products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts priced above ₹1000:");
products
    .filter(product => product.price > 1000)
    .forEach(product => console.log(product.displayDetails()));
