const second = 1000;        /* milliseconds in a second */
const minute = second * 60; /* and in one minute */
const hour = minute * 60;   /* and in one hour */
const day = hour * 24;      /* and in one day */


const countdownDate = new Date("January 31, 2022 12:00:00");
const countdownTime = countdownDate.getTime();

/* Refresh the function each 1000ms = 1s */
setInterval(function () {
/* Difference between the year of reference and this moment */
const distance = countdownTime - new Date().getTime();

document.getElementById('deals-hours').innerText = Math.floor((distance % day) / hour);
document.getElementById('deals-minutes').innerText = Math.floor((distance % hour) / minute);
document.getElementById('deals-seconds').innerText = Math.floor((distance % minute) / second);
}, 1000)