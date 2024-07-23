const btnCount = document.querySelector("#calculateTip");
function calculateTotal() {
  const billAmount = parseFloat(document.querySelector("#bill").value);
  const tipPercentage = parseInt(document.querySelector("#tip").value);
  console.log(billAmount, tipPercentage);
  if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
    alert("Wprowadź poprawne wartości");
  } else {
    let totalAmount = billAmount + billAmount * (tipPercentage / 100);
    document.querySelector("#total").textContent =
      totalAmount.toFixed(2) + " zł";
  }
}
btnCount.addEventListener("click", calculateTotal);
