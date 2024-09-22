// console.log("cash out file added");

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault()

    const cashOut = getInputFieldValueId('input-cash-out')
    const pinNumber = getInputFieldValueId('input-cash-out-pin')
    console.log("inside the click handler", cashOut, pinNumber);
    
})