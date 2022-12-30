const X_CLASS = 'x'
const O_CLASS = 'o'
const cellEl = document.querySelectorAll('[data-cell]')
const WINNING_COMB = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [2, 5, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
]

const board = document.getElementById('board')
const winnigMessageEl = document.getElementById("winMessage");
const winningTextMessage = document.querySelector("[data-win-text]")

const restartBtn = document.getElementById("restart")
console.log(restartBtn)

console.log(winningTextMessage)
let oTurn = true
console.log(cellEl)

startGame()
addHover()

restartBtn.addEventListener('click', startGame)

function startGame() {
    cellEl.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(O_CLASS)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setHover()
    winnigMessageEl.classList.remove('display')
}

function addHover() {
    board.classList.add(O_CLASS)
}

function handleClick(e) {
    const element = e.target
    const currentTurn = oTurn ? O_CLASS : X_CLASS

    placeMarker(element, currentTurn)

    TODO: //Win, Loss,Draw

    if (checkWin(currentTurn)) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    } else {
        turns()
        setHover()
    }
}

function endGame(draw) {
    if (draw) {
        winningTextMessage.innerText = "Draw!"
    } else {
        winningTextMessage.innerText = `${oTurn ? "O's" : "X's"} Wins!`
        console.log(winningTextMessage.innerText)
    }
    winnigMessageEl.classList.add('display')
}

function isDraw() {
    return [...cellEl].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    })
}


function placeMarker(element, currentTurn) {
    element.classList.add(currentTurn)
}

function turns() {
    oTurn = oTurn ? false : true
}

function setHover() {
    board.classList.remove(X_CLASS)
    board.classList.remove(O_CLASS)

    if (oTurn)
        board.classList.add(O_CLASS)
    else
        board.classList.add(X_CLASS)
}


function checkWin(currentTurn) {
    return WINNING_COMB.some(combinations => {
        return combinations.every(index => {
            return cellEl[index].classList.contains(currentTurn)
        })
    })
}

