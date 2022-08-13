let homeScoreBtnOne = document.getElementById("home-score-btn-1")
// Birinci buttonu tanimlamadik let ile 
// home-score-btn-1 u bul dedim ,

let homeStoreEl =document.getElementById("home-score")

// home score'a bunun icine yazdiracagim icin tanimlama yaptim
let homeScore = 2

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
// fonksiyon home scoreu bir artttiriyor daha once belirledigimiz homescore u kendimiz yazdik
// Id si ile kontrol edebildigimiz homescore - store un icine fonksiyonda arttirdigimizi yaziyoruz.


let GuestScoreBtnOne = document.getElementById("guest-home-btn-1")
let GuestStoreEl = document.getElementById("guest-score")
let guestScore = 2

function increaseGuestScoreOne(){
     guestScore +- 1
     guestStoreEl.textContent=homeScore
}