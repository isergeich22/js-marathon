const startBtn = document.querySelector('#start')

const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')

const timeLeft = document.querySelector('#time')
const board = document.querySelector('#board')

const GRADIENTS = [
    {
        color1: '#16D9E3',
        color2: '#30C7EC',
        color3: '#46AEF7'
    },
    {
        color1: '#c62828',
        color2: '#d32f2f',
        color3: '#e53935'
    },
    {
        color1: '#2e7d32',
        color2: '#388e3c',
        color3: '#43a047'
    }
]

let time = 0
let score = 0

startBtn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})
function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle()
    timeLeft.innerHTML = `00:${time}`
}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    }else{
        let current = --time
        if(current < 10) {
            current = `0${current}`
        }
        setTime(current)
    }
}
    


function setTime(value) {
    timeLeft.innerHTML = `00:${value}`
}

function finishGame() {
    timeLeft.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1>`    
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomSize(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomSize(0, width - size)
    const y = getRandomSize(0, height - size)    

    // console.log(index);    

    // console.log(x, y);

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    setBackground(circle)

    board.append(circle)
}

function getRandomSize(min, max) {
   return Math.round(Math.random() * (max - min) + min)
}

function setBackground(element) {
    const gradient = getRandomGradient()
    element.style.background = gradient
}

function getRandomGradient() {
    const index = Math.floor(Math.random() * GRADIENTS.length)
    return `linear-gradient(90deg, ${GRADIENTS[index].color1} 0%, ${GRADIENTS[index].color2} 47%, ${GRADIENTS[index].color3} 100%)`
}
