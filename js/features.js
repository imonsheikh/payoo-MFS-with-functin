// // console.log("features file added");
// function showAddMoneyForm(){

// }
// show add money button1 
document.getElementById('show-add-money-form').addEventListener('click', function(){
    showSectionById('add-money-form')
    console.log("show add money button clicked ");
    
})

// show cash-out button 2 
document.getElementById('show-cash-out-form').addEventListener('click',function(){
    showSectionById('cash-out-form')
    console.log('show cash out button clicked');
    
})

// show transaction history button 3 
document.getElementById('show-transaction-history').addEventListener('click', function(){
    showSectionById('transaction-section')
})