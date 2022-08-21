//on load, add event listener to individual list items listening for click using forEach statement
//on click on ITEM, tally total 
//how to check total? look at value after price 
//turn the list item into an array, find "price:", select after that (whatever is between price and end value)
//when total is >= disable all other items && maybe make running total bg red? or have notif up?

//establish your running cost as 0 before selecting any items to buy
let price = 0;

//toggle item class .active
function toggleActive(element){
    element.classList.toggle('active')
}

//update DOM for price
function updatePrice(){
    
}

//look at the string after price: , convert it into an integer, return this number as the price of the item
function findPrice(element){
    const value = Array.from(element);
    const firstIndex = value.indexOf(':') + 1;
    return parseInt(value.slice(firstIndex))
}

//create an array of all list items based on class of list-group-item
const items = document.querySelectorAll('.list-group-item');

//loop through each list item and add an event listener for click
items.forEach(element => {
    element.addEventListener('click', function handleClick(){
       toggleActive(element);
       const changePrice = findPrice(element);
    });
});