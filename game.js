const board = document.querySelector('#board')
const SQUARES_NUMBER = 500

const COLORS = ['#4527a0', '#c62828', '#006064', '#00c853', '#76ff03', '#e91e63', '#2196f3', '#3f51b5']

for (let i = 0; i < SQUARES_NUMBER; i++ ) {

    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)

}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}