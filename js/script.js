let clockH = document.querySelector('.clock__hours');
let clockM = document.querySelector('.clock__minutes');
let clockS = document.querySelector('.clock__seconds');

let countdownDays = document.querySelector(".countdown__days");
let countdownHours = document.querySelector(".countdown__hours")
let countdownMinutes = document.querySelector(".countdown__minutes")
let countdownSeconds = document.querySelector(".countdown__seconds")

let second = 1000;;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;

let finalDate = new Date('Dec 4,2022 00:00:00');

let startClock = () => {
    updateTime();
    setInterval(() => {
        updateTime();
        updateCountdown();
    }, 1000);
}

let updateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();


    clockH.style.transform = `rotate(${360 / 12 * hours}deg)`;
    clockM.style.transform = `rotate(${360 / 60 * minutes}deg)`;
    clockS.style.transform = `rotate(${360 / 60 * seconds}deg)`;
}


let updateCountdown = () => {

    let now = new Date();
    let diff = finalDate - now;
    console.log(diff);
    let diffObj = converttoHMS(diff);
    countdownDays.textContent = diffObj.days >=10 ? diffObj.days : '0'+ diffObj.days;
    countdownHours.textContent = diffObj.hours >=10 ? diffObj.hours : '0'+diffObj.hours;
    countdownSeconds.textContent = diffObj.seconds >=10 ? diffObj.seconds : '0'+diffObj.seconds;
    countdownMinutes.textContent = diffObj.minutes >=10 ? diffObj.minutes : '0'+diffObj.seconds;

}

let converttoHMS = (millis) => {
    let days = Math.floor(millis/day);
    let hours = Math.floor(millis % day / hour);
    let minutes = Math.floor(millis % hour / minutes);
    let seconds = Math.floor(millis % minute / second);

    return {days, hours, minutes, seconds}   
}

startClock();