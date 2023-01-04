
setInterval(setClock, 1000)

const minuteHand = document.querySelector('[data-minute]')
const hourHand = document.querySelector('[data-hour]')
const secondHand = document.querySelector('[data-second]')

function setClock() {
    const date = new Date();

    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hour = (minutes + date.getHours()) / 12;

    setRotation(secondHand, seconds)
    setRotation(minuteHand, minutes)
    setRotation(hourHand, hour)
}

function setRotation(hand, rotation) {
    hand.style.setProperty('--rotation', rotation * 360)
}

setClock()