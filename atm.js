let balance = 1000; // Initial balance

function checkBalance() {
    alert("Your balance is: $" + balance);
}

function withdrawMoney() {
    let amount = prompt("Enter the amount to withdraw:");
    amount = parseFloat(amount);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert("Successfully withdrawn $" + amount + "\nRemaining balance: $" + balance);
    } else {
        alert("Invalid amount or insufficient balance.");
    }
}

function depositMoney() {
    let amount = prompt("Enter the amount to deposit:");
    amount = parseFloat(amount);
    if (amount > 0) {
        balance += amount;
        alert("Successfully deposited $" + amount + "\nTotal balance: $" + balance);
    } else {
        alert("Invalid amount.");
    }
}

function displayMenu() {
    let choice;
    do {
        choice = prompt("Select an option:\n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Exit");
        switch (choice) {
            case "1":
                checkBalance();
                break;
            case "2":
                withdrawMoney();
                break;
            case "3":
                depositMoney();
                break;
            case "4":
                alert("Thank you for using the ATM. Goodbye!");
                break;
            default:
                alert("Invalid choice. Please try again.");
        }
    } while (choice !== "4");
}

// Start the ATM
displayMenu();
