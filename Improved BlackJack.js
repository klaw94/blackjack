let deck = [
  {
    suit: "♥",
    value: 2,
    sum: 2,
  },
  {
    suit: "♥",
    value: 3,
    sum: 3,
  },
  {
    suit: "♥",
    value: 4,
    sum: 4,
  },
  {
    suit: "♥",
    value: 5,
    sum: 5,
  },
  {
    suit: "♥",
    value: 6,
    sum: 6,
  },
  {
    suit: "♥",
    value: 7,
    sum: 7,
  },
  {
    suit: "♥",
    value: 8,
    sum: 8,
  },
  {
    suit: "♥",
    value: 9,
    sum: 9,
  },
  {
    suit: "♥",
    value: 10,

    sum: 10,
  },
  {
    suit: "♥",
    value: "J",
    sum: 10,
  },
  {
    suit: "♥",
    value: "Q",
    sum: 10,
  },
  {
    suit: "♥",
    value: "K",
    sum: 10,
  },
  {
    suit: "♥",
    value: "A",
    sum: 11,
  },
  {
    suit: "♦",
    value: 2,
    sum: 2,
  },
  {
    suit: "♦",
    value: 3,
    sum: 3,
  },
  {
    suit: "♦",
    value: 4,
    sum: 4,
  },
  {
    suit: "♦",
    value: 5,
    sum: 5,
  },
  {
    suit: "♦",
    value: 6,
    sum: 6,
  },
  {
    suit: "♦",
    value: 7,
    sum: 7,
  },
  {
    suit: "♦",
    value: 8,
    sum: 8,
  },
  {
    suit: "♦",
    value: 9,
    sum: 9,
  },
  {
    suit: "♦",
    value: 10,
    sum: 10,
  },
  {
    suit: "♦",
    value: "J",
    sum: 10,
  },
  {
    suit: "♦",
    value: "Q",
    sum: 10,
  },
  {
    suit: "♦",
    value: "K",
    sum: 10,
  },
  {
    suit: "♦",
    value: "A",
    sum: 11,
  },
  {
    suit: "♣",
    value: 2,
    sum: 2,
  },
  {
    suit: "♣",
    value: 3,
    sum: 3,
  },
  {
    suit: "♣",
    value: 4,
    sum: 4,
  },
  {
    suit: "♣",
    value: 5,
    sum: 5,
  },
  {
    suit: "♣",
    value: 6,
    sum: 6,
  },
  {
    suit: "♣",
    value: 7,
    sum: 7,
  },
  {
    suit: "♣",
    value: 8,
    sum: 8,
  },
  {
    suit: "♣",
    value: 9,
    sum: 9,
  },
  {
    suit: "♣",
    value: 10,
    sum: 10,
  },
  {
    suit: "♣",
    value: "J",
    sum: 10,
  },
  {
    suit: "♣",
    value: "Q",
    sum: 10,
  },
  {
    suit: "♣",
    value: "K",
    sum: 10,
  },
  {
    suit: "♣",
    value: "A",
    sum: 11,
  },
  {
    suit: "♠",
    value: 2,
    sum: 2,
  },
  {
    suit: "♠",
    value: 3,
    sum: 3,
  },
  {
    suit: "♠",
    value: 4,
    sum: 4,
  },
  {
    suit: "♠",
    value: 5,
    sum: 5,
  },
  {
    suit: "♠",
    value: 6,
    sum: 6,
  },
  {
    suit: "♠",
    value: 7,
    sum: 7,
  },
  {
    suit: "♠",
    value: 8,
    sum: 8,
  },
  {
    suit: "♠",
    value: 9,
    sum: 9,
  },
  {
    suit: "♠",
    value: 10,
    sum: 10,
  },
  {
    suit: "♠",
    value: "J",
    sum: 10,
  },
  {
    suit: "♠",
    value: "Q",
    sum: 10,
  },
  {
    suit: "♠",
    value: "K",
    sum: 10,
  },
  {
    suit: "♠",
    value: "A",
    sum: 11,
  },
];

function shuffle(deck) {
  // for 1000 turns
  // switch the values of two random cards
  let shuffledDeck = new Array();
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
}

shuffle(deck);

let blackJackGame = {
  you: {
    scoreSpan: "#myScore",
    div: "#cardboard",
    score: 0,
    button: "#hit",
    alreadyCalculated: [false, false, false, false, false, false],
  },
  dealer: {
    scoreSpan: "#botScore",
    div: "#cardboardBot",
    score: 0,
    button: "#stand",
    alreadyCalculated: [false, false, false, false, false, false],
  },
};

const YOU = blackJackGame["you"];
const DEALER = blackJackGame["dealer"];

let hitButton = document.querySelector("#hit");
let dealButton = document.querySelector("#deal");
let standButton = document.querySelector("#stand");

let drawingSound = new Audio("card-flip.wav");
let winAudio = new Audio("aplauso.wav");
let drawAudio = new Audio("meh draw.mp3");
let loseAudio = new Audio("meh lose.mp3");
let shuffleAudio = new Audio("card-shuffling.mp3");

hitButton.addEventListener("click", drawCard);
dealButton.addEventListener("click", deal);
standButton.addEventListener("click", drawCardBot);

standButton.disabled = true;
dealButton.disabled = true;

function drawCard() {
  let card = deck.pop();
  deck.unshift(card);
  standButton.disabled = false;
  drawingSound.play();

  showCard(card, YOU);
  addScorePlayer(card, YOU);
}

function drawCardBot() {
  let card = deck.pop();
  deck.unshift(card);
  standButton.disabled = true;
  hitButton.disabled = true;
  drawingSound.play();

  showCard(card, DEALER);
  addScorePlayer(card, DEALER);

  shouldKeepDrawing(YOU, DEALER);
}

i = 0;
function showCard(card, location) {
  let cardSpace = document.createElement("div");
  cardSpace.setAttribute("id", "card" + i);
  let cardText = document.createElement("div");
  let cardEmoji = document.createElement("div");
  cardSpace.classList.add("card");
  cardEmoji.classList.add("suit");
  cardEmoji.setAttribute("id", "emoji" + i);
  cardText.classList.add("value");
  cardText.setAttribute("id", "text" + i);

  cardText.innerHTML = card.value;
  cardEmoji.innerHTML = card.suit;
  document.querySelector(location["div"]).appendChild(cardSpace);
  document.getElementById("card" + i).appendChild(cardText);
  document.getElementById("card" + i).appendChild(cardEmoji);

  turnRed(cardEmoji, card);

  i++;
}

function addScorePlayer(card, location) {
  location["score"] = location["score"] + card.sum;

  calculateValueOfA(location);
  document.querySelector(location["scoreSpan"]).innerHTML = location["score"];

  getBusted(location["score"], location["scoreSpan"], location["button"]);
  return location["score"];
}

function turnRed(emoji, card) {
  if (card.suit === "♥" || card.suit === "♦") {
    emoji.classList.add("redCard");
  }
}

function getBusted(score, span, button) {
  if (score > 21) {
    score = "BUSTED";
    document.querySelector(span).innerHTML = "BUSTED";
    document.querySelector(span).style.color = "red";

    document.querySelector(button).disabled = true;
  }
}

function shouldKeepDrawing(player, bot) {
  let numberComparison = document.querySelector(player["scoreSpan"]).innerHTML;
  let intComparison = Number(numberComparison);

  if (
    isNaN(intComparison) ||
    intComparison < bot["score"] ||
    bot["score"] === 21 ||
    bot["score"] === 20 ||
    (bot["score"] === 19 && intComparison === 19)
  ) {
    setTimeout(getResult, 200);
  } else if (bot["score"] <= 19) {
    setTimeout(drawCardBot, 800);
  }
}

function getResult() {
  dealButton.disabled = false;
  let playerScore = document.querySelector(YOU["scoreSpan"]).innerHTML;
  let botScore = document.querySelector(DEALER["scoreSpan"]).innerHTML;
  let intPlayerScore = Number(playerScore);
  let intBotScore = Number(botScore);
  if (
    (isNaN(intPlayerScore) && isNaN(intBotScore)) ||
    intBotScore === intPlayerScore
  ) {
    document.getElementById("message").innerHTML = "This is a draw!";
    drawAudio.play();

    let points = document.getElementById("draws").innerHTML;
    let numberPoints = Number(points);
    points = numberPoints + 1;
    document.getElementById("draws").innerHTML = numberPoints + 1;
  } else if (
    (isNaN(intPlayerScore) && !isNaN(intBotScore)) ||
    intPlayerScore < intBotScore
  ) {
    document.getElementById("message").innerHTML = "You lose!😥";
    let points = document.getElementById("losses").innerHTML;
    loseAudio.play();

    let numberPoints = Number(points);
    points = numberPoints + 1;
    document.getElementById("losses").innerHTML = numberPoints + 1;
  } else {
    document.getElementById("message").innerHTML = "You win!😀";
    winAudio.play();

    let points = document.getElementById("wins").innerHTML;
    let numberPoints = Number(points);
    points = numberPoints + 1;
    document.getElementById("wins").innerHTML = numberPoints + 1;
  }
}

function deal() {
  winAudio.pause();
  shuffleAudio.play();

  let yourCards = document.querySelector(YOU["div"]).querySelectorAll("div");
  for (i = 0; i < yourCards.length; i++) {
    yourCards[i].remove();
  }

  let botCards = document.querySelector(DEALER["div"]).querySelectorAll("div");
  for (i = 0; i < botCards.length; i++) {
    botCards[i].remove();
  }

  resetArrays(YOU);
  resetArrays(DEALER);
  shuffle(deck);

  document.getElementById("myScore").innerHTML = 0;
  document.getElementById("myScore").style.color = "white";
  document.getElementById("botScore").innerHTML = 0;
  document.getElementById("botScore").style.color = "white";
  document.getElementById("message").innerHTML = "Let's Play!";
  resetYouScore();
  resetDealerScore();
  standButton.disabled = true;
  dealButton.disabled = true;
  hitButton.disabled = false;
}

function resetYouScore() {
  YOU["score"] = 0;
  return YOU["score"];
}

function resetDealerScore() {
  DEALER["score"] = 0;
  return DEALER["score"];
}

function calculateValueOfA(location) {
  let playedCards = document
    .querySelector(location["div"])
    .querySelectorAll(".value");

  if (location["score"] >= 22) {
    for (x = 0; x < playedCards.length; x++) {
      if (
        playedCards[x].innerHTML === "A" &&
        location["alreadyCalculated"][x] === false
      ) {
        location["score"] = location["score"] - 10;
        location["alreadyCalculated"][x] = true;
      }
    }
  }

  return location["score"];
}

function resetArrays(location) {
  for (x = 0; x < location["alreadyCalculated"].length; x++) {
    location["alreadyCalculated"][x] = false;
  }
  console.log(location["alreadyCalculated"]);
  return location["alreadyCalculated"];
}
