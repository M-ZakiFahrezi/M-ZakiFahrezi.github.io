document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleBtn) return; // Prevent error if element not found

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "volcano") {
    body.classList.add("volcano-mode");
    toggleBtn.classList.remove("fa-water");
    toggleBtn.classList.add("fa-volcano");
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("volcano-mode");

    if (body.classList.contains("volcano-mode")) {
      toggleBtn.classList.remove("fa-water");
      toggleBtn.classList.add("fa-volcano");
      localStorage.setItem("theme", "volcano");
    } else {
      toggleBtn.classList.remove("fa-volcano");
      toggleBtn.classList.add("fa-water");
      localStorage.setItem("theme", "default");
    }
  });
});

// search click
function openSearch() {
  document.getElementById("searchOverlay").classList.add("active");
}

function closeSearch() {
  document.getElementById("searchOverlay").classList.remove("active");
}

// clockbar menu
function openSidebar() {
  document.getElementById("sidebarOverlay").classList.add("active");
}

function closeSidebar() {
  document.getElementById("sidebarOverlay").classList.remove("active");
}

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const day = dayNames[now.getDay()];
  const dateNum = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  date.textContent = `${day}, ${dateNum} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();

// bolg-search
