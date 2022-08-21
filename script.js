//on load, add event listener to individual list items listening for click using forEach statement
//on click on ITEM, tally total 
//how to check total? look at value after price 
//turn the list item into an array, find "price:", select after that (whatever is between price and end value)
//when total is >= disable all other items && maybe make running total bg red? or have notif up?

//establish your moneys and cart total as 0
let priceD = 0;
let priceVIP = 0;
let moneyD = prompt("How many Dolluhs do you have?");
let moneyVIP = prompt("How many VIP Points do you have?");

window.onload = function(){
document.querySelector('.currentD').innerHTML = `Your current Dolluhs: ${moneyD}`
document.querySelector('.currentVIP').innerHTML = `Your current VIP Points: ${moneyVIP}`
document.querySelector('.leftD').innerHTML = `You currently have ${moneyD} Dolluhs left.`
document.querySelector('.leftVIP').innerHTML = `You currently have ${moneyVIP} VIP Points left.`
}

//toggle item class .active
function toggleActive(element){
    element.classList.toggle('active')
}

function addOrSubctract(element){
    if (element.classList.contains('active')){
      return 1
    }
    else
    {
      return -1
    }
}

function checkCurrency(element){
    if (element.classList.contains('dolluhs')){
        return 'priceD'
    }
    else
    {
        return 'priceVIP'
    }
}

//needs to return the price at the end of the string
function findPrice(element){
    const endpoint = element.innerText.search(':');
    //console.log(endpoint);
    return element.innerText.slice(endpoint + 2)
}

function updateSpent(currency, multiplier, price){
    if (currency == "priceD"){
        priceD = priceD + (multiplier * price)
        document.querySelector('.spentD').innerText = `Current Dolluhs spent: ${priceD}`
    }
    else{
        priceVIP = priceVIP + (multiplier * price)
        document.querySelector('.spentVIP').innerText = `Current VIP Points spent: ${priceVIP}`
    }
}

//create an array of all list items based on class of list-group-item
const items = document.querySelectorAll('.list-group-item');

//loop through each list item and add an event listener for click
items.forEach(element => {
    element.addEventListener('click', function handleClick(){
       toggleActive(element);
       //pick if updating priceD or priceVIP
       let currency = checkCurrency(element);
       //console.log(currency);
       //pick if adding or subtracting
       let multiplier = addOrSubctract(element);
       //console.log(multiplier);
       //cast the price as a float 
       let price = parseFloat(findPrice(element))
       //console.log(price);
       //console.log(currency)
       updateSpent(currency, multiplier, price);
    });
});