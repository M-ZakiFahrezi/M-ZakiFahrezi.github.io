---
layout: post
title: "Laravel"
slug: pertemuan-14
lang: id
date: 2025-06-25
permalink: /id/laravel-awal.html
---

# Tahap Awal Menggunakan Laravel: Cara Menggunakan dan Manfaat Laravel

Laravel adalah salah satu framework PHP paling populer dan banyak digunakan secara luas oleh pengembang web di seluruh dunia. Framework ini dirancang untuk mempermudah proses pengembangan aplikasi web yang elegan, cepat, dan efisien.

Dalam artikel ini, kita akan membahas tahap awal penggunaan Laravel, mulai dari pengertian singkat, manfaat, cara instalasi, konfigurasi database, hingga menjalankan server lokal.

---

## Apa Itu Laravel?

Laravel adalah framework open-source berbasis PHP yang menggunakan pendekatan Model-View-Controller (MVC). Diciptakan oleh **Taylor Otwell**, Laravel bertujuan untuk membuat proses pengembangan aplikasi web menjadi lebih mudah, menyenangkan, dan produktif.

---

## Manfaat Menggunakan Laravel

Berikut beberapa alasan mengapa banyak developer memilih Laravel:

- ✅ **Routing yang mudah**
- 🔐 **Keamanan bawaan**
- 📦 **Fitur lengkap**
- 📄 **Blade Templating**
- 🧩 **Ekosistem luas**

---

## Persiapan Sebelum Menggunakan Laravel

1. PHP versi 8.1 atau lebih tinggi
2. Composer
3. MySQL
4. (Opsional) Node.js & NPM

---

## Instalasi Laravel

```bash
composer create-project laravel/laravel latihvel
cd nama-proyek
```

---

## Menjalankan Server Laravel

```bash
php artisan serve
```

Laravel akan berjalan di `http://127.0.0.1:8000`.

---

## Konfigurasi Database di File `.env`

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=siswa
DB_USERNAME=root
DB_PASSWORD=
```

Penjelasan:

- **DB_CONNECTION**: Jenis database yang digunakan (misalnya mysql)
- **DB_HOST**: Alamat server database (127.0.0.1 untuk lokal)
- **DB_PORT**: Port default MySQL (3306)
- **DB_DATABASE**: Nama database (misalnya siswa)
- **DB_USERNAME**: Nama pengguna MySQL (biasanya root)
- **DB_PASSWORD**: Password pengguna (kosong jika belum disetel)

💡 Pastikan database bernama `siswa` sudah dibuat di MySQL sebelum melanjutkan.

---

## Migrasi Database

Setelah konfigurasi database selesai, Anda dapat menjalankan migrasi tabel default Laravel (seperti `users`, `password_resets`, dll) dengan perintah:

```bash
php artisan migrate
```

Perintah ini akan:

- Membuat tabel-tabel dasar untuk autentikasi pengguna
- Menggunakan skema migrasi yang terdapat dalam folder `database/migrations`

---

## Struktur Folder Laravel

Berikut beberapa direktori penting dalam Laravel:

- `app/` – Berisi logika aplikasi (model, controller, dll)
- `routes/web.php` – Tempat mendefinisikan URL routing
- `resources/views/` – Berisi file Blade (HTML)
- `database/` – Konfigurasi dan migrasi database
- `public/` – Root direktori yang dapat diakses oleh browser

---

## Langkah Berikutnya

- Membuat route dan controller
- Membuat tampilan dengan Blade view
- Menghubungkan model ke database
- Membuat fitur login dan registrasi
- Menambah dan menampilkan data dari database

---

## Kesimpulan

Laravel adalah framework PHP yang sangat powerful dan cocok untuk pengembangan aplikasi web modern. Dengan dokumentasi lengkap dan komunitas besar, Laravel menjadi pilihan ideal baik untuk pemula maupun profesional.

Dengan mengikuti langkah-langkah di atas, Anda sekarang dapat menjalankan Laravel, mengatur koneksi database, dan melakukan migrasi awal. Pada artikel berikutnya, kita akan membahas tentang pembuatan route dan controller dasar.

**Selamat mencoba Laravel, dan semoga sukses dalam pengembangan aplikasi Anda!**
