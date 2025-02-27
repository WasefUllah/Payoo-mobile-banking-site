document.getElementById("cashOut").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = document.getElementById("cashOutAmount").value;
  const convertedAmount = parseFloat(amount);
  const pin = document.getElementById("CashOutPIN").value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById("mainBalance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (amount) {
    if (pin) {
      if (convertedPin === 1234) {
        if (convertedAmount < convertedMainBalance) {
          const sum = convertedMainBalance - convertedAmount;
          document.getElementById("mainBalance").innerText = sum;
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
