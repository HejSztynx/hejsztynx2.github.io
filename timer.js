let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timeRef = document.querySelector(".timer-text");
let int = null;
let state = 0;

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        if (state == 0) {
            [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
            timeRef.innerHTML = "00:00:00 ";
            int = setInterval(displayTimer, 10);
            state = 1;
        }
        else if (state == 1) {
            clearInterval(int);
            state = 0;
        }
    }
  })

// document.getElementById("start-timer").addEventListener("click", () => {
//     // if(int !== null) {
//         // clearInterval(int);
//     // }
//     if (state == 0) {
//         [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//         timeRef.innerHTML = "00 : 00 : 00 ";
//         int = setInterval(displayTimer, 10);
//         state = 1;
//     }
//     else if (state == 1) {
//         clearInterval(int);
//         state = 0;
//     }
// });

// document.getElementById("pause-timer").addEventListener("click", () => {
//     clearInterval(int);
// });

// document.getElementById("reset-timer").addEventListener("click", () => {
//     clearInterval(int);
//     [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//     timeRef.innerHTML = "00 : 00 : 00 ";
// }); 

function displayTimer() {
    milliseconds += 1;
    if(milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = 
        milliseconds < 10
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${m}:${s}:${ms}`;

}