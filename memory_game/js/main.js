// alert("Up and running!");

// var card1= "king"
// var card2= "king"
// var card3= "queen"
// var card4= "queen"

// console.log("User flipped " + card1);
// console.log("User flipped " + card4);

   // var card1 = cards[0];
    // cardsInPlay.push(card1);
    // console.log(cardsInPlay);
    
    // var card2 = cards[1];
    // 

var cards = ["king","king","queen","queen"];
var cardsInPlay = [];

var checkForMatch = function(){
     if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
            console.log("You found a match!");
        }
        else if(cardsInPlay[0] !== cardsInPlay[1]){
            console.log("Sorry try again.!");
        }        
    };
    // if (cardsInPlay[0] === cardsInPlay[1]) {
    //     console.log("You found a match!");
    // } 
    // else {
    //     console.log("Sorry, try again.");
    // }
}
var flipCard = function(cardID){       
    cardsInPlay.push(cards[cardID]);  
    console.log("User flipped " + cards[cardID]);
    checkForMatch();      
};

flipCard(0);
flipCard(2);


