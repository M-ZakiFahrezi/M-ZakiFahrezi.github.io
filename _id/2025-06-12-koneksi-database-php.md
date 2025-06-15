---
layout: post
title: "Koneksi Database MySQL dengan PHP"
slug: pertemuan-12C
lang: id
date: 2025-06-12
permalink: /id/pertemuan-12C.html
---

# Koneksi Database MySQL dengan PHP

Membuat koneksi antara PHP dan database MySQL adalah langkah dasar yang penting dalam pengembangan aplikasi web dinamis. PHP menyediakan fungsi `mysqli_connect()` untuk menghubungkan ke database MySQL.

---

## 🔧 Persiapan

Sebelum membuat koneksi, pastikan:

1. Anda memiliki server lokal seperti **XAMPP**, **Laragon**, atau **WAMP**.
2. Database sudah dibuat (contoh: database bernama `siswa`).
3. PHP dan MySQL sudah berjalan di server lokal.

---

## 💡 Struktur Dasar Koneksi

Berikut adalah contoh struktur dasar koneksi database menggunakan `mysqli`:

```php
<?php

$host = "localhost";         // Nama host (biasanya 'localhost')
$username = "root";          // Username MySQL (default: root di XAMPP)
$password = "";              // Password MySQL (kosong di XAMPP)
$db_name = "siswa";          // Nama database

$koneksi = mysqli_connect($host, $username, $password, $db_name);

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
} else {
    echo "Koneksi database berhasil";
}

?>
```

---

## 🔍 Penjelasan Kode

| Bagian Kode                         | Penjelasan                                                              |
| ----------------------------------- | ----------------------------------------------------------------------- |
| `$host = "localhost";`              | Server database. Biasanya "localhost" untuk server lokal.               |
| `$username = "root";`               | Username untuk akses MySQL. Default di XAMPP adalah "root".             |
| `$password = "";`                   | Password user. Biasanya kosong di server lokal.                         |
| `$db_name = "siswa";`               | Nama database yang ingin dihubungkan. Pastikan sudah dibuat sebelumnya. |
| `mysqli_connect(...)`               | Fungsi PHP untuk membuka koneksi ke MySQL.                              |
| `!$koneksi`                         | Mengecek apakah koneksi berhasil atau tidak.                            |
| `mysqli_connect_error()`            | Menampilkan pesan error jika koneksi gagal.                             |
| `echo "Koneksi database berhasil";` | Menampilkan pesan jika koneksi berhasil.                                |

---

## 🛠 Tips Tambahan

- Simpan file koneksi Anda sebagai `koneksi.php`, lalu **include** atau **require** file ini di halaman PHP lainnya:

```php
include 'koneksi.php';
// atau
require 'koneksi.php';
```

- Gunakan `require_once` jika Anda ingin memastikan file hanya di-include sekali:

```php
require_once 'koneksi.php';
```

- Untuk keamanan di aplikasi nyata:
  - Jangan tampilkan pesan error langsung di halaman produksi.
  - Gunakan file `.env` atau konfigurasi tersembunyi untuk menyimpan kredensial.
  - Gunakan `PDO` atau `mysqli` dengan prepared statements untuk mencegah SQL Injection.

---

## ❗ Kesalahan Umum

| Masalah                      | Solusi                                                              |
| ---------------------------- | ------------------------------------------------------------------- |
| Koneksi gagal                | Periksa kembali nama host, username, password, dan nama database.   |
| Tidak ada tampilan sukses    | Pastikan server Apache dan MySQL sudah dijalankan.                  |
| `mysqli_connect()` undefined | PHP tidak memiliki ekstensi mysqli. Aktifkan di php.ini jika perlu. |

---

## 📚 Kesimpulan

Koneksi ke database adalah dasar dari hampir semua aplikasi web dinamis. Pastikan Anda memahami struktur koneksi ini agar dapat membangun aplikasi yang menggunakan data dari MySQL. Setelah koneksi berhasil, Anda bisa menjalankan query untuk menampilkan, menyimpan, atau memanipulasi data di database Anda.

---

## 🚀 Langkah Selanjutnya

Setelah memahami koneksi database, pelajari topik berikut:

- Menjalankan query SQL dengan PHP
- Menampilkan data dari database
- Input data menggunakan form HTML
- Keamanan (validasi & sanitasi data)
