// alert("Up and running!");

// var card1= "king"
// var card2= "king"
// var card3= "queen"
// var card4= "queen"

// console.log("User flipped " + card1);
// console.log("User flipped " + card4);

var cards = ["king","king","queen","queen"];
var cardsInPlay = [];
var card1 = cards[0];
cardsInPlay.push(card1);
console.log(cardsInPlay);

var card2 = cards[1];
cardsInPlay.push(card2);
console.log(cardsInPlay);

if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
        alert("You found a match!");
    }
    else if(cardsInPlay[0] !== cardsInPlay[1]){
        alert("Sorry try again.!");
    }
};

