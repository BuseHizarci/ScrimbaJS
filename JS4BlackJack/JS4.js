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

// Check if the person is elegible for a birthday card from the King! (100)

let age = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
    console.log("Not elegible")
} else if (age === 100) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}
let firstCard = 10
let secondCard = 7
let sum = firstCard + secondCard + 10

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"


if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else {
    console.log("You're out of the game! 😭")
}
