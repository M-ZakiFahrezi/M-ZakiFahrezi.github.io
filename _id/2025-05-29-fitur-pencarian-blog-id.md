---
layout: post
title: "fitur pencarian blog"
slug: pertemuan-11
lang: id
date: 2025-05-29
permalink: /id/pertemuan-11.html
---

# Fitur Pencarian blog

Fitur pencarian ini memungkinkan pengunjung situs untuk mencari **judul** atau **ringkasan** (excerpt) dari postingan blog berdasarkan **kata kunci** yang diketikkan.

## ✨ Tujuan Fitur

Fitur pencarian membantu pengguna menemukan postingan blog yang relevan dengan cepat, hanya dengan mengetikkan kata kunci tertentu.

---

## 🧩 Komponen Utama

### 1. **Input dan Tombol Pencarian**

HTML berikut membuat **input box** dan **tombol** yang digunakan untuk memicu pencarian:

```html
<div class="search-container">
  <input
    type="text"
    id="searchBox"
    class="search-input"
    placeholder="Cari blog..."
  />
  <button class="search-button" onclick="searchBlog()">Cari</button>
</div>
```

- `id="searchBox"` → tempat pengguna mengetik kata kunci.
- `onclick="searchBlog()"` → ketika tombol ditekan, fungsi `searchBlog()` dipanggil.

---

## ⚙️ Cara Kerja Fungsi `searchBlog()`

Fungsi ini ditulis dalam JavaScript dan berfungsi untuk **memfilter** postingan berdasarkan **judul** dan **cuplikan (excerpt)**.

### 💻 Kode Fungsi

```javascript
function searchBlog() {
  const keyword = document.getElementById("searchBox").value.toLowerCase();
  const lang = localStorage.getItem("lang") || "id";
  const blogItems = document.querySelectorAll(".blog-item");

  blogItems.forEach((item) => {
    const itemLang = item.getAttribute("data-lang");
    const title = item.querySelector(".blog-title").textContent.toLowerCase();
    const excerpt = item
      .querySelector(".blog-excerpt")
      .textContent.toLowerCase();
    const matches = title.includes(keyword) || excerpt.includes(keyword);

    item.style.display = matches && itemLang === lang ? "block" : "none";
  });
}
```

---

## 🔍 Penjelasan Langkah demi Langkah

1. **Mengambil Kata Kunci**

   ```js
   const keyword = document.getElementById("searchBox").value.toLowerCase();
   ```

   - Ambil nilai dari input pencarian.
   - Gunakan `.toLowerCase()` untuk membuat pencarian **tidak sensitif terhadap huruf kapital**.

2. **Deteksi Bahasa Saat Ini**

   ```js
   const lang = localStorage.getItem("lang") || "id";
   ```

   - Cek preferensi bahasa dari `localStorage`.
   - Default ke `"id"` (Bahasa Indonesia) jika tidak ditemukan.

3. **Ambil Semua Postingan**

   ```js
   const blogItems = document.querySelectorAll(".blog-item");
   ```

   - Ambil semua elemen postingan dari halaman.

4. **Looping dan Pencocokan**

   ```js
   blogItems.forEach((item) => {
     const itemLang = item.getAttribute("data-lang");
     const title = item.querySelector(".blog-title").textContent.toLowerCase();
     const excerpt = item
       .querySelector(".blog-excerpt")
       .textContent.toLowerCase();
     const matches = title.includes(keyword) || excerpt.includes(keyword);

     item.style.display = matches && itemLang === lang ? "block" : "none";
   });
   ```

   - Ambil atribut `data-lang` dari masing-masing postingan untuk memastikan cocok dengan bahasa yang sedang digunakan.
   - Ambil teks dari judul dan excerpt.
   - Cek apakah `keyword` **ada di dalam** `title` atau `excerpt`.
   - Jika cocok dan bahasanya sesuai, tampilkan elemen (`display: block`), jika tidak, sembunyikan (`display: none`).

---

## 🧠 Searching Berdasarkan Apa?

Fitur pencarian ini mencari **kata kunci** dalam:

- **Judul postingan** (`.blog-title`)
- **Cuplikan/ringkasan konten** (`.blog-excerpt`)

> Fitur ini **tidak** mencari di dalam isi penuh artikel (`.content`), hanya pada ringkasan yang ditampilkan di halaman blog utama.

---

## 💡 Tips Pengembangan Selanjutnya

- 🔎 Tambahkan **highlight** pada hasil pencarian yang cocok.
- 📜 Gunakan **fuzzy search** atau algoritma pencarian yang lebih cerdas (seperti Fuse.js).
- 🔄 Tambahkan pencarian real-time (langsung saat mengetik, tanpa klik tombol).
- 🌐 Perluas pencarian ke seluruh isi artikel, jika diperlukan.

---

## ✅ Kesimpulan

Fitur pencarian blog ini bekerja secara sederhana namun efektif, dengan:

- Penggunaan JavaScript murni tanpa library tambahan.
- Pemfilteran berdasarkan teks judul dan excerpt.
- Dukungan filtering berdasarkan **bahasa pilihan** pengguna.
- Meningkatkan pengalaman pengguna dalam menemukan konten yang relevan.
