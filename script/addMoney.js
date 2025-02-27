document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = getInputValueByID('amount');
  const pin = getInputValueByID('PIN');
  const mainBalance = getInnerTextByID('mainBalance');

  if (amount) {
    if (pin) {
      if (pin=== 1234) {
        const sum = amount + mainBalance;
        setInnerTextByIDAndValue('mainBalance', sum);
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
