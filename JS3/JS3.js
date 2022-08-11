let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 2

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}



let homeScoreButtonTwo = document.getElementById("home-score-btn-2")

function increaseHomeScoreTwo (){
    homeScore += 2
    homeStoreEl.textContent= homeScore
}
