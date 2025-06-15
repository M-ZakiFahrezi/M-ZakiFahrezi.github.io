---
layout: post
title: "Sidebar Clock"
slug: pertemuan-12B
lang: en
date: 2025-06-12
permalink: /en/pertemuan-12B.html
---
# Creating a Sidebar Clock with HTML, CSS, and JavaScript

The **Sidebar Clock** feature allows users to view the current time and date with an elegant sidebar display. This can be useful to present real-time information in an interactive way.

## 1. HTML Structure

```html
<!-- Clock icon to open the sidebar -->
<i class="fa-solid fa-clock" onclick="openSidebar()"></i>

<!-- Sidebar overlay -->
<div id="sidebarOverlay" class="sidebar">
  <span onclick="closeSidebar()" class="closebtn">&times;</span>
  <div id="clock" class="clock-display"></div>
  <div id="date" class="date-display"></div>
</div>
```

## 2. CSS for Sidebar and Clock Styling

```css
.sidebar {
  position: fixed;
  top: 0;
  right: -300px;
  width: 250px;
  height: 100%;
  background-color: #222;
  color: #fff;
  padding: 20px;
  transition: right 0.3s ease;
  z-index: 1000;
}

.sidebar.active {
  right: 0;
}

.clock-display {
  font-size: 2em;
  margin-top: 20px;
}

.date-display {
  margin-top: 10px;
  font-size: 1.2em;
}

.closebtn {
  font-size: 30px;
  cursor: pointer;
}
```

## 3. JavaScript for Sidebar Control and Real-Time Clock

```javascript
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

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

  const day = dayNames[now.getDay()];
  const dateNum = now.getDate();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();

  clock.textContent = `${hours}:${minutes}:${seconds}`;
  date.textContent = `${day}, ${dateNum} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
```

## 4. Conclusion

The Sidebar Clock is a simple but effective feature to enhance the look of your website and provide important real-time information. Using HTML, CSS, and JavaScript, we can easily build interactive features like this.
