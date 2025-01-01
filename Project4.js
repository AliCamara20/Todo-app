const startStopBtn =  document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
const displayTimer = document.querySelector(".timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading Zeroes;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables  for timer Status;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch(){
    seconds ++;

    if(seconds/60 === 1){
        seconds = 0;
        minutes ++
    

        if(minutes/60 === 1){
        minutes  = 0;
        hours ++;
        }

   }

    if(seconds < 10){
       leadingSeconds = "0" + seconds.toString();
}

    else{
     leadingSeconds= seconds;
    }


    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }

    else{
        leadingMinutes = minutes;
    }

    if(hours < 10){
        leadingHours = "0" + hours.toString();
    }

    else{
        leadingHours = hours;
    }



    displayTimer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;




}


startStopBtn.addEventListener("click", function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class = "fa-solid fa-pause" id = "pause"> `;
        timerStatus = "started";
    }

    else{
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class = "fa-solid fa-play" id = "play"><i>`
        timerStatus = "stopped";
    }


});

resetBtn.addEventListener("click", function(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    window.clearInterval(timerInterval);
    displayTimer.innerText = "00:00:00";

})

//window.setInterval(stopWatch, 1000);