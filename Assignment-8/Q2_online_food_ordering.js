// Q2 – Online Food Ordering (map + Error Handling)

const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Convert menu objects into a lookup map for quick validation.
    const menuByName = new Map(menu.map(item => [item.name.toLowerCase(), item]));

    // map() gets the price for every requested item.
    const priceList = orderItems.map(itemName => {
        const item = menuByName.get(itemName.toLowerCase());

        if (!item) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return item.price;
    });

    // reduce() adds all item prices to calculate the bill.
    return priceList.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Pizza", "Burger", "Pasta"];
    console.log("Order:", order.join(", "));
    console.log(`Total bill: ₹${calculateBill(order)}`);

    // Uncomment this example to test invalid-item error handling:
    // console.log(calculateBill(["Pizza", "Sushi"]));
} catch (error) {
    console.error("Unable to process your order:", error.message);
}
