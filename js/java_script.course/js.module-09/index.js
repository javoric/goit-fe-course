'use strict'


const time = document.querySelector(".js-time");
const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");


let minutes;
let seconds;
let miliSeconds;

let counter = 0;
let deltaTime = 0;
let startTime = Date.now();

let timers = null;
let isActiv = false;

function start () {
if (!isActiv) {
  isActiv = true;
timers = setInterval(() => {
  const currentime = Date.now();

  deltaTime = (currentime - startTime);

  

  const timeee = new Date(deltaTime);
  
  minutes = timeee.getMinutes();
  seconds = timeee.getSeconds();
  miliSeconds = Number.parseInt(timeee.getMilliseconds() / 100);

  let min;
  let sec;
  let msec;

  if (minutes / 10 < 1) {
    min = `0${minutes}:`;
  } else {
    min = `${minutes}:`;
  } if ( seconds / 10 < 1) {
    sec = `0${seconds}.`;
  } else {
    sec = `${seconds}.`;
  };

  msec = `${miliSeconds}`;
  time.textContent = (min + sec + msec);

  
}, 100)}
};

function lep () {
  clearInterval(timers);
  isActiv = false;
}

function reset () {
  clearInterval(timers);
  isActiv = false;
  time.textContent = startTime;
}

startBtn.addEventListener('click', start);
 
stopBtn.addEventListener('click', lep)

resetBtn.addEventListener('click', reset)





