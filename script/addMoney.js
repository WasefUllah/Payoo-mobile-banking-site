document.getElementById("addMoney").addEventListener("click", function (event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  const convertedAmount = parseInt(amount);
  const pin = document.getElementById("PIN").value;
  const convertedPin = parseInt(pin);
  const mainBalance = document.getElementById("mainBalance").innerText;
  const convertedMainBalance = parseInt(mainBalance);

  if (amount) {
    if (pin) {
      if (convertedPin === 1234) {
        const sum = convertedAmount + convertedMainBalance;
        document.getElementById("mainBalance").innerText = sum;
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
