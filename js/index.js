const homeScreen = document.querySelector("#homeScreen");
const buttonStart = document.querySelector("#buttonStart");
const gameScreen = document.querySelector("#gameScreen");
const board = document.querySelector("#board");
//variareis
const deck = [
  "./images/harmonia.svg",
  "./images/poder.svg",
  "./images/projetar.svg",
  "./images/refletir.svg",
  "./images/harmonia.svg",
  "./images/poder.svg",
  "./images/projetar.svg",
  "./images/refletir.svg",
];
let selectedCards = [];

buttonStart.addEventListener("click", () => {
  homeScreen.classList.add("hide");
  gameScreen.classList.remove("hide");
  startGame();
});
function startGame() {
  deck.sort(() => Math.random() - 0.5);
  console.log(deck);
  creatCards();
  const cardsBack = document.querySelectorAll(".back");
  cardsBack.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("hide");
      card.previousElementSibling.classList.remove("hide");
      selectedCards.push(card.previousElementSibling);
      checkPair();
    });
  });
}
function creatCards() {
  deck.forEach((card) => {
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", card);
    imgTag.classList.add("hide");
    board.appendChild(imgTag);
    const imgBack = document.createElement("img");
    imgBack.setAttribute("src", "./images/fe.svg");
    imgBack.classList.add("back");
    board.appendChild(imgBack);
  });
}
function checkPair() {
  if (selectedCards.length !== 2) {
    return;}
    if (selectedCards[0].src === selectedCards[1].src) {
      console.log("as cartas são iguais");
      selectedCards =[];
      return
    }
    if (selectedCards[0].src !== selectedCards[1].src) {
      console.log("as cartas não são iguais");
      setTimeout(() => {
        setTimeout(() => {
            selectedCards[0].classList.add("hide");
            selectedCards[1].classList.add("hide");
      
            selectedCards[0].nextElementSibling.classList.remove("hide");
            selectedCards[1].nextElementSibling.classList.remove("hide");
      
            selectedCards = []
          }, 1200);
      })
    }

}
