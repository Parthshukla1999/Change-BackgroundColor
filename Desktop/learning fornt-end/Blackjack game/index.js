let firstCard = 10
let secondCard = 4
let sumel = document.getElementById("sum-el")
let hasBlackJack = false
let isAlive = true
let message = ""
let messageel = document.getElementById("message-el")

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
let sum = firstCard+secondCard

function startGame(){
    sumel.textContent = "sum : " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(message)
    messageel.textContent=message
}

