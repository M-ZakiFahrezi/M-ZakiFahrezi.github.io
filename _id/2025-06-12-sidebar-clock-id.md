---
layout: post
title: "Sidebar Clock"
slug: pertemuan-12B
lang: id
date: 2025-06-12
permalink: /id/pertemuan-12B.html
---

# Membuat Sidebar Clock dengan HTML, CSS, dan JavaScript

Fitur **Sidebar Clock** memungkinkan pengguna untuk melihat waktu dan tanggal saat ini dengan tampilan yang menarik di samping halaman web. Fitur ini berguna untuk memberikan informasi real-time kepada pengguna secara interaktif.

## 1. Struktur HTML

```html
<!-- Ikon jam untuk membuka sidebar -->
<i class="fa-solid fa-clock" onclick="openSidebar()"></i>

<!-- Sidebar overlay -->
<div id="sidebarOverlay" class="sidebar">
  <span onclick="closeSidebar()" class="closebtn">&times;</span>
  <div id="clock" class="clock-display"></div>
  <div id="date" class="date-display"></div>
</div>
```

## 2. CSS untuk Sidebar dan Tampilan Jam

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

## 3. JavaScript untuk Mengontrol Sidebar dan Menampilkan Waktu

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

  const dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

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

## 4. Kesimpulan

Sidebar Clock adalah fitur sederhana namun efektif untuk mempercantik tampilan dan memberikan informasi penting secara langsung kepada pengguna. Dengan HTML, CSS, dan JavaScript, kita bisa membangun fungsi interaktif seperti ini dengan mudah.
