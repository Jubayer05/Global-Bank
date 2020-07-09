//Submit button Event handler
document.getElementById("submit").addEventListener("click", function () {
  const transactionArea = document.querySelector("#transaction-area");
  transactionArea.style.display = "block";
  const login = document.querySelector("#login-area");
  login.style.display = "none";
});

//Deposit button Event handler
document.querySelector("#deposit-btn").addEventListener("click", function () {
  const depositNumber = getInputNumber("#depositAmount");

  updateSpanText("#totalDeposit", depositNumber);
  updateSpanText("#totalAmount", depositNumber);
  document.querySelector("#depositAmount").value = "";
});

//Deposit button Event handler
document.querySelector("#withdraw-btn").addEventListener("click", function () {
  const withdrawNumber = getInputNumber("#withdrawAmount");
  updateSpanText("#totalWithdraw", withdrawNumber);
  updateSpanText("#totalAmount", -1 * withdrawNumber);
  document.querySelector("#withdrawAmount").value = "";
});

//Functions
function getInputNumber(id) {
  const Amount = document.querySelector(id).value;
  const Number = parseFloat(Amount);
  return Number;
}

function updateSpanText(id, depositNumber) {
  const totalAmountNum = parseFloat(document.querySelector(id).innerText);
  const totalAmount = totalAmountNum + depositNumber;
  document.querySelector(id).innerText = totalAmount;
}
