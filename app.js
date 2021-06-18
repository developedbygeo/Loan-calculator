const monthlyPayment = document.querySelector(".monthly-payment");
const interestPaid = document.querySelector(".interest-sum");
const totalSumPaid = document.querySelector(".total-sum-paid");
// Form
const calculateBtn = document.querySelector(".calculate-button");
const loanAmount = document.querySelector(".loan-amount");
const loanTerm = document.querySelector(".loan-term");
const loanInterest = document.querySelector(".loan-interest");
const errorMsg = document.querySelectorAll(".error");
let valueArray = [];

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  check();
  calculate();
  check();
});

function check() {
  const numbers = /^\d+\.?\d{0,2}$/g;
  valueArray = [loanAmount, loanTerm, loanInterest];
  valueArray.forEach((element) => {
    const field = element;
    const value = element.value;
    const parentElement = element.parentElement;
    const errorMsgDisplay = parentElement.children[0];
    if (value.match(numbers)) {
      valueArray = [];
      field.style.border = "";
      errorMsgDisplay.style.display = "none";
    } else {
      field.style.border = "1px solid red";
      valueArray = [];
      console.log(parentElement.children[0]);
      errorMsgDisplay.style.display = "block";
      monthlyPayment.innerText = "Error";
      monthlyPayment.style.color = "#F0EFEB";
      interestPaid.innerText = "";
      totalSumPaid.innerText = "";
    }
  });
}

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
  monthlyPayment.style.color = "white";
  totalSumPaid.innerText = `$ ${totalSum}`;
  totalSumPaid.style.color = "white";
  interestPaid.innerText = `$ ${totalInterest}`;
  interestPaid.style.color = "white";
}
