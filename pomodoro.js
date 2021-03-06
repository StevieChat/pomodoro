const workDuration = 1500;
const breakDuration = 300;
const longBreakDuration = 600;

var counter = 0;
var timer = workDuration;
var mins, seconds;
var countdown;
var timerStopped = true;
var currentStatus = "work";

const display = document.querySelector('#time');
const status = document.querySelector('#status');

const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener('click', startTimer, false);

const stopBtn = document.querySelector("#stopBtn");
stopBtn.addEventListener('click', stopTimer, false);

function startTimer(){

    if(timerStopped){

       timerStopped = false;
       countdown = setInterval(function(){

            displayCurrentStatus(currentStatus);

            mins = parseInt(timer/60);
            seconds = parseInt(timer%60);
            
            mins = mins < 10 ? "0" + mins : mins;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = mins + ":" + seconds;
            timer--;

            if(timer < 0){
                counter++;
                if(counter % 2 == 0){
                    timer = workDuration;
                    currentStatus = "work";
                }
                else{
                    timer = (counter + 1) % 8 == 0 ? longBreakDuration : breakDuration;
                    currentStatus = "break";
                }
            }

       }, 1000); 

    }
    return;
}

function stopTimer(){
    timerStopped = true;
    clearInterval(countdown);
    counter = 0;
    timer = workDuration;
    timerStopped = true;
    display.textContent = "00:00";
}

function displayCurrentStatus(currentStatus){
    switch(currentStatus){
        case 'work':
            status.textContent = "Current Status: Work";
            break;
        
        case 'break':
            status.textContent = "Current Status: Break";
            break;
    }
}