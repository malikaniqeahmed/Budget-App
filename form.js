let expenses = [];

var finalBudget = document.getElementById("finalBudget")
var remainingbalance = document.getElementById("remainingbalance")
var totalExpense = document.getElementById("totalExpense")
var inputduedate = document.getElementById('inputduedate')
var inputexpenseamount = document.getElementById('inputexpenseamount')
var inputtaxamt = document.getElementById('inputtaxamt')
var dropDownMenu = document.getElementById('dropDownMenu')
var inputdiscription = document.getElementById('inputdiscription')
var inputpaydate = document.getElementById('inputpaydate')
const addExpenseBtn = document.getElementById('addExpenseBtn')
const expenseTableBody = document.getElementById('expense-table-body');


var budget = localStorage.getItem('budget')
remainingbalance.textContent = budget
finalBudget.innerHTML = budget


addExpenseBtn.addEventListener('click', addExpense);


function addExpense() {

    const desc = inputdiscription.value
    const amount = parseFloat(inputexpenseamount.value)
    const dueDate = inputduedate.value;
    const payDate = inputpaydate.value;
    const categoryDD = dropDownMenu.value;
    const taxAmount = parseFloat(inputtaxamt.value)

    if (isNaN(amount) || amount <= 0) {
        Swal.fire(
            'Alert!',
            'Invalid Total amount. Please enter a valid number.',
            'error'
        )
        return;
    }
    if (isNaN(taxAmount) || taxAmount <= 0) {
        Swal.fire(
            'Alert!',
            'Invalid Tax amount. Please enter a valid number.',
            'error'
        )
        return;
    }

    const expense = {
        description: desc,
        amount: amount,
        date: dueDate,
        tax: taxAmount,
        cat: categoryDD,
        payd: payDate,
    };

    var value = dropDownMenu.value
    var text = dropDownMenu.options[dropDownMenu.selectedIndex].text;

    if (text === 'Restaurants & Cafe') {
        localStorage.setItem('resturant', amount)
    }
    if (text === 'Clothes & Jewlery') {
        localStorage.setItem('clothes', amount)
    }
    if (text === 'Loan & Credit') {
        localStorage.setItem('loan', amount)
    }
    if (text === 'Grocery & Medical') {
        localStorage.setItem('grocery', amount)
    }

    console.log(value, text);

    expenses.push(expense);

    renderExpenses();
    calculateRemainingBudget()
    clearExpenseFields();
}

function renderExpenses() {
    expenseTableBody.innerHTML = '';

    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];

        const row = document.createElement('tr');
        const descCell = document.createElement('td');
        const category = document.createElement('td');
        const amount = document.createElement('td');
        const taxamount = document.createElement('td');
        const dueDate = document.createElement('td');
        const payDate = document.createElement('td');

        descCell.textContent = expense.description;
        amount.textContent = expense.amount;
        dueDate.textContent = expense.date;
        payDate.textContent = expense.payd;
        category.textContent = expense.cat;
        taxamount.textContent = expense.tax;

        row.appendChild(descCell);
        row.appendChild(category);
        row.appendChild(amount);
        row.appendChild(taxamount);
        row.appendChild(dueDate);
        row.appendChild(payDate);

        expenseTableBody.appendChild(row);
    }
}


function calculateRemainingBudget() {
    let totalExpenses = 0;

    for (let i = 0; i < expenses.length; i++) {
        totalExpenses += expenses[i].amount;
    }

    console.log(expenses);
    totalExpense.textContent = totalExpenses

    const remainingBudget = budget - totalExpenses;
    remainingbalance.textContent = remainingBudget
}


function clearExpenseFields() {
    inputdiscription.value = '';
    inputduedate.value = '';
    inputpaydate.value = '';
    inputtaxamt.value = '';
    inputexpenseamount.value = '';
    dropDownMenu.value = '';
}





