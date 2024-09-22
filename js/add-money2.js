document.getElementById('btn-add-money').addEventListener('click', function(event){
event.preventDefault()

const addMoney = getInputFieldValueId('input-add-money')
const pinNumber = getInputFieldValueId('input-pin-number')
// console.log("add money inside addmoney2.js", addMoney);
// console.log("pin number inside addmoney2.js", pinNumber);

//wrong way to verify. Do not your serious website
 if(pinNumber === 1234){
   const balance = getTextFieldValueById('account-balance')
//    console.log(balance, addMoney);
   const newBalance = balance + addMoney

   document.getElementById('account-balance').innerText = newBalance

   // add to transaction history 
   const p = document.createElement('p')
   p.innerText = `Added: ${addMoney} TK. Balance: ${newBalance}`
   console.log(p);

   //should be a common function 
   document.getElementById('transaction-container').appendChild(p)
   
 }else{
    alert('failed to add the money')
 }
})