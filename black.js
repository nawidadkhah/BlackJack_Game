let massageEL = document.getElementById("massage")
let sumEL = document.getElementById("sumEL")
let cardEL = document.getElementById("cardEL")
let startEL = document.getElementById("start")
let playerEL = document.getElementById("player-money")
let wins = document.getElementById("gameWin")
let losts = document.getElementById("gameLose")
let massage = ""
let cardList = []
let sum = 0
let isLose = playAgain = isWon = false
let player = {
    name: "Chips",
    chip: 200
}
let detail = {
    win: "Number of games you won",
    win_time: 0,
    lost: "Number of games you lost",
    lost_time: 0
}

playerEL.textContent = player.name + " : $" + player.chip
wins.textContent = detail.win + " : " + detail.win_time
losts.textContent = detail.lost + " : " + detail.lost_time
function startGame() {
    if (player.chip === 0) {
        alert("Sorry you don't have any chips to play ")
    } else {
        if (playAgain) {
            cardList = []
            sum = 0
            isLose = false
            isWon = false
        }
        playAgain = true
        for (let i = 0; i < 2; i++) {
            let firstCard = getRandomeCard()
            cardList.push(firstCard)
            sum += firstCard
        }
        renderGame()
        startEL.textContent = " PLAY AGAIN "
    }

}

function renderGame() {
    cardEL.textContent = "Cards : "
    for (let index = 0; index < cardList.length; index++) {
        cardEL.textContent += cardList[index] + ", ";

    }
    if (sum < 21) {
        massage = " pick another card"
    } else if (sum === 21) {
        massage = " you win "
        isWon = true
        player.chip += 20
        playerEL.textContent = player.name + " : $" + player.chip
        detail.win_time+=1
        wins.textContent = detail.win + " : " + detail.win_time
    } else {
        massage = " you lose"
        isLose = true
        player.chip -= 20
        playerEL.textContent = player.name + " : $" + player.chip
        detail.lost_time+=1
        losts.textContent = detail.lost + " : " + detail.lost_time
    }
    massageEL.textContent = massage

    sumEL.textContent = "Sum : " + sum
    if (isLose) {
        alert('you lose, play again')
    } else if (isWon) {
        alert('you won, congrats')
    }
}

function newCard() {
    if (isLose) {
        alert('you lose, play again')
    } else {
        let card = getRandomeCard()
        sum += card
        cardList.push(card)
        renderGame()
    }
}

function getRandomeCard() {
    let rand = Math.floor(Math.random() * 13 + 1)
    if (rand === 1) {
        return 11
    } else if (rand > 10) {
        return 10
    } else {
        return rand
    }
}