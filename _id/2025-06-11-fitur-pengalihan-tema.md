---
layout: post
title: "fitur pergantian tema"
slug: pertemuan-11A
lang: id
date: 2025-06-11
permalink: /id/pertemuan-11A.html
---

# Fitur Pengalihan Tema

Fitur ini memungkinkan pengguna untuk mengganti tampilan visual situs web antara dua tema:

- **Mode Laut (default)** — tenang dan sejuk dengan warna laut.
- **Mode Gunung Api** — panas dan mencolok dengan nuansa lava yang menyala.

---

## 🔧 Komponen Utama

### 1. **Ikon Pengalih Tema**

```html
<i id="theme-toggle" class="fa fa-water"></i>
```

- Menggunakan ikon Font Awesome.
- `fa-water` mewakili **tema Laut**.
- `fa-volcano` (ikon kustom atau alternatif) mewakili **tema Gunung Api**.

### 2. **Logika JavaScript**

Script ini mengatur pergantian tema dan menyimpan preferensi pengguna menggunakan `localStorage`.

```javascript
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (!toggleBtn) return;

  // Memuat tema yang disimpan sebelumnya
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
```

### 🔍 Apa yang Dilakukan:

- Saat halaman dimuat, ia memeriksa tema yang disimpan di `localStorage`.
- Jika `"volcano"` disimpan, maka tema gunung api diterapkan beserta ikonnya.
- Ketika tombol ikon diklik:
  - Menambahkan atau menghapus class `volcano-mode` pada elemen `<body>`.
  - Mengubah ikon dan menyimpan preferensi ke `localStorage`.

---

## 🎨 CSS Styling

### Tema Laut (Default `body`)

```css
body {
  background-image: linear-gradient(
      to bottom,
      #05161a,
      #072e33,
      #0c7076,
      #0f908c,
      #6da5c0,
      #294d61
    ), repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.008) 0px, rgba(
          0,
          0,
          0,
          0.008
        ) 2px);
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
  color: #e0f7fa;
}
```

### Tema Gunung Api (`body.volcano-mode`)

```css
body.volcano-mode {
  background-image: linear-gradient(
      to bottom,
      #1b1e2f,
      #242f49,
      #384358,
      #ffa586,
      #b51a2b,
      #541a3e
    ), repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.01) 0px, rgba(
          0,
          0,
          0,
          0.01
        ) 2px);
  background-blend-mode: overlay;
}
```

---

## 💡 Tips Tambahan

- Gunakan transisi halus untuk UX yang lebih baik:
  ```css
  body {
    transition: background 0.5s ease-in-out;
  }
  ```
- Tambahkan label teks di samping ikon agar pengguna tahu fungsinya.
- Kamu juga bisa menambahkan lebih banyak tema dan mengatur pergantiannya melalui dropdown/menu.

---

## ✅ Kesimpulan

Fitur pengalih tema ini:

- Memberikan personalisasi tampilan bagi pengguna.
- Menyimpan preferensi secara permanen dengan `localStorage`.
- Memberikan variasi visual yang menarik dan interaktif.
