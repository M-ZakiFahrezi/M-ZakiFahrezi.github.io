---
layout: post
title: "Layout dengan SASS dan SCSS"
slug: pertemuan-8
lang: id
date: 2025-05-07
permalink: /id/pertemuan-8.html
---

Materi mengenai SASS dan SCSS

# 🧩 Membuat Layout Menggunakan SASS/SCSS

SASS dan SCSS adalah dua sintaks dari preprocessor SASS (Syntactically Awesome Stylesheets). Keduanya meningkatkan kemampuan CSS tradisional dengan fitur seperti **variabel**, **nesting (penyusunan bertingkat)**, dan **mixin**. Walaupun memiliki fitur yang sama, perbedaan terletak pada gaya penulisannya yang disesuaikan dengan preferensi developer.

---

## 🔍 Apa itu SCSS?

**SCSS (Sassy CSS)** adalah salah satu sintaks dari SASS yang sangat mirip dengan CSS biasa. Karena itu, SCSS lebih mudah dipahami oleh developer yang sudah terbiasa dengan CSS.

### Fitur Utama:

- **Variabel**: Menyimpan nilai yang dapat digunakan ulang (seperti warna atau font).
- **Nesting**: Menyusun selector secara hierarkis.
- **Mixin**: Blok gaya yang dapat digunakan kembali untuk menghindari duplikasi.
- **Inheritance**: Berbagi gaya antar selector dengan `@extend`.
- **Partial & Import**: Memecah kode ke dalam bagian-bagian kecil dan modular dengan `@import`.

**Contoh Output SCSS:**

```css
body {
  background-color: blue;
  color: red;
  font-size: 25px;
}
/* Ini akan diterapkan pada HTML hasil */
```

---

## 🧵 Apa itu SASS?

**SASS** adalah sintaks asli dari preprocessor SASS. Berbeda dengan SCSS, SASS menggunakan indentasi (spasi) alih-alih tanda kurung kurawal `{}` dan titik koma `;`.

### Fitur Utama:

- **Variabel**: Menyimpan nilai yang dapat digunakan ulang.
- **Nesting**: Menyusun CSS dengan cara yang lebih bersih.
- **Partials**: Membagi gaya ke dalam file kecil.
- **Mixin**: Menggunakan ulang blok kode antar selector.
- **Inheritance**: Menggunakan `@extend` untuk berbagi gaya.

**Contoh Output SASS:**

```css
body {
  background-color: blue;
  color: red;
  font-size: 25px;
}
/* Ini akan diterapkan pada HTML hasil */
```

---

## ⚖️ Perbedaan SCSS dan SASS

| Fitur          | SCSS                                 | SASS                                       |
| -------------- | ------------------------------------ | ------------------------------------------ |
| Sintaks        | Mirip CSS (menggunakan `{}` dan `;`) | Berdasarkan indentasi (tanpa `{}` dan `;`) |
| Ekstensi File  | `.scss`                              | `.sass`                                    |
| Kompatibilitas | Sepenuhnya kompatibel dengan CSS     | Tidak langsung kompatibel dengan CSS       |
| Fleksibilitas  | Familiar bagi pengguna CSS           | Lebih ringkas dan bersih                   |
| Penggunaan     | Cocok bagi yang transisi dari CSS    | Cocok bagi yang suka penulisan minimal     |

---

## ✅ Kapan Menggunakan SCSS?

SCSS cocok digunakan ketika:

- Kamu sudah terbiasa menulis CSS
- Membuat proyek berskala besar dan butuh struktur jelas
- Ingin kompatibilitas penuh dengan CSS standar

---

## ✅ Kapan Menggunakan SASS?

SASS cocok digunakan ketika:

- Kamu menyukai sintaks yang lebih ringkas dan minimal
- Proyek kamu kecil atau sedang
- Kamu tidak terlalu bergantung pada penulisan CSS standar

---

## 🎨 Gunakan SCSS untuk Styling Layout

Pada sesi lab kali ini, kamu akan menyusun ulang layout website menggunakan SCSS agar tampil lebih rapi dan menarik.

### Langkah-langkah:

1. Perbarui file `navigation.html` yang ada di folder `_includes`.
2. Tambahkan atau ubah kode SCSS di file `main.scss`.
3. Sesuaikan file `default.html` di folder `_layouts` untuk mengintegrasikan gaya layout baru.

Pastikan semua perubahan sesuai dengan struktur SCSS agar mudah dipelihara dan dibaca.

---

## 📝 Kesimpulan

SCSS dan SASS sama-sama menawarkan fitur canggih yang memperluas kemampuan CSS, seperti **variabel, mixin, nesting**, dan **struktur modular**. Pilihan antara SCSS atau SASS tergantung pada kenyamanan kamu terhadap sintaks:

- Gunakan **SCSS** jika kamu lebih terbiasa dengan penulisan CSS.
- Gunakan **SASS** jika kamu ingin penulisan yang lebih minimal dan bersih.

Keduanya dapat meningkatkan pengalaman dan efisiensi dalam menulis stylesheet modern.

> 🔗 Sumber: GeeksforGeeks — What is the difference between SCSS and SASS
