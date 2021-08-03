const income = 10000;

const rent = income * 0.3;
const food = income * 0.15;
const debt = income * 0.15;
const transport = income * 0.1;
const services = income * 0.1;
const other = income * 0.1;
const saving = income * 0.1;

const expenses = [
    rent,
    food,
    debt,
    transport,
    services,
    other,
];
// Total Gastos
const sumExpenses = expenses.reduce(
    function (a = 0, b){
        return a + b;
    }
);

// Inversión a 1 Año.
const yearSavings = saving * 12;

function investments (capital, rate, months) {
    const interest = 1 + rate/100;
    const number = Math.pow(interest, months);
    const invest = capital * number;
    return invest;
}



console.log(rent, food, debt, transport, services, other, saving);
console.log(expenses);
console.log("Total Gastos: $" + sumExpenses);
console.log("Total Ahorrado en 1 año: $" + yearSavings);
console.log("Con 1 año de inversión tendra: $" + investments(yearSavings, 2, 12));

// 30EA -> 2.21 EM   