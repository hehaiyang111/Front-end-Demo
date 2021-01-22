const daysEL = document.getElementById("days")
const hoursEL = document.getElementById("hours")
const minsEL = document.getElementById("mins")
const seconds = document.getElementById("seconds")

const wantDays = "1 Jan 2022"
function countdown() {
    const wantDaysDate = new Date(wantDays);
    const currentDate = new Date();
    const totalSeconds = (wantDaysDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const senconds = Math.floor(totalSeconds) % 60

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    mins.innerHTML = minsEL;
    seconds.innerHTML = senconds;
}

countdown();

setInterval(countdown,1000)

