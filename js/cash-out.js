// console.log("cash out file added");

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()

    const cashOut = getInputFieldValueId('input-cash-out')
    const pinNumber = getInputFieldValueId('input-cash-out-pin')
    // console.log("inside the click handler", cashOut, pinNumber);

   if(pinNumber === 1234){
    const balance = getTextFieldValueById('account-balance')
    // console.log("balance here", balance);
    const newBalance = balance - cashOut
    document.getElementById('account-balance').innerText = newBalance
    // balance.innerText = newBalance
    
    }else{
        alert('No money for you....DGM')
    }
    
})