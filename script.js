function calculateTimeLeft(endTime) {
  const time = endTime.getTime() - Date.now();
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  return {
    time,
    days,
    hours,
    minutes,
    seconds,
  }
}

function initializeCountDown(endingTime) {
  const clock = document.getElementById('countdown');
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  function updateClock() {
    const t = calculateTimeLeft(endingTime);
    daysElement.innerHTML = t.days;
    hoursElement.innerHTML = t.hours;
    minutesElement.innerHTML = t.minutes;
    secondsElement.innerHTML = t.seconds;

    // Stop interval if less than 1 sec
    if (t.time <= 1000) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  // Update clock every second
  const timeinterval = setInterval(updateClock, 1000);
}

// countDown timer set to two days
const countDownTime =  1000 * 60 * 60 * 24 * 2;

const endingTime = new Date(Date.now() + countDownTime);

initializeCountDown(endingTime);
