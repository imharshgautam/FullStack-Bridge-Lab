// Q5 – Ride-Sharing Application

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance === "" ||
            !Number.isFinite(Number(this.distance)) ||
            Number(this.distance) < 0
        ) {
            throw new Error("Trip distance must be a valid non-negative number.");
        }

        const farePerKm = 12;
        const baseFare = 40;
        return baseFare + Number(this.distance) * farePerKm;
    }
}

const rider = new User("Ananya", 4.8);
const driver = new Driver("Rahul", 4.9, "Sedan", "UP85 AB 1234");
const trip = new Trip("GLA University", "Mathura Junction", 12);

console.log(`Rider: ${rider.name} (Rating: ${rider.rating})`);
console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle} (${driver.vehicleNumber})`);

try {
    console.log(`Trip: ${trip.fromLocation} → ${trip.toLocation}`);
    console.log(`Estimated fare: ₹${trip.calculateFare()}`);

    // Test validation by uncommenting either line:
    // const invalidTrip = new Trip("A", "B", -5);
    // console.log(invalidTrip.calculateFare());
} catch (error) {
    console.error("Unable to calculate trip fare:", error.message);
}
