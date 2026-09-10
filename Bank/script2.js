var balance = 10000;

function credit() {

    var amount = Number(document.getElementById("amount").value);

    if (amount > 0) {

        balance = balance + amount;

        document.getElementById("balance").innerHTML = balance;

        document.getElementById("message").innerHTML =
            "₹" + amount + " credited successfully.";

    }
    else {

        document.getElementById("message").innerHTML =
            "Please enter a valid amount.";
    }
}


function debit() {

    var amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {

        document.getElementById("message").innerHTML =
            "Please enter a valid amount.";

    }
    else if (amount > balance - 500) {

        document.getElementById("message").innerHTML =
            "Insufficient balance. Minimum balance of ₹500 is required.";

    }
    else {

        balance = balance - amount;

        document.getElementById("balance").innerHTML = balance;

        document.getElementById("message").innerHTML =
            "₹" + amount + " debited successfully.";
    }
}


function checkBal() {
	
document.getElementById("message").innerHTML =
            "₹" + balance + " is the available Bal";
}