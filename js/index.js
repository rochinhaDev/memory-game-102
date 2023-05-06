const homeScreen = document.querySelector("#homeScreen");
const buttonStart = document.querySelector("#buttonStart");
const gameScreen = document.querySelector("#gameScreen");

buttonStart.addEventListener("click",()=>{
    homeScreen.classList.add("hide")
    gameScreen.classList.remove("hide")
})