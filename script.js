const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');


const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set background year
year.textContent = currentYear + 1;


// Calculate how many days, hours, minutes and seconds are left from milliseconds input
function calculateTimeLeft(ms) {
  const dd = Math.floor(ms / 1000 / 60 / 60 / 24);
  const hh = Math.floor((ms / 1000 / 60 / 60) % 24);
  const mm = Math.floor((ms / 1000 / 60) % 60);
  const ss = Math.floor((ms / 1000) % 60);
  return { dd, hh, mm, ss };
}


function updateCountdown() {
  const currentTime = new Date();
  // get time left of this year in milliseconds
  const millisecondsLeft = newYearTime - currentTime;
  // derive days, hours, minutes and seconds until new year from millisecondsLeft
  const { dd, hh, mm, ss } = calculateTimeLeft(millisecondsLeft);
  // Update DOM
  days.textContent = dd;
  hours.textContent = hh;
  minutes.textContent = mm;
  seconds.textContent = ss;
}

// Show loading spinner until countdown has loaded
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000)

// Update countdown every second
setInterval(updateCountdown, 1000);
