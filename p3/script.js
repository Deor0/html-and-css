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
let oTurn = true
console.log(cellEl)

addHover()


cellEl.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true })
})

function addHover() {
    board.classList.add(O_CLASS)
}

function handleClick(e) {
    const element = e.target
    const currentTurn = oTurn ? O_CLASS : X_CLASS

    placeMarker(element, currentTurn)

    TODO: //Win, Loss,Draw

    turns()
    setHover()
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