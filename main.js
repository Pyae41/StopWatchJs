const start_stop = document.getElementById("start_stop");
const reset = document.getElementById("reset");
const stopwatch = document.getElementById("stopwatch");

let hrs = 0;
let mins = 0;
let secs = 0;
let stopTime = true;


function startTimer() {
    if (stopTime) {
        stopTime = false;
        timeCount();
    }
}

function stopTimer() {
    if (!stopTime) {
        stopTime = true
    }
}

function timeCount() {
    if (!stopTime) {
        secs = parseInt(secs);
        mins = parseInt(mins);
        hrs = parseInt(hrs);

        secs = secs + 1;

        if (secs == 60) {
            mins = mins + 1;
            secs = 0;
        }
        if (mins == 60) {
            hrs = hrs + 1;
            mins = 0;
            secs = 0;
        }

        if (secs < 10 || secs == 0) {
            secs = '0' + secs;
        }
        if (mins < 10 || mins == 0) {
            mins = '0' + mins;
        }
        if (hrs < 10 || hrs == 0) {
            hrs = '0' + hrs;
        }

        stopwatch.innerHTML = hrs + ':' + mins + ':' + secs;

        setTimeout("timeCount()", 1000);
    }
}

function resetTimer() {
    stopwatch.innerHTML = '00:00:00';
    hrs = 0;
    mins = 0;
    secs = 0;

    stopTimer();
    start_stop.innerHTML = "Start";
}

start_stop.addEventListener('click', () => {
    if (start_stop.innerHTML == "Start") {
        start_stop.innerHTML = "Stop"

        startTimer();

    } else {
        start_stop.innerHTML = "Start"
        stopTimer();
    }
})


reset.addEventListener('click', () => {
    resetTimer();
})

function stopWatch() {




}