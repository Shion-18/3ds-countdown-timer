const countdownDate = new Date('2024-04-09T09:00:00'); // 2024年4月9日の午前9時に設定
const now = new Date();
const totalSeconds = (countdownDate - now) / 1000;

function updateCountdown() {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    if (totalSeconds <= 0) {
        clearInterval(countdownInterval);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
