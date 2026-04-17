const timeElement = document.querySelector('[data-testid="test-user-time"]');
const dayElement = document.querySelector('[data-testid="test-user-day"]');

// Get current day name
function getCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date().getDay()];
}

// Update epoch time
function updateEpochMilliseconds() {
  if (!timeElement) return;
  timeElement.textContent = String(Date.now());
}

// Update day (runs once since it changes daily, not every second)
function updateDay() {
  if (!dayElement) return;
  dayElement.textContent = getCurrentDay();
}

// Initialize values
updateEpochMilliseconds();
updateDay();

// Live time update
setInterval(updateEpochMilliseconds, 1000);