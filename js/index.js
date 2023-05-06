const homeScreen = document.querySelector("#homeScreen");
const buttonStart = document.querySelector("#buttonStart");
const gameScreen = document.querySelector("#gameScreen");
const board = document.querySelector("#board")
//variareis
const deck =[
    "./images/harmonia.svg",
    "./images/poder.svg",
    "./images/projetar.svg",
    "./images/refletir.svg",
    "./images/harmonia.svg",
    "./images/poder.svg",
    "./images/projetar.svg",
    "./images/refletir.svg"
]

buttonStart.addEventListener("click",()=>{
    homeScreen.classList.add("hide")
    gameScreen.classList.remove("hide")
})