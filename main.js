// CAI YANG
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Diamonds", "Clubs", "Hearts", "Spades"];
const deck = [];
let card1 = null;
let card2 = null;
let winner = document.getElementById('win');
let scoreP1 = document.getElementById('score1');
let scoreP2 = document.getElementById('score2');
let count1 = 0;
let count2 = 0;

function buildDeck(values, suits) {
  for (let v = 0; v < values.length; v++) {
    for (let s = 0; s < suits.length; s++) {
      let card = {
        num: values[v],
        suit: suits[s],
        value: v
      }
      deck.push(card);
    }
  }
  return deck;
}

function dealCardsToPlayers() {
  if (deck.length == 0) {
    alert("GAME OVER! Deck is empty! Reset to play again!");
  } else {
    let rand1 = Math.floor(Math.random() * deck.length);
    card1 = deck[rand1];
    deck.splice(rand1, 1);

    let rand2 = Math.floor(Math.random() * deck.length);
    card2 = deck[rand2];
    deck.splice(rand2, 1);
  }
}

function announceCards() {
  document.getElementById('p1').innerHTML = `Player 1 has the ${card1.num} of ${card1.suit}`;
  document.getElementById('p2').innerHTML = `Player 2 has the ${card2.num} of ${card2.suit}`;
}

function announceWinner() {

  if (card1.value > card2.value) {
    winner.innerHTML = "PLAYER 1!!!";
    count1++;
    scoreP1.value = count1;
  } else if (card1.value < card2.value) {
    winner.innerHTML = "PLAYER 2!!!";
    count2++;
    scoreP2.value = count2;
  } else if (card1.suit == "Spades") {
    winner.innerHTML = "PLAYER 1!!!";
    count1++;
    scoreP1.value = count1;
  } else if (card2.suit == "Spades") {
    winner.innerHTML = "PLAYER 2!!!";
    count2++;
    scoreP2.value = count2;
  } else if (card1.suit == "Hearts") {
    winner.innerHTML = "PLAYER 1!!!";
    count1++;
    scoreP1.value = count1;
  } else if (card2.suit == "Hearts") {
    winner.innerHTML = "PLAYER 2!!!";
    count2++;
    scoreP2.value = count2;
  } else if (card1.suit == "Clubs") {
    winner.innerHTML = "PLAYER 1!!!";
    count1++;
    scoreP1.value = count1;
  } else if (card2.suit == "Clubs") {
    winner.innerHTML = "PLAYER 2!!!";
    count2++;
    scoreP2.value = count2;
  }

}

function returnCardsToDeck() {
  deck.push(card1);
  deck.push(card2);
}

function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  // returnCardsToDeck();
}

buildDeck(values, suits);
