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

let GuestScoreBtnOne = document.getElementById("guest-home-btn-1")
let GuestStoreEl = document.getElementById("guest-score")
let guestScore = 2

function increaseGuestScoreOne(){
     guestScore +- 1
     guestStoreEl.textContent=homeScore
}