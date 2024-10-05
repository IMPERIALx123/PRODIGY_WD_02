let timer;
let elapsedTime = 0;
let running = false;

const display = document.getElementById('display');
const laplist = document.getElementById('lapList');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

function startTimer(){
    if(!running){
        running = true;
        timer = setInterval(() => {
            elapsedTime++;
            display.innerText = formatTime(elapsedTime);
        }, 1000);
    }
}

function stopTimer(){
    running = false;
    clearInterval(timer);
}

function resetTimer(){
    startTimer();
    running = false;
    clearInterval(timer);
    elapsedTime = 0;
    display.innerText = '00:00:00';
    laplist.innerHTML = "";
}

function recordLap(){
    if(running){
        const lapTime = document.createElement('div');
        lapTime.innerText = formatTime(elapsedTime);
        laplist.appendChild(lapTime);
    }
}

function formatTime(seconds){
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
}