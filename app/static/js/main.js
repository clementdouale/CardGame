document.addEventListener("DOMContentLoaded", function() {
    let timeLeft = 30;
    const timerElement = document.getElementById('timer');

    const timer = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            // Todo : Handle the end of the timer (e.g., submit the form automatically or show a message)
            alert("Time's up!");
        }
    }, 1000);
});
