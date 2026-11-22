// Q7 – Banking Application (Private Class Fields)

class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }

        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be greater than zero.");
        }

        this.#balance += amount;
        console.log(`Deposited: ₹${amount}`);
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero.");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance.");
        }

        this.#balance -= amount;
        console.log(`Withdrawn: ₹${amount}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(5000);

console.log(`Opening balance: ₹${account.getBalance()}`);

try {
    account.deposit(2000);
    console.log(`Balance after deposit: ₹${account.getBalance()}`);

    account.withdraw(1500);
    console.log(`Balance after withdrawal: ₹${account.getBalance()}`);

    // This withdrawal is intentionally invalid and is caught below.
    account.withdraw(10000);
} catch (error) {
    console.error("Transaction failed:", error.message);
}

console.log(`Final balance: ₹${account.getBalance()}`);

// #balance is private: account.#balance cannot be accessed outside the class.
