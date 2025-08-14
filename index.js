const calculateButton = document.getElementById("calculate");

function calculateTotal() {
    const billAmount = Number(document.getElementById("bill").value);
    const tipPercentage = Number(document.getElementById("tip").value);

    // Check for invalid input
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for bill and tip.");
        return;
    }

    const total = billAmount + (billAmount * tipPercentage / 100);

    document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}
calculateButton.addEventListener("click", calculateTotal);
