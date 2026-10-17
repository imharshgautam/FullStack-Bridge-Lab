// Q6. Progressive Discount System

// Change this amount to test different discount tiers.
const originalTotal = 6500;
let discountPercentage;

// Select the highest discount tier that applies.
if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = originalTotal * (discountPercentage / 100);
const finalPrice = Math.round(originalTotal - discountAmount);

console.log(`Original total: ₹${Math.round(originalTotal)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price after discount: ₹${finalPrice}`);
