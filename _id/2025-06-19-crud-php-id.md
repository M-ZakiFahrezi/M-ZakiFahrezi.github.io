---
layout: post
title: "PHP: CRUD"
slug: pertemuan-13
lang: id
date: 2025-06-19
permalink: /id/pertemuan-13.html
---

# CRUD PHP: Create, Read, Update, dan Delete

CRUD adalah singkatan dari **Create, Read, Update, dan Delete**, yaitu empat operasi dasar yang biasa dilakukan dalam pengolahan data pada aplikasi berbasis web.

Dalam tutorial ini, kita akan belajar membuat fitur CRUD menggunakan **PHP** dan **MySQL**.

## 📌 Apa Itu CRUD?

| Operasi | Fungsi                                  |
| ------- | --------------------------------------- |
| Create  | Menambahkan data baru ke dalam database |
| Read    | Menampilkan data dari database          |
| Update  | Mengubah data yang sudah ada            |
| Delete  | Menghapus data dari database            |

## 🛠️ Persiapan

1. Install **XAMPP**
2. Buat database dengan nama `db_siswa`
3. Buat tabel `siswa`:

```sql
CREATE TABLE siswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    alamat TEXT,
    jenis_kelamin ENUM('L', 'P'),
    agama VARCHAR(50),
    sekolah_asal VARCHAR(100)
);
```

## 🧩 1. Koneksi ke Database (`koneksi.php`)

```php
<?php
$koneksi = mysqli_connect("localhost", "root", "", "db_siswa");

if (!$koneksi) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>
```

## 📝 2. Create (Menambahkan Data) - `tambah.php`

```php
<?php
include 'koneksi.php';

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "INSERT INTO siswa (nama, alamat, jenis_kelamin, agama, sekolah_asal)
        VALUES ('$nama', '$alamat', '$jenis_kelamin', '$agama', '$sekolah_asal')";

if (mysqli_query($koneksi, $sql)) {
    echo "Data berhasil ditambahkan";
} else {
    echo "Error: " . mysqli_error($koneksi);
}
?>
```

## 📄 3. Read (Menampilkan Data) - `list-siswa.php`

```php
<?php
include 'koneksi.php';
$sql = "SELECT * FROM siswa";
$result = mysqli_query($koneksi, $sql);

echo "<table border='1'>";
echo "<tr><th>ID</th><th>Nama</th><th>Aksi</th></tr>";
while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
            <td>{$row['id']}</td>
            <td>{$row['nama']}</td>
            <td>
                <a href='form-edit.php?id={$row['id']}'>Edit</a> |
                <a href='hapus.php?id={$row['id']}'>Hapus</a>
            </td>
          </tr>";
}
echo "</table>";
?>
```

## ✏️ 4. Update (Mengubah Data)

**Form Edit - `form-edit.php`:**

```php
<?php
include 'koneksi.php';
$id = $_GET['id'];
$result = mysqli_query($koneksi, "SELECT * FROM siswa WHERE id=$id");
$row = mysqli_fetch_assoc($result);
?>

<form action="update.php" method="POST">
    <input type="hidden" name="id" value="<?= $row['id'] ?>">
    Nama: <input type="text" name="nama" value="<?= $row['nama'] ?>"><br>
    Alamat: <textarea name="alamat"><?= $row['alamat'] ?></textarea><br>
    Jenis Kelamin:
    <input type="radio" name="jenis_kelamin" value="L" <?= $row['jenis_kelamin']=='L'?'checked':'' ?>> Laki-laki
    <input type="radio" name="jenis_kelamin" value="P" <?= $row['jenis_kelamin']=='P'?'checked':'' ?>> Perempuan<br>
    Agama: <input type="text" name="agama" value="<?= $row['agama'] ?>"><br>
    Sekolah Asal: <input type="text" name="sekolah_asal" value="<?= $row['sekolah_asal'] ?>"><br>
    <button type="submit">Update</button>
</form>
```

**Proses Update - `update.php`:**

```php
<?php
include 'koneksi.php';

$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "UPDATE siswa SET
        nama='$nama',
        alamat='$alamat',
        jenis_kelamin='$jenis_kelamin',
        agama='$agama',
        sekolah_asal='$sekolah_asal'
        WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
    echo "Data berhasil diupdate";
} else {
    echo "Error: " . mysqli_error($koneksi);
}
?>
```

## 🗑️ 5. Delete (Menghapus Data) - `hapus.php`

```php
<?php
include 'koneksi.php';
$id = $_GET['id'];

$sql = "DELETE FROM siswa WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
    echo "Data berhasil dihapus";
} else {
    echo "Error: " . mysqli_error($koneksi);
}
?>
```

## ✅ Penutup

Dengan memahami operasi CRUD di PHP dan MySQL, kamu sudah bisa membuat aplikasi web dasar yang menyimpan, menampilkan, mengedit, dan menghapus data.
