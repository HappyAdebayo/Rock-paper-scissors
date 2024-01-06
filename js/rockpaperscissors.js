let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    loose: 0,
    Tie: 0
}

updateElement()

function playGame(playerMove) {

    const computerMove = pickComputerMove()
    let Result = ''
    if (playerMove === 'rock') {

        if (computerMove === 'rock') {
            Result = 'A tie'
        } else if (computerMove === 'scissors') {
            Result = 'You win'
        } else if (computerMove === 'paper') {
            Result = 'You lose'
        }


    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            Result = 'You win'
        } else if (computerMove === 'scissors') {
            Result = 'you lose'
        } else if (computerMove === 'paper') {
            Result = 'A tie'
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            Result = 'you lose'
        } else if (computerMove === 'scissors') {
            Result = 'A tie'
        } else if (computerMove === 'paper') {
            Result = 'You win'
        }
    }

    if (Result === 'You win') {
        score.wins++
    } else if (Result === 'you lose') {
        score.loose++
    } else if (Result === 'A tie') {
        score.Tie++
    }

    updateElement()
    document.querySelector('.total').innerHTML = Result
    document.querySelector('.totalResult').innerHTML = `You
<img src="./image/${playerMove}.jpeg" alt="" srcset="" class="rock-move">
<img src="./image/${computerMove}.jpeg" alt="" class="rock-move">
Computer
</p>`
    localStorage.setItem('score', JSON.stringify(score))


}

function updateElement() {
    document.querySelector('.updateScore').innerHTML = `Wins: ${score.wins} Tie: ${score.Tie} Loose: ${score.loose}`
}

function pickComputerMove() {
    let randomNumber = Math.random()
    let computerMove = ''

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'scissors'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'paper'
    }
    return computerMove
}