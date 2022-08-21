let firstCard = 3
let secondCard = 6


let sum = firstCard + secondCard 

if (sum < 21 ) { 
    console.log ( " Any other card ? ")

} else if ( sum === 21 ) {
    console.log("Blackjack")
}
else ( sum > 21 ) {
    console.log("You are out of the game")
}
// strictly equal === 