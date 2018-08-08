var statusFlag = "work"

var startBtn = document.querySelector("#startBtn");
startBtn.addEventListener('click', start, false);

function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    
    function timer() {
        console.log(Date.now());
        console.log(start);
        diff = duration - (((Date.now() - start) / 1000) | 0);
        
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(diff <= 0) {
            start = Date.now() + 1000;

            if(statusFlag == "work"){
                statusFlag = "rest";
                startTimer(5, display);
            }else{
                statusFlag = "work";
                startTimer(10, display);
            }
        }

    };

    timer();
    setInterval(timer, 1000);
}

function start () {
    var initialTime = 10,
        display = document.querySelector('#time');
    startTimer(initialTime, display);
};