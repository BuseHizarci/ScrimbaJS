let firstCard = 30 
let secondCard = 40 
let thirdCard = 50 


let cards = [firstCard , secondCard , thirdCard]
let sum = thirdCard+secondCard+firstCard

let hasBlackJack = true
let isAlive = true 
let message = ""


let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById ( "cards-el")


function renderGame(){

 cardsEl.textContent = "Cards: " + cards[0]
 sumEl.textContent = "Sum" + sum
    


}