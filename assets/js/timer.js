export default function timerHandler() {
  let hours = 0;
  let minutes = 30;
  let seconds = 0;
  let restInMilliseconds = 1000 * (seconds + minutes * 60 + hours * 60 * 60);

  function insertTimeUnit(selector, timeUnit) {
    if (timeUnit < 10) {
      document.querySelector(selector).innerHTML = `0${timeUnit}`;
    } else {
      document.querySelector(selector).innerHTML = `${timeUnit}`;
    }
  }
  function createTimer() {
    insertTimeUnit('.timer__el_hours', hours);
    insertTimeUnit('.timer__el_minutes', minutes);
    insertTimeUnit('.timer__el_seconds', seconds);
  }
  function refreshTimer() {
    restInMilliseconds -= 1000;

    hours = Math.floor(restInMilliseconds / 1000 / 60 / 60);
    minutes = Math.floor((restInMilliseconds - (hours * 60 * 60 * 1000)) / 1000 / 60);
    seconds = Math.floor((restInMilliseconds - (hours * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000);

    createTimer();

    if (restInMilliseconds < 1000) {
      minutes = 30;
      restInMilliseconds = 1000 * (seconds + minutes * 60 + hours * 60 * 60);
    }
  }
  function startTimer() {
    createTimer();
    setInterval(refreshTimer, 1000);
  }

  startTimer();
}
