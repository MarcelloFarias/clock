let today = new Date();
let day = today.getDate();
let month = today.getMonth();
let year = today.getFullYear();
let weekDay = today.getDay();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
const displayDate = document.querySelector('.date').innerHTML = `${day} / ${month + 1} / ${year}`;
const displayWeekDay = document.querySelector('.week-day');
const displayClock = document.querySelector('.clock');

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

displayWeekDay.innerHTML = weekDay;

setInterval(function clockCounter() {
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

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    displayClock.innerHTML = `${hours} : ${minutes} : ${seconds}`;

}, 1000);