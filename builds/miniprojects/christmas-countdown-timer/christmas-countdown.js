// Set the date we're counting down to (December 25 of the current year)
const christmasDate = new Date(new Date().getFullYear(), 11, 25).getTime();

// Update the countdown every 1 second
const x = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = christmasDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result
  document.querySelector(".display-countdown").innerHTML = days;

  // If the countdown is over, display "Merry Christmas"
  if (distance < 0) {
    clearInterval(x);
    document.querySelector(
      ".display-countdown"
    ).innerHTML = `<p>Merry</p><p>Christmas</p>`;

    // This will also enable the emojis to blink to be visible when it is christmas day.
    const items = document.querySelector(".items");
    items.classList.add("blinking-items");
  }
}, 1000);

// document.querySelector(".display-countdown").innerHTML = "Merry Christmas!";
