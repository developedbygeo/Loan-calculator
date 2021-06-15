const monthlyPayment = document.querySelector(".monthly-payment");
const interestPaid = document.querySelector(".interest-sum");
const principalPaid = document.querySelector(".principal-sum");
// Form
const calculateBtn = document.querySelector(".calculate-button");
const loanAmount = document.querySelector(".loan-amount");
const loanTerm = document.querySelector(".loan-term");
const loanInterest = document.querySelector(".loan-interest");
// Calculations
const convertedInterest = parseFloat(loanInterest.value);
const convertedTerm = parseFloat(loanTerm.value * 12);
const convertedLoan = parseFloat(loanAmount.value);

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  calculateMonthlyPayment();
  calculateTotalInterest();
});

function calculateMonthlyPayment() {
  const interestToPaymentsRatio = convertedInterest / 100 / convertedTerm;
  const actualMonthlyInterest = interestToPaymentsRatio * convertedLoan;
  const fixedMonthlyPayment = convertedLoan / convertedTerm;
  const actualTotal =
    Math.round((fixedMonthlyPayment + actualMonthlyInterest) * 100) / 100;
  monthlyPayment.innerText = `$ ${actualTotal}`;
  monthlyPayment.style.color = "#284b63";
}

function calculateTotalInterest() {
  const totalInterest =
    Math.round(
      convertedLoan * (convertedInterest / 100) * (convertedTerm / 12) * 100
    ) / 100;
  interestPaid.innerText = `$ ${totalInterest}`;
  interestPaid.style.color = "#284b63";
}
