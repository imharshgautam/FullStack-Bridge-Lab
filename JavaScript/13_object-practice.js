// Task:
// Create a movie booking object with:
// - customerName, movieName, ticketPrice, and quantity
// - a nested customer object with email and city
// - a seats array containing at least three seat numbers
// - a calculateTotalAmount() method
//
// Then:
// 1. Print movieName using dot notation.
// 2. Read the customer's city using nested property access.
// 3. Change the ticket price and add a bookingStatus property.
// 4. Print all object keys using Object.keys().
// 5. Destructure movieName and quantity.
// 6. Calculate and print the total booking amount.

const movieBooking = {
    customerName: "Harsh",
    movieName: "The Wild Robot",
    ticketPrice: 250,
    quantity: 3,
    customer: {
        email: "harsh@example.com",
        city: "Delhi"
    },
    seats: ["A1", "A2", "A3"],
    calculateTotalAmount() {
        return this.ticketPrice * this.quantity;
    }
};

// 1. Print the movie name using dot notation.
console.log(movieBooking.movieName);

// 2. Read the customer's city using nested property access.
console.log(movieBooking.customer.city);

// 3. Update the ticket price and add a booking status.
movieBooking.ticketPrice = 300;
movieBooking.bookingStatus = "Confirmed";

// 4. Print all object keys.
console.log(Object.keys(movieBooking));

// 5. Destructure the movie name and quantity.
const { movieName, quantity } = movieBooking;
console.log(movieName, quantity);

// 6. Calculate and print the total booking amount.
console.log(movieBooking.calculateTotalAmount());
