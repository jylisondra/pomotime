const pomo = document.getElementById('pomo-btn');
const short = document.getElementById('short-break-btn');
const long = document.getElementById('long-break-btn');


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





// Event listeners
pomo.addEventListener('click', () => {
    resetButtons();
    pomo.classList.toggle('active');
})

short.addEventListener('click', () => {
    resetButtons();
    short.classList.toggle('active');
})

long.addEventListener('click', () => {
    resetButtons();
    long.classList.toggle('active');
})

function resetButtons() {
    pomo.classList.remove('active');
    short.classList.remove('active');
    long.classList.remove('active');
}