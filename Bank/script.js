var balance = 10000;

function credit() {

    var amount = Number(document.getElementById("amount").value);

    balance = balance + amount;

    document.getElementById("balance").innerHTML = balance;

    document.getElementById("message").innerHTML =
        "Amount credited successfully.";
}


function debit() {

    var amount = Number(document.getElementById("amount").value);

    if (amount <= balance) {

        balance = balance - amount;

        document.getElementById("balance").innerHTML = balance;

        document.getElementById("message").innerHTML =
            "Amount debited successfully.";

    }
    else {

        document.getElementById("message").innerHTML =
            "Insufficient balance.";
    }
}