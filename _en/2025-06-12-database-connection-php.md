---
layout: post
title: "Connecting to MySQL Database with PHP"
slug: pertemuan-12C
lang: en
date: 2025-06-12
permalink: /en/pertemuan-12C.html
---

# Connecting to MySQL Database with PHP

Connecting PHP with a MySQL database is a fundamental step in developing dynamic web applications. PHP provides the `mysqli_connect()` function to establish a connection to a MySQL database.

---

## 🔧 Preparation

Before creating the connection, ensure that:

1. You have a local server like **XAMPP**, **Laragon**, or **WAMP**.
2. The database is already created (e.g., a database named `siswa`).
3. PHP and MySQL are running on your local server.

---

## 💡 Basic Connection Structure

Here's an example of a basic database connection using `mysqli`:

```php
<?php

$host = "localhost";         // Hostname (usually 'localhost')
$username = "root";          // MySQL username (default: root in XAMPP)
$password = "";              // MySQL password (usually empty in XAMPP)
$db_name = "siswa";          // Name of the database

$connection = mysqli_connect($host, $username, $password, $db_name);

if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Database connection successful";
}

?>
```

---

## 🔍 Code Explanation

| Code Segment                             | Explanation                                                      |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `$host = "localhost";`                   | Database server. Usually "localhost" on a local server.          |
| `$username = "root";`                    | MySQL access username. Default in XAMPP is "root".               |
| `$password = "";`                        | User password. Usually empty on local servers.                   |
| `$db_name = "siswa";`                    | The name of the database to connect. Ensure it has been created. |
| `mysqli_connect(...)`                    | PHP function to establish a connection to MySQL.                 |
| `!$connection`                           | Checks whether the connection was successful.                    |
| `mysqli_connect_error()`                 | Displays the error message if the connection fails.              |
| `echo "Database connection successful";` | Displays message if connection is successful.                    |

---

## 🛠 Additional Tips

- Save your connection file as `koneksi.php`, then **include** or **require** it in other PHP pages:

```php
include 'koneksi.php';
// or
require 'koneksi.php';
```

- Use `require_once` to ensure the file is included only once:

```php
require_once 'koneksi.php';
```

- For real-world applications:
  - Do not display error messages directly in production.
  - Use a `.env` file or hidden configuration for credentials.
  - Use `PDO` or `mysqli` with prepared statements to prevent SQL Injection.

---

## ❗ Common Errors

| Issue                        | Solution                                                        |
| ---------------------------- | --------------------------------------------------------------- |
| Connection failed            | Double-check host, username, password, and database name.       |
| No success message shown     | Ensure Apache and MySQL servers are running.                    |
| `mysqli_connect()` undefined | PHP lacks the mysqli extension. Enable it in php.ini if needed. |

---

## 📚 Conclusion

Connecting to a database is the foundation of almost every dynamic web application. Understanding this structure is essential to build applications that interact with MySQL data. Once connected, you can run queries to display, store, or manipulate your data.

---

## 🚀 Next Steps

After mastering database connection, explore the following topics:

- Executing SQL queries with PHP
- Displaying data from the database
- Input via HTML forms
- Security (validation & data sanitation)
