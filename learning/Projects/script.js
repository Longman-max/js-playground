const startingMins = 10;
let time = startingMins * 60;
const countdownEl = document.querySelector("p");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:<span class="seconds">${seconds}</span>`;
  time--;

  if (time == 0) {
    time = startingMins * 60;
  }
}

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
  if (startButton.innerHTML === "START") {
    startButton.innerHTML = "STOP";
  } else {
    startButton.innerHTML = "START";
  }
});
