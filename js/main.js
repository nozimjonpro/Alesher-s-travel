var elHeading = document.querySelector('.heading')
alert ('Welcome to our traveling company');
var firstName = prompt('Please write your name :)', 'Alisher');
var surname = prompt('Please write your surname :)', 'Uzoqov');
var moneyAmount = Number(prompt('How much have you got money :)', '000000000'));

var hotelExpense = 250;
var fareExpense = 500;
var enjoymentExpenses = 120;

alert ('Dear ' + firstName +'\t'+ surname + '\n' + 'Your hotel expenses: ' + hotelExpense + '$' + '\n' + 'Your fare expenses: ' + fareExpense + '$'+ '\n' + 'Your enjoyment expenses: ' + enjoymentExpenses + 'euro');

hotelExpense = 250*9433.34;
fareExpense = 500*9433.34;
enjoymentExpenses = 120*10354.03;

alert('Expenses in your currency:' + "\n" + 'Your hotel expenses: ' + hotelExpense + '\n' + 'Your fare expenses: ' + fareExpense + '\n' + 'Your enjoyment expenses: ' + enjoymentExpenses);

var totalExpenses = (hotelExpense + fareExpense + enjoymentExpenses);
console.log(totalExpenses)

if (moneyAmount>=totalExpenses){
    elHeading.textContent = 'You can travel !';
}else{
    elHeading.textContent = 'We hope you can endure a year !';
}