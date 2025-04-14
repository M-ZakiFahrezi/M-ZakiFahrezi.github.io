---
layout: post
title: "Instalasi Ruby dan Jekyll"
date: 2025-02-20
---

Materi tentang Instalasi Ruby dan Jekyll

## Instalasi Ruby dan Jekyll

Pada pertemuan pertama mata kuliah Workshop Web Dasar, kami mempelajari bagaimana cara menginstal **Ruby** dan **Jekyll**, dua komponen penting yang digunakan untuk membangun website statis menggunakan framework Jekyll.

### Apa itu Ruby dan Jekyll?

- **Ruby** adalah bahasa pemrograman yang digunakan oleh Jekyll.
- **Jekyll** adalah static site generator, yaitu alat yang mengubah file teks biasa (Markdown, HTML) menjadi website statis yang bisa langsung di-hosting, misalnya di GitHub Pages.

---

### Langkah-langkah yang kami lakukan:

1. **Mengunduh dan Menginstal Ruby**

   Kami mengunjungi situs [https://rubyinstaller.org](https://rubyinstaller.org) untuk pengguna Windows, lalu menginstal Ruby versi terbaru. Untuk pengguna macOS dan Linux, Ruby biasanya sudah tersedia atau dapat diinstal menggunakan terminal.

2. **Mengecek Ruby di terminal**

   Setelah instalasi, kami membuka terminal atau command prompt dan mengetik: "ruby -v;"
   untuk memastikan Ruby sudah terinstal dengan benar.

3. **Menginstal Bundler dan Jekyll**

Dengan Ruby yang sudah terpasang, kami menjalankan perintah berikut: "gem install bundler jekyll"
Perintah ini akan menginstal Jekyll dan Bundler ke dalam sistem, yang dibutuhkan untuk membuat dan mengelola proyek Jekyll.

4. **Membuat Proyek Jekyll Baru**

Setelah instalasi selesai, kami membuat project baru dengan: "jekyll new my-website"

Ini akan menghasilkan struktur folder Jekyll lengkap di dalam folder `my-website`.

5. **Menjalankan Server Lokal**

Kami masuk ke dalam folder proyek dengan: "cd my-website"

Lalu menjalankan website lokal menggunakan: "jekyll serve"

Setelah itu, kami membuka browser dan mengakses:
http://localhost:4000

Di situ, kami bisa melihat website statis Jekyll pertama kami berjalan dengan baik.

---

### Kesimpulan

Instalasi Ruby dan Jekyll merupakan langkah awal yang sangat penting sebelum membangun website. Kami jadi memahami bahwa meskipun Jekyll adalah alat sederhana, ia memiliki struktur dan alur kerja yang profesional — dimulai dari pengaturan lingkungan kerja, hingga memulai proyek dan melihat hasilnya secara lokal di browser.

Ini adalah awal dari perjalanan kami sebagai pengembang web.
