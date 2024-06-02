const timer = document.querySelector(".timer");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;

startBtn.addEventListener("click",()=>{
    if(paused)
        {
            paused = false;
            startTime = Date.now() - elapsedTime;
            intervalId = setInterval(updateTime,75);
        }
    console.log("Start");
})

pauseBtn.addEventListener("click",()=>{
    if(!paused)
        {
            paused =true;
            elapsedTime = Date.now() - startTime;
            clearInterval(intervalId);
        }
        console.log("Paused");
})

resetBtn.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    min = 0;
    sec = 0;
    console.log("Reset");
    timer.textContent = `${pad(hrs)}:${pad(min)}:${pad(sec)}`;

})

function updateTime(){
    elapsedTime = Date.now() - startTime;
    sec = Math.floor((elapsedTime/1000)%60);
    min = Math.floor((elapsedTime/(1000*60))%60);
    hrs = Math.floor((elapsedTime/(1000*60*60))%60);

    timer.textContent = `${pad(hrs)}:${pad(min)}:${pad(sec)}`;
}

function pad(unit){
    return (("0"+unit).length>2)?unit : "0"+unit;
}