setTimeout(() => {
  nickname = prompt(`Input your nickname`);
  while (nickname == null || nickname.trim() == "") {
    nickname = prompt(`Input your nickname correctly`);
  }
  player_nickname.textContent = nickname;
}, 20);

const cards_worth = {
  card: [
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "jack",
    "queen",
    "king",
    "ace",
    "joker",
  ],
  points: [6, 7, 8, 9, 10, 2, 3, 4, 11, 100],
  suit: ["spades", "clubs", "diamonds", "hearts"],
};
let attempts = 0;
let player_points = 0;
let bot_points = 0;

const card_background_btn = document.querySelector("#card_background_like_btn");
const attemptsText = document.querySelector(".attempts");
const playerCard = document.querySelector(".playerCard").querySelector("img");
const botCard = document.querySelector(".botCard").querySelector("img");
const points = document.querySelectorAll(".points");
const roundsResult = document.querySelector(".result_text");

card_background_btn.addEventListener("click", generate_card);

function generate_card() {
  //0,1 - generate card or point, 2,3 - suit of card
  const value_cards = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 4),
    Math.floor(Math.random() * 4),
  ];
  attempts++;
  attemptsText.textContent = `${attempts} attempts out of 3`;
  player_points += cards_worth.points[value_cards[0]];
  bot_points += cards_worth.points[value_cards[1]];
  points[0].textContent = player_points;
  points[1].textContent = bot_points;
  playerCard.src = `./images/${cards_worth.card[value_cards[0]]}_${
    cards_worth.suit[value_cards[2]]
  }.png`;
  botCard.src = `./images/${cards_worth.card[value_cards[1]]}_${
    cards_worth.suit[value_cards[3]]
  }.png`;

  if (attempts == 3) {
    card_background_btn.style = `display:none`;
    if (player_points > bot_points) {
      roundsResult.textContent = `You win`;
      roundsResult.style = `color:green`;
      setTimeout(() => {
        attempts = 0;
        player_points = 0;
        bot_points = 0;
        document.querySelector("#p_points").textContent = "0";
        document.querySelector("#c_points").textContent = "0";
        document.querySelector(".attempts").textContent = `${attempts} attempts out of 3`;
        card_background_btn.style = `display:flex`;
        roundsResult.style = `display:none`;
        playerCard.src = "images/cards_background.png";
        botCard.src = "images/cards_background.png";
      }, 5000);
    }
    if (player_points < bot_points) {
      roundsResult.textContent = `You lose`;
      roundsResult.style = `color:red`;
      setTimeout(() => {
        attempts = 0;
        player_points = 0;
        bot_points = 0;
        document.querySelector("#p_points").textContent = "0";
        document.querySelector("#c_points").textContent = "0";
        document.querySelector(".attempts").textContent = `${attempts} attempts out of 3`;
        card_background_btn.style = `display:flex`;
        roundsResult.style = `display:none`;
        playerCard.src = "images/cards_background.png";
        botCard.src = "images/cards_background.png";
      }, 5000);
    }
    if (player_points == bot_points) {
      roundsResult.textContent = `Draw`;
      roundsResult.style = `color:gray`;
      setTimeout(() => {
        attempts = 0;
        player_points = 0;
        bot_points = 0;
        document.querySelector("#p_points").textContent = "0";
        document.querySelector("#c_points").textContent = "0";
        document.querySelector(".attempts").textContent = `${attempts} attempts out of 3`;
        card_background_btn.style = `display:flex`;
        roundsResult.style = `display:none`;
        playerCard.src = "images/cards_background.png";
        botCard.src = "images/cards_background.png";
      }, 5000);
    }
  }
}
