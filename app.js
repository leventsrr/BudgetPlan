const inputIncome = document.querySelector('.inputIncome')
const inputIncomeButton = document.querySelector('.getIncome')
const expenseName = document.querySelector('.expenseName')
const amount = document.querySelector('.amount')
const addExpenseButton = document.querySelector('.addExpense')
const allExpense = document.querySelector('.allExpense')
const incomeName = document.querySelector('.incomeName')
const incomeAmount = document.querySelector('.incomeAmount')
const allIncome = document.querySelector('.allIncome')
const addIncomeButton = document.querySelector('.addIncome')

const getNetIncome = document.querySelector('.getNetIncome')
const netIncome = document.querySelector('.netIncome')
const showNetIncome = document.querySelector('.showNetIncome')
const showFinalBudget = document.querySelector('.showFinalBudget')
const showTotalIncome = document.querySelector('.showTotalIncome')
let totalIncome = 0
getNetIncome.addEventListener('click',(e)=>{
    e.preventDefault()
    showNetIncome.innerText = netIncome.value
    totalIncome += parseInt(netIncome.value) 
})



addIncomeButton.addEventListener('click',()=>{
    if(incomeName.value.length == 0 || incomeAmount.value.length == 0){
      allIncome.insertAdjacentHTML('afterbegin',`<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Uyarı</strong> Alanlar boş bırakılamaz
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`)
    }else{
      allIncome.insertAdjacentHTML('afterbegin',
    `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${incomeName.value}
    <span class="badge bg-success rounded-pill">${incomeAmount.value}</span>
  </li>`)
    totalIncome += parseInt(incomeAmount.value);
    showTotalIncome.innerText= totalIncome
    showFinalBudget.innerText=totalIncome-totalExpense
    incomeAmount.value=""
    incomeName.value=""
    }
    
    
})


let totalExpense = 0
addExpenseButton.addEventListener('click',()=>{
  if(expenseName.value.length == 0 || amount.value.length == 0){
    allExpense.insertAdjacentHTML('afterbegin',`<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>Uyarı</strong> Alanlar boş bırakılamaz
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`)
  }else{
    allExpense.insertAdjacentHTML('afterbegin',
    `<li class="list-group-item d-flex justify-content-between align-items-center">
    ${expenseName.value}
    <span class="badge bg-danger rounded-pill">${amount.value}</span>
    </li>`)
    totalExpense+=parseInt(amount.value)
    console.log(totalExpense)
    showFinalBudget.innerText= totalIncome-totalExpense
    expenseName.value=""
    amount.value=""
  }
    
    
})
