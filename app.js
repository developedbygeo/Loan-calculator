const monthlyPayment = document.querySelector(".monthly-payment");
const interestPaid = document.querySelector(".interest-sum");
const totalSumPaid = document.querySelector(".total-sum-paid");
// Form
const calculateBtn = document.querySelector(".calculate-button");
const loanAmount = document.querySelector(".loan-amount");
const loanTerm = document.querySelector(".loan-term");
const loanInterest = document.querySelector(".loan-interest");
// Calculations

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const numbers = /^\d+\.?\d{0,2}$/g;
  if (
    loanAmount.value.match(numbers) &&
    loanTerm.value.match(numbers) &&
    loanInterest.value.match(numbers)
  ) {
    calculate();
  } else {
    alert("Please provide solely numeric values");
  }
});

function calculate() {
  const convertedInterest = parseFloat(loanInterest.value) / 100 / 12;
  const convertedTerm = parseFloat(loanTerm.value) * 12;
  const convertedLoan = parseFloat(loanAmount.value);
  const powers = Math.pow(1 + convertedInterest, convertedTerm);
  const monthlyLoanPayment =
    (convertedLoan * powers * convertedInterest) / (powers - 1);
  const totalInterest = (
    monthlyLoanPayment * convertedTerm -
    convertedLoan
  ).toFixed(2);
  const totalSum = (monthlyLoanPayment * convertedTerm).toFixed(2);
  monthlyPayment.innerText = `$ ${monthlyLoanPayment.toFixed(2)}`;
  monthlyPayment.style.color = "#284b63";
  totalSumPaid.innerText = `$ ${totalSum}`;
  totalSumPaid.style.color = "#284b63";
  interestPaid.innerText = `$ ${totalInterest}`;
}
