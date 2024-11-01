const hour = document.querySelector("#hour-hand");
const minute = document.querySelector("#min-hand");
const second = document.querySelector("#sec-hand");
const ampm = document.querySelector("#period");
console.log(hour, minute, second, ampm);

setInterval(getCurrentTime, 1000);
function getCurrentTime() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";
  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hr > 12) {
    hr = hr - 12;
    hr = "0" + hr;
    am_pm = "PM";
  }

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
  ampm.textContent = am_pm;
}
