function getInputValueByID(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function getInnerTextByID(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function setInnerTextByIDAndValue(id, value) {
  document.getElementById(id).innerText = value;
}

function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

function updateTransactionHistory(amount, phoneNumber, bank, status) {
  const p = document.createElement("p");
  p.innerHTML = `
        ${status} $${amount} money by ${phoneNumber} account from ${bank}.
        `;
  document.getElementById("transactionHistoryContainer").appendChild(p);
}

function updateTransactionHistoryFromCashOut(amount, phoneNumber, status) {
    const p = document.createElement("p");
    p.innerHTML = `
          ${status} $${amount} money from ${phoneNumber} account.
          `;
    document.getElementById("transactionHistoryContainer").appendChild(p);
  }
