const budgetInput = document.getElementById('inputbudget');
const fname = document.getElementById('inputfname');
const signinBTN = document.getElementById('signinBTN');

signinBTN.addEventListener('click', budgetSubmit);


function budgetSubmit() {

    const budget = parseFloat(budgetInput.value);
    const fullName = fname.value

    if (isNaN(budget) || budget <= 0) {
        Swal.fire(
            'Alert!',
            'Invalid budget amount. Please enter a valid number.',
            'error'
        )
        return;
    }
    localStorage.setItem('budget', budget)
    localStorage.setItem('name', fullName)
    window.location.href = './form.html'

    budgetInput.value = ''
    fname.value = ''
}

var resturant = localStorage.getItem('resturant')
var grocery = localStorage.getItem('grocery')
var loan = localStorage.getItem('loan')
var clothes = localStorage.getItem('clothes')


var loanant = document.getElementById('loanant');
var clothesant = document.getElementById('clothesant');
var groceryant = document.getElementById('groceryant');
var cafeant = document.getElementById('cafeant');
var clearData = document.getElementById('clearData');
clearData.addEventListener('click', clearStorage);

function clearStorage() {
    localStorage.clear();
    location.reload();
}

loanant.innerHTML = loan
clothesant.innerHTML = clothes
groceryant.innerHTML = grocery
cafeant.innerHTML = resturant