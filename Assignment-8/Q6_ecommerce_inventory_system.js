// Q6 – E-Commerce Inventory System (filter, sort, reduce)

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 4 },
    { id: 2, name: "Phone", category: "Electronics", price: 25000, stock: 12 },
    { id: 3, name: "Desk", category: "Furniture", price: 8000, stock: 3 },
    { id: 4, name: "Chair", category: "Furniture", price: 4500, stock: 9 },
    { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 30 },
    { id: 6, name: "Pen", category: "Stationery", price: 20, stock: 5 }
];

function getLowStockProducts(productList, stockLimit = 5) {
    return productList.filter(product => product.stock < stockLimit);
}

function sortProductsByPrice(productList) {
    // Copy first so the original array order is not modified.
    return [...productList].sort((productA, productB) => productA.price - productB.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products (stock < 5):");
console.table(getLowStockProducts(products));

console.log("Products sorted by price (low to high):");
console.table(sortProductsByPrice(products));

console.log(`Total inventory value: ₹${calculateTotalInventoryValue(products)}`);

console.log("Products grouped by category:");
console.log(groupByCategory(products));
