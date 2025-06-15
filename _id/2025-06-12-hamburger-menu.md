---
layout: post
title: "Hamburger Menu"
slug: pertemuan-12A
lang: id
date: 2025-06-12
permalink: /id/pertemuan-12A.html
---

# Memahami Hamburger Menu

Hamburger menu adalah ikon navigasi modern yang menyerupai tiga garis horizontal (☰). Menu ini sangat populer di desain web responsif karena mampu menyembunyikan daftar tautan navigasi hingga pengguna membutuhkannya. Ideal digunakan pada tampilan mobile atau antarmuka yang ingin terlihat minimalis.

## 📌 Mengapa Menggunakan Hamburger Menu?

- Menghemat ruang pada tampilan layar kecil
- Menyembunyikan menu navigasi hingga dibutuhkan
- Memberikan tampilan bersih dan fokus ke konten utama
- Umum digunakan dan mudah dikenali oleh pengguna

## 🧱 Struktur HTML Dasar

```html
<!-- Ikon Hamburger -->
<i class="fas fa-bars hamburger" id="menu-toggle"></i>

<!-- Daftar Navigasi -->
<div class="nav-links">
  <a href="#">Beranda</a>
  <a href="#">Tentang</a>
  <a href="#">Kontak</a>
</div>
```

## 🎨 Gaya CSS

```css
.hamburger {
  font-size: 24px;
  cursor: pointer;
  display: none;
}

.nav-links {
  display: flex;
  gap: 10px;
}

.nav-links.active {
  display: block;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .nav-links {
    display: none;
    flex-direction: column;
  }
}
```

## ⚙️ JavaScript Interaksi

```javascript
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  toggle.classList.toggle("fa-bars");
  toggle.classList.toggle("fa-times");
});
```

## 🧠 Kesimpulan

Hamburger menu adalah solusi efektif untuk mengelola navigasi pada tampilan mobile. Dengan kombinasi HTML, CSS, dan JavaScript, kita bisa menciptakan pengalaman pengguna yang lebih fleksibel dan efisien.

---

> 💡 Tips: Pastikan ikon Font Awesome telah dimuat agar hamburger bisa tampil dengan benar.