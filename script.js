let countdownInterval;

document.getElementById("startBtn").addEventListener("click", () => {
  clearInterval(countdownInterval); // clear any existing timer

  const inputDate = document.getElementById("datetime").value;
  const targetDate = new Date(inputDate).getTime();

  if (!inputDate) {
    alert("Please select a date and time!");
    return;
  }
// Start the countdown (updates every 1 second)
  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

 // If countdown has finished
    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("message").textContent = "Time's up!";
      
// Add "shake" effect to body for 0.5s
      document.body.classList.add("shake");
      setTimeout(() => {
        document.body.classList.remove("shake");
      }, 500);

      document.getElementById("days").textContent = "0";
      document.getElementById("hours").textContent = "0";
      document.getElementById("minutes").textContent = "0";

      document.getElementById("seconds").textContent = "0";
// Remove the "Time's up!" message after 2 seconds
      setTimeout(() => {
        document.getElementById("message").textContent = "";
      }, 2000);
    } 
    
// Calculate remaining time in days, hours, minutes, seconds
    else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    }
  }, 1000);
});