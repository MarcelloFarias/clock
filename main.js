let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let weekDay = today.getDay();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
const displayDate = document.querySelector('.date').innerText = `${day} / ${month + 1} / ${year}`;
const displayWeekDay = document.querySelector('.week-day');
const displayClock = document.querySelector('.clock-field');

switch (weekDay) {
    case 0:
        weekDay = 'Sunday';
        break;
    case 1:
        weekDay = 'Monday';
        break;
    case 2:
        weekDay = 'Thuesday';
        break;
    case 3:
        weekDay = 'Wednesday';
        break;
    case 4:
        weekDay = 'Thursday';
        break;
    case 5:
        weekDay = 'Friday';
        break;
    case 6:
        weekDay = 'Saturday';
        break;
}

displayWeekDay.innerText = weekDay;

setInterval(function () {
    seconds++;

    if (seconds > 59) {
        seconds = 0;
        minutes++;

        if (minutes > 59) {
            minutes = 0;
            hours++;

            if (hours > 23) {
                hours = 0;
            }
        }
    }

    let formatClock = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;

    displayClock.innerText = formatClock;

}, 1000);