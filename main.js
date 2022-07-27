const hoursElement = document.querySelector('.hour')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')
const millisecondsElement = document.querySelector('.miliseconds')

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const lapButton = document.querySelector('.lap')
const clearButton = document.querySelector('.clear')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})
pauseButton.addEventListener('click', () => {
    clearInterval(interval)
})

stopButton.addEventListener('click', () => {
    clearInterval(interval)
    stopTimer()
})

let hour = 00,
    minutes = 00,
    second = 00,
    milliseconds = 00,
    interval,
    counter = 0

function startTimer() {
    milliseconds++
    if (milliseconds < 9) {
        millisecondsElement.innerText = '0' + milliseconds
    }
    if (milliseconds > 9) {
        millisecondsElement.innerText = milliseconds
    }

    if (milliseconds > 99) {
        second++
        secondsElement.innerText = '0' + second
        milliseconds = 0
        millisecondsElement.innerText = '0' + milliseconds
    }
    if (second < 9) {
        secondsElement.innerText = '0' + second
    }
    if (second > 9) {
        secondsElement.innerText = second
    }
    if (second > 59) {
        minutes++
        minutesElement.innerText = '0' + minutes
        second = 0
        secondsElement.innerText = '0' + second
    }
    if (minutes < 9) {
        minutesElement.innerText = '0' + minutes
    }
    if (minutes > 9) {
        minutesElement.innerText = minutes
    }
    if (minutes > 59) {
        hour++
        hoursElement.innerText = '0' + hour
        minutes = 0
        minutesElement.innerText = '0' + minutes
    }
}

function stopTimer() {
    hour = 00
    minutes = 00
    second = 00
    milliseconds = 00
    hoursElement.textContent = '00'
    minutesElement.textContent = '00'
    secondsElement.textContent = '00'
    millisecondsElement.textContent = '00'
}

lapButton.addEventListener('click', () => {
    counter++
    const result = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results__info')
    block.innerHTML = `Result ${counter}: ${hour}: ${minutes}: ${second}: ${milliseconds}`
    result.append(block)
})

clearButton.addEventListener('click', () => {
    for (let i = 0; i < counter; i++) {
        const block = document.querySelector('.results__info')
        block.remove()
    }
    counter = 0
})