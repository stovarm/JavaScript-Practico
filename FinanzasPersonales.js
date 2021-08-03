
/* const saving = income * 0.1; */



// Total Gastos

function calculateExpenses () {
    
    const inputIncome = document.getElementById("InputIncome");
    const income = inputIncome.value;
    const rent = income * 0.3;
    const food = income * 0.15;
    const debt = income * 0.15;
    const transport = income * 0.1;
    const services = income * 0.1;
    const other = income * 0.1;
    
    const expenses = [
        rent,
        food,
        debt,
        transport,
        services,
        other,
    ];

    const sumExpenses = expenses.reduce(
        function (a = 0, b){
            return a + b;
        }
    );

    const expensesP = document.getElementById("Expenses");
    expensesP.innerText = "$" + sumExpenses;

    const rentP = document.getElementById("Rent");
    rentP.innerText = "$" + rent;

    const foodP = document.getElementById("Food");
    foodP.innerText = "$" + food;

    const debtP = document.getElementById("Debt");
    debtP.innerText = "$" + debt;

    const transpP = document.getElementById("Transport");
    transpP.innerText = "$" + transport;

    const serviceP = document.getElementById("Services");
    serviceP.innerText = "$" + services;

    const otherP = document.getElementById("Others");
    otherP.innerText = "$" + other;
    
    // Inversión
    
    const yearSavings = income * 12 * 0.1;

    const inputYears = document.getElementById("InputYears");
    const yearsValue = inputYears.value;
    const months = yearsValue * 12;
    const inputRate = document.getElementById("InputRate");
    const rate = inputRate.value;

    const interest = 1 + rate/100;
    const number = Math.pow(interest, months);
    const invest = yearSavings * number;
    
    const savingsP = document.getElementById("YearSavings");
    savingsP.innerText = "$" + yearSavings;

    const capitalP = document.getElementById("Capital");
    capitalP.innerText = "$" + invest; 

}

// Inversión


/* function calculateInvestment () {
    
    const yearSavings = income * 12 * 0.1;

    const inputYears = document.getElementById("InputYears");
    const yearsValue = inputYears.value;
    const months = yearsValue / 12;
    const inputRate = document.getElementById("InputRate");
    const rate = inputRate.value;

    const interest = 1 + rate/100;
    const number = Math.pow(interest, months);
    const invest = yearSavings * number;
    
    const savingsP = document.getElementById("YearSavings");
    savingsP.innerText = "$" + yearSavings;

    const capitalP = document.getElementById("Capital");
    capitalP.innerText = "$" + invest;    
} */




/* console.log(rent, food, debt, transport, services, other, saving); */
/* console.log(expenses); */
/* console.log("Total Gastos: $" + calculateExpenses(income)); */
/* console.log("Total Ahorrado en 1 año: $" + yearSavings);
console.log("Final Capital: $" + calculateInvestment(yearSavings, 2, 12)); */

// 30EA -> 2.21 EM   