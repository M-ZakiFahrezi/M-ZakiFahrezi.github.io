---
layout: post
title: "PHP: CRUD"
slug: pertemuan-13
lang: en
date: 2025-06-19
permalink: /en/pertemuan-13.html
---

# CRUD PHP: Create, Read, Update, dan Delete

CRUD stands for **Create, Read, Update, and Delete**, which are four basic operations that are commonly performed in data processing in web-based applications.

In this tutorial, we will learn to create CRUD features using **PHP** and **MySQL**.

## 📌 What is CRUD?

| Operasi | Fungsi                               |
| ------- | ------------------------------------ |
| Create  | Creating new data into the database  |
| Read    | Reading data from database           |
| Update  | Updating existing data               |
| Delete  | Deleting data from database          |

## 🛠️ Preparation

1. Install **XAMPP**
2. Create a database named `db_student`
3. Create a table `student`:

```sql
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100),
    alamat TEXT,
    jenis_kelamin ENUM('L', 'P'),
    agama VARCHAR(50),
    sekolah_asal VARCHAR(100)
);
```

## 🧩 1. Connection to Database (`connection.php`)

```php
<?php
$koneksi = mysqli_connect("localhost", "root", "", "db_student");

if (!$koneksi) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
```

## 📝 2. Create (Creating Data) - `add.php`

```php
<?php
include 'koneksi.php';

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "INSERT INTO student (nama, alamat, jenis_kelamin, agama, sekolah_asal)
        VALUES ('$nama', '$alamat', '$jenis_kelamin', '$agama', '$sekolah_asal')";

if (mysqli_query($koneksi, $sql)) {
    echo "[EN] Data successfully ditambahkan";
} else {
    echo "[EN] Error: " . mysqli_error($koneksi);
}
?>
```

## 📄 3. Read (Reading Data) - `list-student.php`

```php
<?php
include 'koneksi.php';
$sql = "SELECT * FROM student";
$result = mysqli_query($koneksi, $sql);

echo "[EN] <table border='1'>";
echo "[EN] <tr><th>ID</th><th>Name</th><th>Aksi</th></tr>";
while ($row = mysqli_fetch_assoc($result)) {
    echo "[EN] <tr>
            <td>{$row['id']}</td>
            <td>{$row['nama']}</td>
            <td>
                <a href='form-edit.php?id={$row['id']}'>Edit</a> |
                <a href='hapus.php?id={$row['id']}'>Hapus</a>
            </td>
          </tr>";
}
echo "[EN] </table>";
?>
```

## ✏️ 4. Update (Updating Data)

**Form Edit - `form-edit.php`:**

```php
<?php
include 'koneksi.php';
$id = $_GET['id'];
$result = mysqli_query($koneksi, "SELECT * FROM student WHERE id=$id");
$row = mysqli_fetch_assoc($result);
?>

<form action="update.php" method="POST">
    <input type="hidden" name="id" value="<?= $row['id'] ?>">
    Name: <input type="text" name="nama" value="<?= $row['nama'] ?>"><br>
    Address: <textarea name="alamat"><?= $row['alamat'] ?></textarea><br>
    Gender:
    <input type="radio" name="jenis_kelamin" value="L" <?= $row['jenis_kelamin']=='L'?'checked':'' ?>> Male
    <input type="radio" name="jenis_kelamin" value="P" <?= $row['jenis_kelamin']=='P'?'checked':'' ?>> Female<br>
    Religion: <input type="text" name="agama" value="<?= $row['agama'] ?>"><br>
    Previous School: <input type="text" name="sekolah_asal" value="<?= $row['sekolah_asal'] ?>"><br>
    <button type="submit">Update</button>
</form>
```

**Update Process - `update.php`:**

```php
<?php
include 'koneksi.php';

$id = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$jenis_kelamin = $_POST['jenis_kelamin'];
$agama = $_POST['agama'];
$sekolah_asal = $_POST['sekolah_asal'];

$sql = "UPDATE student SET
        nama='$nama',
        alamat='$alamat',
        jenis_kelamin='$jenis_kelamin',
        agama='$agama',
        sekolah_asal='$sekolah_asal'
        WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
    echo "[EN] Data successfully diupdate";
} else {
    echo "[EN] Error: " . mysqli_error($koneksi);
}
?>
```

## 🗑️ 5. Delete (Deleting Data) - `delete.php`

```php
<?php
include 'koneksi.php';
$id = $_GET['id'];

$sql = "DELETE FROM student WHERE id=$id";

if (mysqli_query($koneksi, $sql)) {
    echo "[EN] Data successfully dihapus";
} else {
    echo "[EN] Error: " . mysqli_error($koneksi);
}
?>
```

## ✅ Conclusion

By understanding CRUD operations in PHP and MySQL, you can create basic web applications that store, display, edit, and delete data.
