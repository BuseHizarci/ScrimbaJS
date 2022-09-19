let firstCard = 10
//Birinci kartim
let secondCard = 4
//Ikinci kartim
// 1. Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard]
//Kartlarimi listeledigim arrayim 
let sum = firstCard + secondCard
//Kartlarimin toplami
let hasBlackJack = false
//boolean blackjack var mi yok mu ?
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
// Mesajimin tutuldugu yer
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // 2. Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}



function newCard() {
    let card = 6
    sum += card
    cards.push(card)

    renderGame()
}


function renderGame(){
cardsEl.textContent = " Cards " + cards[0] + cards [1]
sumEl.textContent = "Sum" + sum 
if (sum > 20 ) {
    message = "Do you want to draw ?"
    hasBlackJack = true
}
}
