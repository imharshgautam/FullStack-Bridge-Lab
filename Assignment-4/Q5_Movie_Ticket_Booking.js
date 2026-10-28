// Q5: Movie Ticket Booking (Objects + RegExp)
"use strict";

const bookingForm = document.querySelector("#bookingForm");
let bookingInfo = null;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = bookingForm.elements.name.value.trim();
    const email = bookingForm.elements.email.value.trim();
    const seats = Number(bookingForm.elements.seats.value);
    const namePattern = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = [];

    if (!namePattern.test(name)) errors.push("Name must contain alphabets only (spaces, apostrophes, and hyphens are allowed).");
    if (!emailPattern.test(email)) errors.push("Enter a valid email address.");
    if (!Number.isInteger(seats) || seats < 1 || seats > 10) errors.push("Seats must be a whole number from 1 to 10.");

    document.querySelector("#bookingError").textContent = errors.join(" ");

    if (errors.length > 0) {
        document.querySelector("#ticket").textContent = "Booking not completed.";
        return;
    }

    bookingInfo = { name, email, seats };
    document.querySelector("#ticket").textContent =
        `BOOKING CONFIRMED\nName: ${bookingInfo.name}\nEmail: ${bookingInfo.email}\nSeats: ${bookingInfo.seats}`;
    console.log("Booking object:", bookingInfo);
});
