document.getElementById("cashOut").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValueByID("cashOutAmount");
  const pin = getInputValueByID("CashOutPIN");
  const mainBalance = getInnerTextByID("mainBalance");
  const phoneNumber = document.getElementById("CashOutPhoneNumber").value;
  if (amount) {
    if (pin) {
      if (pin === 1234) {
        if (amount < mainBalance) {
          const sum = mainBalance - amount;
          setInnerTextByIDAndValue("mainBalance", sum);
          updateTransactionHistoryFromCashOut(amount, phoneNumber, "Cashed out");
          document.getElementById("cashOutAmount").value = "";
          document.getElementById("CashOutPIN").value = "";
          alert("Cashed out successfully");
        } else {
          alert(`Don't have enough money to cash out, please add money`);
        }
      } else {
        alert("PIN is 1234");
      }
    } else {
      alert("Enter PIN");
    }
  } else {
    alert("Enter amount");
  }
});
