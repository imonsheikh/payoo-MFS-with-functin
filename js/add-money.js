/**
 * How to get a number from an input field
 * 1.Create a variable
 * 2. right side document.getElementById(id)
 * 3. .value
 * 4.parseFloat
 */ 
// console.log('add money laoded');

document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault()

console.log("add money button clicked");

// getInputFieldValueId()
// const addMoney = getInputFieldValueId()
// console.log("add money value", addMoney);

// const addMoney = document.getElementById('input-add-money').value
// const addMoneyNumber = parseFloat(addMoney)

const addMoney = getInputFieldValueId('input-add-money')
const pinNumber = getInputFieldValueId('input-pin-number')
console.log('add money with parameter', addMoney);
console.log('pin number with parameter', pinNumber);


})