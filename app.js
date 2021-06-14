const calculateBtn = document.querySelector(".calculate-button");
const monthlyPayment = document.querySelector(".monthly-payment");
const interestPaid = document.querySelector(".interest-sum");
const principalPaid = document.querySelector(".principal-sum");

calculateBtn.addEventListener("click", () => {
  calculateTotal();
});

function calculateTotal() {
  console.log(monthlyPayment.value);
  console.log(interestPaid.value);
  console.log(principalPaid.value);
}
