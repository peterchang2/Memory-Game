
var score = 0;
var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"
    }
];

var flipCard = function(){
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("src", cards[cardId].cardImage);
    if(cardsInPlay.length === 2){
      checkForMatch();
    }
};

var checkForMatch = function(){
     if (cardsInPlay.length === 2){
        if (cardsInPlay[0] === cardsInPlay[1]){
          // alertMatch();
          score +=1;
          var alertMessage = document.getElementById("alertMessage");
          alertMessage.innerHTML += 'You found a match!!' + " " + score + "Point";
        }
        else if(cardsInPlay[0] !== cardsInPlay[1]){
          var alertMessage = document.getElementById("alertMessage");
          alertMessage.innerHTML += 'Sorry try again.';
        }
    };
};

var resetArray = function(){
  cardsInPlay = [];
};

var cardsInPlay = [];
var createBoard = function(){
    for (var i = 0; i < cards.length; i++) {
        var gameBoard = document.getElementById('game-board');
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    }
};

createBoard();
