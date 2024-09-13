let countdownInterval;
let timeRemaining = 0;
let isRunning = false;
let remainingTime = 0;
let pausedTime = 0;

const hoursSelect = document.getElementById('hours');
const minutesSelect = document.getElementById('minutes');
const secondsSelect = document.getElementById('seconds');
const countdownDisplay = document.getElementById('countdown');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const resumeBtn = document.getElementById('resumeBtn');
const hoursTimer = document.getElementById('hoursTimer');
const minutesTimer = document.getElementById('minutesTimer');
const secondsTimer = document.getElementById('secondsTimer');
const selectClass = document.getElementsByClassName('selectClass');


function updateDisplay(remainingSeconds) {
    let hours = Math.floor(remainingSeconds / 3600);
    let minutes = Math.floor((remainingSeconds % 3600) / 60);
    let secs = remainingSeconds % 60;

    countdownDisplay.innerHTML = `
        <div class="timer" id="hoursTimer">
        ${String(hours).padStart(2, '0')}
        </div>
        <div class="timer" id="minutesTimer">
        ${String(minutes).padStart(2, '0')}
        </div>
        <div class="timer" id="secondsTimer">
        ${String(secs).padStart(2, '0')}
        </div>`

}

function startCountdown() {

    if (pausedTime === 0) {
        if (isRunning) return;
        let hours = parseInt(hoursSelect.value, 10);
        let minutes = parseInt(minutesSelect.value, 10);
        let seconds = parseInt(secondsSelect.value, 10);
        timeRemaining = (hours * 3600) + (minutes * 60) + seconds;
        remainingTime = timeRemaining;
        if (remainingTime === 0) return countdownDisplay.textContent = "PLEASE SELECT THE TIME";
        isRunning = true;
        updateDisplay(remainingTime);
    }
    else {
        remainingTime = pausedTime;
        isRunning = true;
    }


    countdownInterval = setInterval(() => {
        if (remainingTime <= 0) {
            countdownForm1.reset();
            countdownForm2.reset();
            countdownForm3.reset();
            clearInterval(countdownInterval);
            isRunning = false;
            countdownDisplay.innerHTML = `<h1>Time's Up</h1>`;
            return;
        }
        remainingTime--;
        updateDisplay(remainingTime);
    }, 1000);
}

function stopCountdown() {
    if (!isRunning) return;
    clearInterval(countdownInterval);
    isRunning = false;
    pausedTime = remainingTime;

}

function resetCountdown() {
    if (isRunning) {
        clearInterval(countdownInterval);
        isRunning = false;
    }
    remainingTime = 0;
    pausedTime = 0;
    updateDisplay(remainingTime);
    countdownForm1.reset();
    countdownForm2.reset();
    countdownForm3.reset();

}

function resumeCountdown() {
    if (isRunning) return;
    startCountdown();
}

startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
resetBtn.addEventListener('click', resetCountdown);
resumeBtn.addEventListener('click', resumeCountdown);





