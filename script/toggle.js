handleToggle("cashOutContainer", "none");
handleToggle("transactionHistoryContainer", "none");
document.getElementById("addMoneyBtn").addEventListener("click", function () {
  handleToggle("addMoneyContainer", "block");
  handleToggle("cashOutContainer", "none");
  handleToggle("transactionHistoryContainer", "none");
});
document.getElementById("cashOutBtn").addEventListener("click", function () {
    handleToggle("cashOutContainer", "block");
  handleToggle("addMoneyContainer", "none");
  handleToggle("transactionHistoryContainer", "none");
});
document
  .getElementById("transactionHistoryBtn")
  .addEventListener("click", function () {
    handleToggle("transactionHistoryContainer", "block");
    handleToggle("addMoneyContainer", "none");
    handleToggle("cashOutContainer", "none");
  });
