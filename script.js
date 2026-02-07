function updateStoreStatus() {
  const statusEl = document.getElementById("store-status");

  const now = new Date();
  const day = now.getDay(); // 0 = Sunday

  // Sunday closed
  if (day === 0) {
    statusEl.textContent = "Closed";
    statusEl.className = "closed";
    return;
  }

  const openTime = new Date();
  openTime.setHours(10, 30, 0); // 10:30 AM

  const closeTime = new Date();
  closeTime.setHours(20, 0, 0); // 8:00 PM

  if (now >= openTime && now <= closeTime) {
    statusEl.textContent = "Open now";
    statusEl.className = "open";
  } else {
    statusEl.textContent = "Closed";
    statusEl.className = "closed";
  }
}

// Run on load
updateStoreStatus();

// Optional: update every minute
setInterval(updateStoreStatus, 60000);
