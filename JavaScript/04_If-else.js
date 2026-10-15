// if a person age is greater than 18 then he is eligible for voting otherwise not
// if the ticked qty is more than 3 then the person is eligible for discount otherwise not if eliible then 50 rupees off on the total bill
// 1 ticket = 100 rupees.




let age = 5;
if(age > 18){
    console.log("You are eligible for Booking");
}else{
    console.log("You are not eligible for Booking");
}

let ticketQty = 2;
let ticketPrice = 100;
let totalBill = ticketQty * ticketPrice;

if(ticketQty >= 3){
    console.log("You are eligible for discount");
    totalBill -= 50;
    console.log("Your total bill is: " + totalBill);
}else{
    console.log("You are not eligible for discount");
    console.log("Your total bill is: " + totalBill);
}






