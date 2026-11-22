// Q3 – Product Discount System (Constructor + Prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// A prototype method is shared by all Product instances.
Product.prototype.applyDiscount = function (percent) {
    if (typeof percent !== "number" || percent < 0 || percent > 100) {
        throw new Error("Discount must be a number between 0 and 100.");
    }

    // Return the discounted price without changing the original price.
    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 60000),
    new Product("Headphones", 3000),
    new Product("Keyboard", 1500)
];

const discounts = [10, 20, 15];

products.forEach((product, index) => {
    const discountedPrice = product.applyDiscount(discounts[index]);
    console.log(
        `${product.name}: Original = ₹${product.price}, ` +
        `Discount = ${discounts[index]}%, Final = ₹${discountedPrice.toFixed(2)}`
    );
});

// Abstraction: callers only need to provide a discount percentage.
// The calculation and validation details stay inside applyDiscount().
