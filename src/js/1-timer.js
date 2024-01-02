import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"



const body = document.querySelector(".container-timer");
body.innerHTML = `
    <input type="text" id="datetime-picker" />
    <button type="button" data-start>Start</button>
    <div class="timer">
      <div class="field">
        <span class="value" data-days>00</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>00</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>00</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>00</span>
        <span class="label">Seconds</span>
      </div>
    </div>`;


const input = document.querySelector("#datetime-picker");
const startButton = document.querySelector("[data-start]");
let userSelectedDate = null;
let timer; 
startButton.disabled = true;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (!timer || !timer.isActive()) {
      const currentDate = new Date();
      if (userSelectedDate < currentDate) {
    iziToast.error({
     title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topRight',
      titleColor: '#FFF',
      messageColor: '#FFF',
      backgroundColor: '#EF4040',
      closeOnEscape: true
        });
        startButton.disabled = true;
      } else {
        startButton.disabled = false;
      }
    }

    console.log(userSelectedDate);
  },
};

flatpickr("#datetime-picker", options);

class Timer {
  timerElement = null;
  intervalId = null;

  constructor(endDate, onUpdate) {
    this.endDate = endDate;
    this.onUpdate = onUpdate;
  }

  isActive() {
    return this.intervalId !== null;
  }

  start() {
    const updateInterval = 1000;

    const updateTimer = () => {
      const now = new Date();
      const timeDifference = this.endDate - now;

      if (timeDifference <= 0) {
        this.stop();
        this.onUpdate(convertMs(0));
        startButton.disabled = false; 
      } else {
        const timeRemaining = convertMs(timeDifference);
        this.onUpdate(timeRemaining);
        setTimeout(updateTimer, updateInterval);
      }
    };

    if (!this.isActive()) {
      startButton.disabled = true;
      this.intervalId = setInterval(updateTimer, updateInterval);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  const daysElement = document.querySelector('[data-days]');
  const hoursElement = document.querySelector('[data-hours]');
  const minutesElement = document.querySelector('[data-minutes]');
  const secondsElement = document.querySelector('[data-seconds]');

  daysElement.textContent = addLeadingZero(days);
  hoursElement.textContent = addLeadingZero(hours);
  minutesElement.textContent = addLeadingZero(minutes);
  secondsElement.textContent = addLeadingZero(seconds);
}

startButton.addEventListener('click', () => {
  timer = new Timer(userSelectedDate, updateTimerDisplay);
  timer.start();
  startButton.disabled = true;
});





