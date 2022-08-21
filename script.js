//on load, add event listener to individual list items listening for click using forEach statement
//on click on ITEM, tally total 
//how to check total? look at value after price 
//turn the list item into an array, find "price:", select after that (whatever is between price and end value)
//when total is >= disable all other items && maybe make running total bg red? or have notif up?

//establish your moneys and cart total as 0
let priceD = 0;
let priceVIP = 0;
//let moneyD = prompt("How many Dolluhs do you have?");
//let moneyVIP = prompt("How many VIP Points do you have?");

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

//update DOM for price
function updatePrice(){
    
}

//needs to return the price at the end of the string
function findPrice(element){
    const endpoint = element.innerText.search(':');
    //console.log(endpoint);
    return element.innerText.slice(endpoint)
}

//create an array of all list items based on class of list-group-item
const items = document.querySelectorAll('.list-group-item');

//loop through each list item and add an event listener for click
items.forEach(element => {
    element.addEventListener('click', function handleClick(){
       toggleActive(element);
       findPrice(element);
    });
});