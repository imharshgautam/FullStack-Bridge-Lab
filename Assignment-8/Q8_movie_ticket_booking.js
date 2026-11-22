// Q8 – Movie Ticket Booking System (Inheritance + Prototype Chain)

class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Add a method directly to the parent class prototype.
// OnlineTicket instances can access it through the prototype chain.
MovieTicket.prototype.printTicket = function () {
    console.log("----- MOVIE TICKET -----");
    console.log(`Movie: ${this.movieName}`);
    console.log(`Seat: ${this.seatNo}`);
    console.log(`Ticket price: ₹${this.price}`);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

const onlineTicket1 = new OnlineTicket("Interstellar", "A10", 250, 30);
const onlineTicket2 = new OnlineTicket("Inception", "B12", 220, 25);

[onlineTicket1, onlineTicket2].forEach(ticket => {
    ticket.printTicket(); // Inherited from MovieTicket.prototype.
    console.log(`Convenience fee: ₹${ticket.convenienceFee}`);
    console.log(`Total amount: ₹${ticket.getTotalAmount()}`);
    console.log("------------------------");
});

// Prototype lookup: onlineTicket -> OnlineTicket.prototype
// -> MovieTicket.prototype, where printTicket() is defined.
