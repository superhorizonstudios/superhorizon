// Countdown Timer
const countdown = () => {
  const tournamentDate = new Date("2025-02-15T00:00:00").getTime();
  const now = new Date().getTime();
  const timeDiff = tournamentDate - now;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;

  if (timeDiff <= 0) {
    clearInterval(timer);
    document.querySelector(".countdown-section h2").innerText = "Tournament Has Started!";
  }
};

const timer = setInterval(countdown, 1000);