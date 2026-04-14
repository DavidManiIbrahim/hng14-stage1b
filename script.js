const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateEpochMilliseconds() {
  if (!timeElement) return;
  timeElement.textContent = String(Date.now());
}

updateEpochMilliseconds();
setInterval(updateEpochMilliseconds, 1000);
