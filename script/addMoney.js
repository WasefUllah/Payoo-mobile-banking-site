document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValueByID("amount");
  const pin = getInputValueByID("PIN");
  const mainBalance = getInnerTextByID("mainBalance");
  const bank = document.getElementById("allBank").value;
  console.log(bank);
  const phoneNumber = document.getElementById("phoneNumber").value;
  if (amount < 0) {
    alert("Negative amount is not allowed");
    return;
  }
  if (amount) {
    if (pin) {
      if (pin === 1234) {
        const sum = amount + mainBalance;
        setInnerTextByIDAndValue("mainBalance", sum);
        updateTransactionHistory(amount, phoneNumber, bank, "Added");

        document.getElementById("amount").value = "";
        document.getElementById("PIN").value = "";
        alert("Amount added successfully");
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
