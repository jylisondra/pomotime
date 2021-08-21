const home = document.getElementById('home');
const logs = document.getElementById('logs');
const about = document.getElementById('about');
const login = document.getElementById('login');
const pomo = document.getElementById('pomo-btn');
const short = document.getElementById('short-break-btn');
const long = document.getElementById('long-break-btn');
const speaker = document.getElementById('speaker');
const mute = document.getElementById('mute');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const play = document.getElementById('play-btn')
const pause = document.getElementById('pause-btn');

var paused, resume = false;
var secondsRemaining = 60;


// const timer = document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
//     </g>
//   </svg>
//   <span>
//     <!-- Remaining time label -->
//   </span>
// </div>
// `;
function resetButtons() {
    pomo.classList.remove('active');
    short.classList.remove('active');
    long.classList.remove('active');
}

function resetNav() {
    home.classList.remove('active');
    logs.classList.remove('active');
    about.classList.remove('active');
}

function timer (time) {
    let min = time;
    let s = secondsRemaining;
    console.log('s',s)
    if (resume === false) {
        min--;
    }
    const countDown = setInterval(function() {
        s--;
        minute.innerText = min;
        second.innerText = `:${s}`;
        if (s < 10) {
            second.innerText = `:0${s}`;
        }
        if (s === 0 && min > 0) {
            s = 60;
            min--;
        }
        if (s === 0 && min === 0) {
            clearInterval(countDown);
        }

        if (paused) {
            clearInterval(countDown);
            console.log('paused in set timeout');
            secondsRemaining = s;
        }
    }, 1000, min, s)
    console.log(time);
}

// function timer(time) {
//     let s = 60;
//     let min = time;
//     const sec = setInterval(function() {
//         s--;
//         min--;
//             if(s === 0 && min >= 0) {
//                 s = 3;
//                 min--;
//                 minute.innerText=min;
//                 if (min === 0) {
//                     minute.innerText = '00';
//                 }
//                 if(min < 0) {
//                     minute.innerText = '00';
//                     clearInterval(sec);
//                 }
//             } else if (s===0 && min === 0) {
//                 clearInterval(sec);
//             }
//             if (min < 10) {
//                 min.innerText =`0${min}`;
//             }
//             if (s < 10) {
//                 second.innerText =`:0${s}`;
//                 if(s === 0) {
//                     minute.innerText = '00';
//                 }
//             } else {
//                 second.innerText = `:${s}`;
//             }
//         }, 1000, min, s)
// }


function updateTimer(minutes, seconds) {
    minute.innerText = minutes;
    if(seconds === 0) {
        second.innerText = ':00';
    } else {
        second.innerText = `:${seconds}`;
    }
}


// Nav event listeners 
home.addEventListener('click', () => {
    resetNav();
    home.classList.add('active')
})

logs.addEventListener('click', () => {
    resetNav();
    logs.classList.add('active')
})

about.addEventListener('click', () => {
    resetNav();
    about.classList.add('active')
})


// pomo listeners
pomo.addEventListener('click', () => {
    resetButtons();
    updateTimer(25,0)
    pomo.classList.toggle('active');
})

short.addEventListener('click', () => {
    resetButtons();
    updateTimer(5,0)
    short.classList.toggle('active');
})

long.addEventListener('click', () => {
    resetButtons();
    updateTimer(30,0)
    long.classList.toggle('active');
})

// Sound event listeners
speaker.addEventListener('click', () => {
    speaker.classList.add('hidden');
    mute.classList.toggle('hidden');
})
mute.addEventListener('click', () => {
    mute.classList.add('hidden');
    speaker.classList.toggle('hidden');
})

// Timer event listeners
decrease.addEventListener('click', () => {
    let minutes = parseInt(minute.innerText);
    minutes--;
    minute.innerText = minutes;

})

increase.addEventListener('click', () => {
    let minutes = parseInt(minute.innerText);
    minutes++;
    minute.innerText = minutes;

})

play.addEventListener('click', () => {
    const minutes = parseInt(minute.innerText);
    timer(minutes);
    play.classList.add('hidden');
    pause.classList.toggle('hidden')
    paused = false;
})

pause.addEventListener('click', () => {
    pause.classList.add('hidden');
    play.classList.toggle('hidden');
    paused = true;
    resume = true;
    console.log(paused);
})
